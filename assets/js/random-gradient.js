$(document).ready(function(){
    var colors = ["green", "purple", "orange","blue"];

    $(".category").each(function(){
        $(this).addClass(colors[~~(Math.random()*colors.length)]);
        // $(this).addClass( colors.splice( ~~(Math.random()*colors.length), 1 )[0] );
    });
});