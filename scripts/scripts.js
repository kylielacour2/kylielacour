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

    $.fn.autoSizr = function () {
      var el, elements, _i, _len, _results;
      elements = $(this);
      if (elements.length < 0) {
        return;
      }
      _results = [];
      for (_i = 0, _len = elements.length; _i < _len; _i++) {
        el = elements[_i];
        _results.push((function(el) {
          var resizeText, _results1;
          resizeText = function() {
            var elNewFontSize;
            elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
            return $(el).css('font-size', elNewFontSize);
          };
          _results1 = [];
          while (el.scrollHeight > el.offsetHeight) {
            _results1.push(resizeText());
          }
          return _results1;
        })(el));
      }
      return $(this);
    };


});
