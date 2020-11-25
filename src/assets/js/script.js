/* jshint esversion: 6 */

jQuery(($) => {
    $(document).on('click', '.lightboxgallery-gallery-item', (event) => {
        event.preventDefault();
        $(this).lightboxgallery({
            showCounter: true,
            showTitle: true,
            showDescription: true
        });
    });
});
