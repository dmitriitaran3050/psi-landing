(function () {
  "use strict";

  const YM_COUNTER_ID = 108656678;

  function reachGoal(goalName) {
    if (typeof window.ym === "function") {
      window.ym(YM_COUNTER_ID, "reachGoal", goalName);
    }
  }

  document.querySelectorAll("[data-channel]").forEach(function (link) {
    const channel = link.getAttribute("data-channel");

    link.addEventListener("click", function () {
      reachGoal("registration_click");
      reachGoal("registration_" + channel);
    });
  });
})();
