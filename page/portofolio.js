function main() {
  // esta funcion trae el header
  headerCreater(document.querySelector(".headerContainer"));

  // esta funcion tre el formato de las cads
  getData();
  // getData().then(function (works) {
  //   for (const w of works) {
  //     addCards(w);
  //   }
  // });
  // esta funcion trae el footer
  footerCreater(document.querySelector(".footer"));
}
main();
