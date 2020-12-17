// Navigation header
// Requires bootstrap
// Import this script and then
// insert a <div id="nav-component"></div> outside of any (Bootstrap) container.
console.log(window.location);

const navBar = `
<ul class="nav">
    <li class="nav-item">
    <a class="nav-link" href="../index.html">Languages Index</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="../../index.html">Top</a>
  </li>
</ul>
`
const navComponent = document.getElementById('nav-component');
navComponent.style = "background-color:#f8f9fa;margin-bottom:2rem";
navComponent.innerHTML = navBar;