//Fixed height 100%
$(window).resize(function () {
    SetHeight();
});

function SetHeight() {
    var iHeight = parseInt($(window).height());
    $(".mail_top").css("height", iHeight - 380);
    $(".mail_detail").css("height", iHeight - 330);

}

//function trim(s) {
//    var l = 0;
//    var r = s.length - 1;
//    while (l < s.length && s[l] == ' ') {
//        l++;
//    }
//    while (r > l && s[r] == ' ') {
//        r -= 1;
//    }
//    return s.substring(l, r + 1);
//}
$(document).ready(function () {
    SetHeight();
});



//TABs
$(document).ready(function () {

    // tabs tranfer
    $('div.tranfer-wrapper').find('.tab_tranfer:not(:first)').hide();
    $('ul.tabs_tranfer > li:first-child').addClass('active');

    $('ul.tabs_tranfer a').click(function (event) {
        event.preventDefault();

        // make tab button active
        $(this).closest('ul').find('li').removeClass('active');
        $(this).closest('li').addClass('active');

        // hide inactive tab and show new tab
        $(this).closest('div').find('.tab_tranfer').hide();
        var showme = $(this).attr('id');
        $(this).closest('div').find('.tab_tranfer.' + showme).fadeIn();
    });


    // back to top smooth scroll
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            'scrollTop': $('body').offset().top
        }, 900, 'swing');
    });


});


$(window).scroll(function () {
    // on scroll, make the navigation fixed
    if ($(this).scrollTop() > 80) {
        $('.header').addClass('fixed-header');
        $('#back-to-top').css('display', 'block');
    } else {
        $('.header').removeClass('fixed-header');
        $('#back-to-top').hide();
    }
});
//Menu left right
$(document).ready(function($) {
    var contactright = function (obj) {
        $(obj).hover(
            function () {
                $(this).animate({
                    right: '0'
                });
            },
            function () {
                $(this).animate({
                    right: '-262px'
                });
            }
        );
    };


    $('.box_right').animate({
        right: '-262px'
    }, function () { contactright(this); });


    // HOT GAMES	
    var bannerleft = function (obj) {
        $(obj).hover(
            function () {
                $(this).animate({
                    left: '0'
                });
            },
            function () {
                $(this).animate({
                    left: '-160px'
                });
            }
        );
    };


    // CONTACT US	
    $('.box_left').animate({
        left: '-160px'
    }, function () { bannerleft(this); });
});
