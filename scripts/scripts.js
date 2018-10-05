 $(document).ready(function() {

    console.log("ready");

    offset = 0;

    $(window).on('scroll', function(event) {

        scrolltop = $(window).scrollLeft();

        scrolltop = Math.round(scrolltop / 20);

        image_num = scrolltop%13;
        console.log(image_num);


        //$('.piece').css('background-image', 'url("work/' + image_num + '.jpg")');

    });

    $(window).scroll(function() {
        var scrolledY = $(window).scrollLeft();
        //$('.PIECE').css('background-position', 'top ' + ((scrolledY)) + 'px');
    });

    $('.fine').removeClass('fine--hover', 'fine--clicked');

    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('.fine').mouseenter(function(){
            $('.fine').addClass('fine--hover');
        })

        $('.fine').mouseleave(function(){
            $('.fine').removeClass('fine--hover');
        })
    }



    $('.fine').click(function(e){
        e.preventDefault;
        $('.fine').toggleClass('fine--clicked');
        setTimeout(function() {
            window.location.href = 'http://www.wearefine.com';
        }, 400);
    })

    flexFont = function () {
        var divs = document.getElementsByClassName("flexFont");
        for(var i = 0; i < divs.length; i++) {
            var relFontsize = divs[i].offsetWidth*0.05;
            divs[i].style.fontSize = relFontsize+'px';
        }
    };

    window.onload = function(event) {
        flexFont();
    };
    window.onresize = function(event) {
        flexFont();
    };


});
