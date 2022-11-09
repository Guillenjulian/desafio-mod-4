function cardsCreater(params = {}) {
  const templetEl = document.querySelector("#cards__template");
  const cardsEL = document.querySelector(".cards");

  templetEl.content.querySelector(".card__title").textContent = params.title;
  templetEl.content.querySelector(".cards__img").src = params.img;
  templetEl.content.querySelector(".card__text").textContent = params.desc;

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
        };
      });
      return fieldsColection;
    });
}
