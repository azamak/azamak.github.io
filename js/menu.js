/**
 * Created by GAMES on 15.09.2016.
 */
/*var menu=$('.butt')*/
$('.menu-all').ready(function () {
    $('.butt').on('click', function () {
        var menu = $('.menu-inner ul li');
        if (menu.css('display') === 'none') {
            //menu.css('display','block');
            menu.fadeIn();
            menu.css('display', 'block');
        }
        else {

            menu.fadeOut();

        }


    })

});

