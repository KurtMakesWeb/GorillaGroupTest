jQuery(document).ready(function() {

  jQuery('.dropdown-toggle').dropdown();

  jQuery('#layouter').on('click', '.layouter__item', function() {
    // Change Layout
    var thisStyle = jQuery(this).data('style');
    jQuery('#products')
      .removeClass('products--grid')
      .removeClass('products--list')
      .addClass(thisStyle);
    // Select Correct Button
    jQuery(this)
      .addClass('layouter__item--active')
      .siblings()
      .removeClass('layouter__item--active');
  });

});