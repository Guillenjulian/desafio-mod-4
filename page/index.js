function addHero(params = {}) {
  const templet = document.querySelector("#hero__template");
  const content = document.querySelector(".hero");
  templet.content.querySelector(".hero__title").textContent = params.title;
  templet.content.querySelector(".hero__text").textContent = params.subTitulo;
  templet.content.querySelector(".hero__img").src = params.image;
  templet.content.querySelector(".hero__link").href = params.url;

  let clone = document.importNode(templet.content, true);
  content.appendChild(clone);
}

function getData() {
  return fetch(
    "https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries/2G6HSNNPDXhapfTDNHXFse?access_token=R3dhIjzxcIiPe-3vfTYDD4aZnBqZHeHTqT5Ei6JjtYQ"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsColection = data.map((e) => {
        e.fields.title;
        console.log(e.fields.subTitulo);
      });

      return fieldsColection;
    });
}

function main() {
  getData().then(function (words) {
    for (let w of words) {
      addHero(w);
    }
  });
  // addCard();
  // esta funcion trae el header
  headerCreater(document.querySelector(".headerContainer"));

  // esta funcion tre el formato de las cads
  cardsCreater(document.querySelector(".cardsContainer"));

  // esta funcion trae el form
  formCreater(document.querySelector(".conteinerform"));

  footerCreater(document.querySelector(".footer"));
}
main();
