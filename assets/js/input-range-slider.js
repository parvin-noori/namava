//range price

$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 1900,
        max:2022,
        values: [ 1900, 2022],
        slide: function( event, ui ) {
            $( "#min-price" ).text(  ui.values[ 0 ] + ' از' );
            $( "#max-price" ).text(    ui.values[ 1 ] + ' تا'  );
        }
    });
    $( "#min-price" ).text(  $( "#slider-range" ).slider( "values", 0 )+ ' از ' );

    $( "#max-price" ).text(  $( "#slider-range" ).slider( "values", 1 )+ ' تا ' );
});