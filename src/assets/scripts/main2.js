// import fortawesome from '@fortawesome/fontawesome-free';
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';

// import Swiper from '../styles/libs/swiper/swiper-bundle.js';
// require('../styles/libs/swiper/swiper.js') ;

import $ from 'jquery';
import jQuery from 'jquery';

// $('.swiper').css('display','none')






(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });



    $.fn.moreNav = function() {
        var nav = $(this);

        function setMoreNav() {

            var nav_width = nav.outerWidth(),
                nav_elem_width = 0,
                more_link = $('<li class="more"><a href="#">Еще</a><ul></ul></li>'),
                class_nav_item = 'nav-item',
                class_nav_item_more = 'nav-item-more';

            if( nav.find('.more').length > 0 ) {
                nav.append(nav.find('.more ul li'));
                nav.find('.more').remove();
            }

            $.each(nav.find('li'), function(i, elem){
                var elem_width = $(elem).outerWidth();

                nav_elem_width += elem_width;
            });

            if( nav_elem_width > nav_width ) {
                nav.append(more_link);
                nav_width -= more_link.outerWidth();

                nav_elem_width = 0;

                $.each(nav.find('li'), function(i, elem){
                    var elem_width = $(elem).outerWidth();

                    nav_elem_width += elem_width;

                    if( !$(elem).is('.more') ) {
                        if( nav_elem_width < nav_width ) {
                            $(elem).addClass(class_nav_item).removeClass(class_nav_item_more);
                        } else {
                            $(elem).addClass(class_nav_item_more).removeClass(class_nav_item);
                        }
                    }
                });
            }

            more_link.find('ul').append($('.' + class_nav_item_more));

        }
        setMoreNav();
        $(window).resize(function(){
            setMoreNav();
        });
    };

    $('#more-nav').moreNav();

})(jQuery);

// const sw2=new Swiper(`.r-catalog__blockswiper-2`, {
//     loop: true,
//     slidesPerView: 4,
//     spaceBetween: 10,
//
//     autoplay: {
//         delay: 5000,
//     },
//     longSwipesRatio: 0.5,
//     pagination: {
//         clickable: true,
//         el: `.swiper-pagination2`,
//         type: 'bullets',
//     }
// });
// const sw1=new Swiper(`.r-catalog__blockswiper-1`, {
//     loop: true,
//     slidesPerView: 4,
//     spaceBetween: 10,
//
//     autoplay: {
//         delay: 5000,
//     },
//     longSwipesRatio: 0.5,
//     pagination: {
//         clickable: true,
//         el: `.swiper-pagination1`,
//         type: 'bullets',
//     }
// });
// const sw3=new Swiper(`.r-catalog__blockswiper-3`, {
//     loop: true,
//     slidesPerView: 4,
//     spaceBetween: 10,
//
//     autoplay: {
//         delay: 5000,
//     },
//     longSwipesRatio: 0.5,
//     pagination: {
//         clickable: true,
//         el: `.swiper-pagination3`,
//         type: 'bullets',
//     }
// });

(function($) {
    $(function () {
        $('.r-catalog__blocks').on('click', '.r-catalog__block', function () {
            $(this)
                .addClass('r-catalog__block_active').siblings().removeClass('r-catalog__block_active');
                let id=$(this).attr('id');
                $('.r-catalog__contents .r-catalog__content').removeClass('r-catalog__content_active');
                $(`.r-catalog__contents  .${id}`).addClass('r-catalog__content_active');
        });
    });


    $(document).ready(
        function (){
            $('.r-catalog__blocks .r-catalog__block').each(function (ind){
                // let swipernew=`swipernew${ind+1}`;
                console.log(`.r-catalog__block-${ind + 1}`)
                new Swiper(`.r-catalog__blockswiper-${ind + 1}`, {
                     loop: true,
                     slidesPerView: 4,
                     spaceBetween: 10,

                     autoplay: {
                         delay: 5000,
                     },
                     longSwipesRatio: 0.5,
                     pagination: {
                         clickable: true,
                         el: `.swiper-pagination${ind + 1}`,
                         type: 'bullets',
                     }
                 });
            })
            $('.r-catalog__content').css('display','none');
        }

    )
    $('.r-catalog__blocks .r-catalog__block').each(function (ind){
        // let swipernew=`swipernew${ind+1}`;
        console.log(`.r-catalog__block-${ind + 1}`)
       // new Swiper(`.r-catalog__blockswiper-${ind + 1}`, {
       //      loop: true,
       //      slidesPerView: 4,
       //      spaceBetween: 10,
       //
       //      autoplay: {
       //          delay: 5000,
       //      },
       //      longSwipesRatio: 0.5,
       //      pagination: {
       //          clickable: true,
       //          el: `.swiper-pagination${ind + 1}`,
       //          type: 'bullets',
       //      }
       //  });
    })


})(jQuery);
