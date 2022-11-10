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
      console.log(data);
      const fieldsColection = data.items.map((item) => {
        return {
          title: item.fields.title,
          subtitle: item.fields.subTitle,
          img: data.includes.Asset[0].fields.file.url,
          desc: item.fields.description,
          //     link: item.includes.items[0].fields.url.content[0].content[0].value,
        };
      });
      return fieldsColection;
    });
}
// esta funciones crean el CMS del las card de servicio y portafolo
function addCards(params = {}) {
  const templetEl = document.querySelector("#cards__template");
  const contentEl = document.querySelector(".cardsContainer");

  templetEl.content.querySelector(".portafolio__card-title").textContent =
    params.title;

  templetEl.content.querySelector(".portafolio__card-img").src = params.img;
  templetEl.content.querySelector(".portafolio__card-text").textContent =
    params.description;
  templetEl.content.querySelector(".portafolio__card-link").url = params.url;

  console.log(templetEl, contentEl);
  const clone = templetEl.content.cloneNode(true);

  contentEl.appendChild(clone);
}
function getData() {
  return fetch(
    "https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries?access_token=vaS1bF8J0--5XkX33qLd-5o_qmrr992V7QzOj1GkCKA&content_type=desafioMod4"
  )
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      console.log(data);
      const fieldsColection = data.items.map((item) => {
        return {
          title: item.fields.title,
          url: item.fields.url,
          img: data.includes.Asset[0].fields.file.url,
          description: item.fields.textInfo,
        };
      });
      return fieldsColection;
    });
}
