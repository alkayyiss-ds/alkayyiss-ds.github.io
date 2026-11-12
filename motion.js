/* ==========================================================================
   React motion islands (no build step).
   React and ReactDOM come from cdnjs (see index.html). If they fail to load,
   the page still works: every island replaces markup that is already correct.

   1. HeroFx   - orange blobs that follow the pointer (mounted in #hero-fx).
   2. CountUp  - metric numbers that count up when scrolled into view
                 (mounted on every [data-countup]).

   Both are skipped under prefers-reduced-motion.
   ========================================================================== */
(function () {
  "use strict";

  if (!window.React || !window.ReactDOM || !ReactDOM.createRoot) return;

  var h = React.createElement;
  var useEffect = React.useEffect;
  var useRef = React.useRef;
  var useState = React.useState;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  /* ------------------------------------------------------------------------
     HeroFx: three layers with different depth. The pointer sets a target;
     a rAF loop eases each layer toward it, so the motion feels springy.
     ------------------------------------------------------------------------ */
  var DEPTHS = [
    { cls: "hero__fx-layer--a", depth: 26 },
    { cls: "hero__fx-layer--b", depth: -34 },
    { cls: "hero__fx-layer--c", depth: 14 }
  ];

  function HeroFx(props) {
    var layers = useRef([]);

    useEffect(function () {
      var area = props.area;
      var target = { x: 0, y: 0 };
      var current = { x: 0, y: 0 };
      var raf = 0;

      function onMove(e) {
        if (e.pointerType && e.pointerType !== "mouse") return;
        var r = area.getBoundingClientRect();
        target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
        start();
      }
      function onLeave() {
        target.x = 0;
        target.y = 0;
        start();
      }
      function start() {
        if (!raf) raf = requestAnimationFrame(tick);
      }
      function tick() {
        current.x += (target.x - current.x) * 0.08;
        current.y += (target.y - current.y) * 0.08;
        layers.current.forEach(function (el, i) {
          if (!el) return;
          var d = DEPTHS[i].depth;
          el.style.transform = "translate3d(" + (current.x * d).toFixed(2) + "px," + (current.y * d).toFixed(2) + "px,0)";
        });
        var settled = Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;
        raf = settled ? 0 : requestAnimationFrame(tick);
      }

      area.addEventListener("pointermove", onMove);
      area.addEventListener("pointerleave", onLeave);
      return function () {
        area.removeEventListener("pointermove", onMove);
        area.removeEventListener("pointerleave", onLeave);
        if (raf) cancelAnimationFrame(raf);
      };
    }, [props.area]);

    return DEPTHS.map(function (d, i) {
      return h(
        "div",
        { key: d.cls, className: "hero__fx-layer " + d.cls, ref: function (el) { layers.current[i] = el; } },
        h("div", { className: "hero__fx-blob" })
      );
    });
  }

  /* ------------------------------------------------------------------------
     CountUp: eases from 0 to `to` once the element is on screen. Screen
     readers get the final value right away; the animated digits are hidden.
     ------------------------------------------------------------------------ */
  function CountUp(props) {
    var holder = useRef(null);
    var state = useState(0);
    var value = state[0];
    var setValue = state[1];

    useEffect(function () {
      var el = holder.current;
      var raf = 0;
      var started = false;
      var duration = 1300;

      function run() {
        var t0 = performance.now();
        function step(now) {
          var p = Math.max(0, Math.min((now - t0) / duration, 1));
          setValue(Math.round(props.to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        }
        raf = requestAnimationFrame(step);
      }

      if (!("IntersectionObserver" in window)) {
        setValue(props.to);
        return undefined;
      }
      var io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && !started) {
          started = true;
          io.disconnect();
          run();
        }
      }, { threshold: 0.6 });
      io.observe(el);
      return function () {
        io.disconnect();
        if (raf) cancelAnimationFrame(raf);
      };
    }, [props.to]);

    var full = (props.prefix || "") + props.to;
    return h(
      "span",
      { ref: holder },
      h("span", { className: "visually-hidden" }, full),
      h("span", { "aria-hidden": "true" }, (props.prefix || "") + value)
    );
  }

  /* ------------------------------------------------------------------------
     Mount
     ------------------------------------------------------------------------ */
  var fx = document.getElementById("hero-fx");
  var hero = document.querySelector(".hero");
  if (fx && hero) ReactDOM.createRoot(fx).render(h(HeroFx, { area: hero }));

  document.querySelectorAll("[data-countup]").forEach(function (el) {
    var to = Number(el.getAttribute("data-countup"));
    if (!isFinite(to)) return;
    ReactDOM.createRoot(el).render(h(CountUp, { to: to, prefix: el.getAttribute("data-prefix") || "" }));
  });
})();
