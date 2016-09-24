/**
 * Created by GAMES on 15.09.2016.
 */
/*var menu=$('.butt')*/
$('.menu-all').ready(function () {
    $('.butt').on('click', function () {

        var menu = $('.menu-inner ul li');
        var menuUl = $('.menu-inner ul');

        if (menu.css('display') === 'none') {
            //menu.css('display','block');

            menu.slideDown()


        }
        else {

            menu.slideUp();

        }


    })

});

