function addHero(params = {}) {
  const templetEl = document.querySelector("#Welcome__Template");
  const contentEl = document.querySelector(".welcome");

  templetEl.content.querySelector(".welcome__title").textContent = params.title;
  templetEl.content.querySelector(".welcome__subtitle").textContent =
    params.subtitle;
  templetEl.content.querySelector(".welcome__img").src = params.img;
  templetEl.content.querySelector(".welcome__description").textContent =
    params.description;

  const clone = templetEl.content.cloneNode(true);

  contentEl.appendChild(clone);
}

function getData() {
  return (
    fetch(
      "https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries?access_token=R3dhIjzxcIiPe-3vfTYDD4aZnBqZHeHTqT5Ei6JjtYQ&content_type=hero"
    )
      .then((res) => {
        return res.json();
      })
      // .then((data) => addHero(data));
      .then((data) => {
        console.log(data);
        const fieldsColection = data.items.map((item) => {
          return {
            title: item.fields.title,
            subtitle: item.fields.subTitle,
            img: data.includes.Asset[0].fields.file.url,
            description: item.fields.description,
          };
        });
        return fieldsColection;
      })
  );
}

function main() {
  getData().then(function (works) {
    for (const w of works) {
      addHero(w);
    }
  });

  // esta funcion trae el header
  headerCreater(document.querySelector(".headerContainer"));

  // esta funcion tre el formato de las cads
  cardsCreater(document.querySelector(".cardsContainer"));

  // esta funcion trae el form
  formCreater(document.querySelector(".conteinerform"));

  footerCreater(document.querySelector(".footer"));
}
main();
