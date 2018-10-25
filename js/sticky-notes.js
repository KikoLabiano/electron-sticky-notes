const $ = require('jquery');
const tippy = require('tippy.js');

$(function() {

  tippy.setDefaults({
    arrow: true,
    arrowType: 'sharp',
    delay: 40,
    theme: 'my-tippy'
  });

  $("#sticky-add").on("click", () => {
    stickyNotes.createStickyNote();
  });
  $("#sticky-minimize").on("click", () => {
    stickyNotes.minimizeStickyNote();
  });
  $("#sticky-delete").on("click", () => {
    stickyNotes.deleteStickyNote();
  });
  $("#sticky-save").on("click", () => {
    stickyNotes.saveStickyNote();
  });
});
