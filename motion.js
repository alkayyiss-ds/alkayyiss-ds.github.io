/* ==========================================================================
   React motion islands (no build step).
   React and ReactDOM come from cdnjs (see index.html). If they fail to load,
   the page still works: every island replaces markup that is already correct.

   CountUp - metric numbers that count up when scrolled into view
             (mounted on every [data-countup]). Skipped under
             prefers-reduced-motion.
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
  document.querySelectorAll("[data-countup]").forEach(function (el) {
    var to = Number(el.getAttribute("data-countup"));
    if (!isFinite(to)) return;
    ReactDOM.createRoot(el).render(h(CountUp, { to: to, prefix: el.getAttribute("data-prefix") || "" }));
  });
})();
