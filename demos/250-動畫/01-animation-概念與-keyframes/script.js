const routeDemo = document.querySelector("#routeDemo");
const replayRoute = document.querySelector("#replayRoute");

replayRoute.addEventListener("click", () => {
  routeDemo.classList.remove("is-running");
  void routeDemo.offsetWidth;
  routeDemo.classList.add("is-running");
});
