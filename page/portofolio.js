//https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/master/entries/2G6HSNNPDXhapfTDNHXFse?access_token=R3dhIjzxcIiPe-3vfTYDD4aZnBqZHeHTqT5Ei6JjtYQ

//curl --include \
//      --request GET \
//    https://cdn.contentful.com/spaces/kwnz86dm90rc/environments/{environment_id}/content_types/hero?access_token=R3dhIjzxcIiPe-3vfTYDD4aZnBqZHeHTqT5Ei6JjtYQ

function main() {
  // esta funcion trae el header
  headerCreater(document.querySelector(".headerContainer"));

  // esta funcion tre el formato de las cads
  cardsCreater(document.querySelector(".cardscontainer"));

  // esta funcion trae el footer
  footerCreater(document.querySelector(".footer"));
}
main();
