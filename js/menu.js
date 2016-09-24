/**
 * Created by GAMES on 15.09.2016.
 */
/*var menu=$('.butt')*/
$('.menu-all').ready(function () {
    $('.butt').on('click', function () {

        var menu = $('.menu-inner ul li');
        var close = $('.butt');

        if (menu.css('display') === 'none') {

            close.attr( 'src', "img/menu_close1.png" );


            menu.slideDown()
            menu.css('display','inline-block');


        }
        else {

            menu.slideUp();
            close.attr( 'src', "img/menu.png" );

        }


    })

});

