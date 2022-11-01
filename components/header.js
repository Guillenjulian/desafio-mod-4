function headerCreater(headerContainer) {
  const headerEl = document.createElement("header");
  headerEl.innerHTML = `        <header class="header">
      <div id="hamburger">
        <!-- en este modulo armo elmenu hamburgesa en medida risponcio de 960px -->
        <input type="checkbox" name="nav-btn" id="nav-btn" />
        <span></span>
        <nav>
          <ul>
            <li><a class="hamburger__960-a" href="./index.html">Home</a></li>
            <li><a class="hamburger__960-a" href="./portafolio.html">Portafolio</a></li>
            <li><a class="hamburger__960-a" href="./servicios.html">Service</a></li>
            <li><a class="hamburger__960-a" href="./contacto.html">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="hamburger__960">
        <a class="hamburger__960-a" href="./index.html">Home</a>
        <a class="hamburger__960-a" href="./portafolio.html">Portafolio</a>
        <a class="hamburger__960-a" href="./servicios.html">Service</a>
        <a class="hamburger__960-a" href="./contacto.html">Contacto</a>
      </div>
      <div class="logo">
        <img
          class="logo__img"
          src="./style-img-logo-etc/logo-removebg-preview.png"
          alt=""
        />
      </div>
    </header>`;

  //console.log(headerEl);
  headerContainer.appendChild(headerEl);
}
