//--CMS para generar las cards del inicio
function cardsCreater(params = {}) {
  const templetEl = document.querySelector("#cards__template");
  const cardsEL = document.querySelector(".cards");

  templetEl.content.querySelector(".card__title").textContent = params.title;
  templetEl.content.querySelector(".cards__img").src = params.img;
  templetEl.content.querySelector(".card__text").textContent = params.desc;
  templetEl.content.querySelector(".card__link").href = params.link;

  //console.log(cardsEL, templetEl);
  const clone = templetEl.content.cloneNode(true);

  cardsEL.appendChild(clone);
}

function getCards() {
  return fetch(
    "https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries?access_token=6vbVTaB0u7IgTgtNuBFYoZma3Z2paU9O2zHGdyCwdD4&content_type=works"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsColection = data.items.map((item) => {
        return {
          title: item.fields.title,
          subtitle: item.fields.subTitle,
          img: data.includes.Asset[0].fields.file.url,
          desc: item.fields.description,
          link: item.fields.url,
        };
      });
      return fieldsColection;
    });
}
// esta funciones crean el CMS del las card de servicio y portafolo
function getData() {
  return fetch(
    "https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries?access_token=vaS1bF8J0--5XkX33qLd-5o_qmrr992V7QzOj1GkCKA&content_type=desafioMod4"
  )
    .then((res) => res.json())

    .then((data) => addCards(data));
}
function addCards(data) {
  const templetEl = document.querySelector("#cards__template");
  const contentEl = document.querySelector(".cardsContainer");

  const dataEl = data.items;

  for (let i = 0; i < dataEl.length; i++) {
    const clone = templetEl.content.cloneNode(true);

    let imgEl = (clone.querySelector(".portafolio__card-img").src =
      data.includes.Asset[i].fields.file.url);

    let titleEl = (clone.querySelector(".portafolio__card-title").textContent =
      data.items[i].fields.title);

    let descEl = (clone.querySelector(".portafolio__card-text").textContent =
      data.items[i].fields.textInfo);

    let linkEl = (clone.querySelector(".portafolio__card-link").href =
      data.items[i].fields.url);

    contentEl.appendChild(clone);
  }
}
