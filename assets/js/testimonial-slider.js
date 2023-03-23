tns({
  container: ".testimonial-slider",
  items: 3,
  slideBy: "page",
  autoplay: false,
  mouseDrag: true,
  gutter: 0,
  nav: true,
  controls: false,
  controlsText: ['<i class="lni lni-arrow-left"></i>', '<i class="lni lni-arrow-right"></i>'],
  responsive: { 0: { items: 1 }, 540: { items: 1 }, 768: { items: 1 }, 992: { items: 1 }, 1170: { items: 1 } },
});
var cu = new counterUp({ start: 0, duration: 2000, intvalues: true, interval: 100, append: " " });
cu.start();
imagesLoaded("#container", function () {
  var elem = document.querySelector(".grid");
  var iso = new Isotope(elem, { itemSelector: ".grid-item", masonry: { columnWidth: ".grid-item" } });
  let filterButtons = document.querySelectorAll(".portfolio-btn-wrapper button");
  filterButtons.forEach((e) =>
    e.addEventListener("click", () => {
      let filterValue = event.target.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });
    })
  );
});
