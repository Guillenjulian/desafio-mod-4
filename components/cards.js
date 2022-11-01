function cardsCreater(cardscontainer) {
  const cardsEl = document.createElement("div");
  cardsEl.innerHTML = `
    <div class="portafolio__conteiner">
    <div class="portafolio__card">
      .
      <img
        class="portafolio__card-img"
        src="./style-img-logo-etc/logo-removebg-preview.png"
        alt=""
      />
      <h3 class="portafolio__card-title">desafio del mod 1</h3>
      <p class="portafolio__card-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        eum enim quia. Porro ab nesciunt nisi ipsa nulla aperiam velit.
      </p>
      <a
        class="portafolio__card-link"
        href="https://github.com/Guillenjulian"
        >link</a
      >
    </div>
  </div>
    `;

  function addCard() {
    const templetCard = document.querySelector("#template__cards");
    const contentCard = document.querySelector(".portafolio__conteiner");

    let clone = document.importNode(templetCard.content, true);
    contentCard.appendChild(clone);
  }
  // addCard();
  cardscontainer.appendChild(cardsEl);
}
