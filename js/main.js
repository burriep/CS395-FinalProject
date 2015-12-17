var currentPageURL = window.location.pathname.toLowerCase();
var currentPageLinks = document.getElementsByTagName('a');
for (var i = 0; i < currentPageLinks.length; i++) {
  if (currentPageLinks[i].getAttribute('href') !== null && currentPageLinks[i].getAttribute('href').toLowerCase() === currentPageURL) {
    currentPageLinks[i].classList.add('CurrentPage');
  }
}
