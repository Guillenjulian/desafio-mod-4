function footerCreater(footercontainer) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
  <div class="footer">
  <div class="logo">
    <img
      class="logo__img"
      src="./style-img-logo-etc/logo-removebg-preview.png"
      alt=""
    />
  </div>

  <div class="redes">
    <ul class="redes__li">
      <li>
        <img
          class="logo-redes"
          src="./style-img-logo-etc/instagram.png"
          alt=""
        />
        <a
          class="redes__li-a"
          href="https://www.instagram.com/juliannguillen2/"
        >
          github</a
        >
      </li>
      <li>
        <img
          class="logo-redes"
          src="./style-img-logo-etc/linkedin (1).png"
          alt=""
        />
        <a
          class="redes__li-a"
          href="https://www.linkedin.com/in/julian-guillen-80929b228/
        "
        >
          linkedin</a
        >
      </li>
      <li>
        <img
          class="logo-redes"
          src="./style-img-logo-etc/github (2).png"
          alt=""
        />
        <a class="redes__li-a" href="https://github.com/Guillenjulian">
          github</a
        >
      </li>
    </ul>
  </div>
</div>`;
  footercontainer.appendChild(footerEl);
}
