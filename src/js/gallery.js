$(document).ready(function () {
  var gallery = $('#gallery');
  gallery.imagesLoaded(function () {
    gallery.masonry({
      itemSelector: '.gallery-item',
      columnWidth: '.gallery-sizer',
      gutter: 1,
      // originTop: false,
      // percentPosition: true,
    });
  });
});
// console.log($('.gallery'));
