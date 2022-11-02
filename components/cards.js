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

  cardscontainer.appendChild(cardsEl);
}
function addcards(params = {}) {
  const cardEl = document.querySelector(".portafolio__conteiner");
}

function getCard() {
  return fetch(
    "https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/content_types/desafioMod4?access_token=vaS1bF8J0--5XkX33qLd-5o_qmrr992V7QzOj1GkCKA"
  )
    .then((res) => {
      return res.json();
    })
    .then(() => {
      return "hola";
    });
}
