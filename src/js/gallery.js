$(document).ready(function () {
  var gallary = $('#gallery');

  gallary.imagesLoaded(function () {
    gallary.masonry({
      itemSelector: '.gallery-item',
      columnWidth: '.gallery-sizer',
      gutter: 2.5,
      // originTop: false,
      // percentPosition: true,
    });
  });
});
// console.log($('.gallery'));
