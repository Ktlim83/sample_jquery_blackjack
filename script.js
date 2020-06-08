$(document).ready(function () {
    $('img').hover(function () {

        var backCard = $(this).attr('src');
        
        $(this).attr('src', $(this).attr('data-alt-src'));
        $(this).attr('data-alt-src', backCard);





    });













}) // end doc ready