$(function () {
    $(window).resize(function () {
        let cW = $(window).width();

        let isShowImg = cW>=800;

        let allItems = $('#lk_carousel .item');

        allItems.each(function (index, item) {
            let src = isShowImg ? $(item).data('lg-img') : $(item).data('sm-img');
            let bgurl ="url('"+src+"')" ;

            $(item).css({background:bgurl});

            if(isShowImg){
                $(item).empty();
            }else {
                let $img = "<img src='"+src+"'>";
                $(item).empty().append($img);
            }
        })
    })

    $(window).trigger('resize');


    $('[data-toggle="tooltip"]').tooltip();

    $(window).resize(function () {
        let $ul = $(".lk_product .nav");
        let $alli = $("[role='presentation']",$ul);


        let lw = 0;
        $alli.each(function (index, item) {
            lw += $(item).width();
        })

        let pw = $ul.parent().width();
            if(lw>pw){
              $ul.width(lw);
            }else {
                $ul.removeAttr('style');
            }

    })

    let $lli = $('#lk_nav li');
    // console.log(lli.eq(2));

    $lli.eq(2).click(function () {
        $('html,body').animate({scrollTop:$('.lk_hot').offset().top});
    })

})

