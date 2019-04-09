$(document).ready(function () {
    var id;
    $(window).resize(function () {
        clearTimeout(id);
        id = setTimeout(doneResizing, 100);
    });

    function doneResizing() {
        if ($(window).width() >1023) {
            var image_height = $('img.logo').height();
            $('img.dask').css({'height': image_height}*0.3);
            var table_h = $('#mid').height();
            $('.mid2').css({'height': table_h});
        }else {
            $('img.dask').css({'height': image_height * 1.2});
        }
    }
});
// checkbox
$(document).ready(function () {
    var image_height = $('img.logo').height();
    $('img.dask').css({'height': image_height * 1.2});
});

$('.radio_sex label').click(function () {
    if ($(this).hasClass('current')) {
        $(this).removeClass('current');
    } else {
        $('.radio_sex label').removeClass('current');
        $(this).addClass('current');
    }
});
// members

$('.members label').click(function () {
    if ($(this).hasClass('checked')) {
        $(this).removeClass('checked');
    } else {
        $('.members label').removeClass('checked');
        $(this).addClass('checked');
    }
});
$('.check label').click(function () {
    $(this).find('.checkbox').toggleClass('ckh');
});

$(document).ready(function () {
    if ($(window).width() < 768) {
        $('html, body').animate({
            scrollTop: $("div.content_box").offset().top
        })
    }

});