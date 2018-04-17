$(document).on('change', 'input[type=file].filescount', function() {
    var text_label_id = $(this).attr('id');
    var text_label = $('label[for="' + text_label_id + '"]');

    if ( $(this).val() != '' ){
      text_label.text( 'Выбрано файлов: ' + $(this)[0].files.length );
    } else {
      text_label.text( 'Выберите файлы' );
    }
});
