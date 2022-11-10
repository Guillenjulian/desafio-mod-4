function main() {
  headerCreater(document.querySelector(".headerContainer"));

  getData().then(function (works) {
    for (const w of works) {
      addCards(w);
    }
  });
  footerCreater(document.querySelector(".footer"));
}
main();
