if (!image_urls) {
    var image_urls = Array()
  } if (!flash_urls) {
    var flash_urls = Array()
  }
  image_urls['rain1'] = "https://i.postimg.cc/90WvGC3C/580b585b2edbce24c47b2692.png";
  image_urls['rain2'] = "https://i.postimg.cc/90WvGC3C/580b585b2edbce24c47b2692.png";
  image_urls['rain3'] = "https://i.postimg.cc/90WvGC3C/580b585b2edbce24c47b2692.png";
  image_urls['rain4'] = "https://i.postimg.cc/90WvGC3C/580b585b2edbce24c47b2692.png";
  $(document).ready(function () {
    var c = $(window).width();
    var d = $(window).height();
    var e = function (a, b) {
      return Math.round(a + (Math.random() * (b - a)))
    };
    var f = function (a) {
      setTimeout(function () { a.css({ left: e(0, c) + 'px', top: '-30px', display: 'block', opacity: '0.' + e(10, 100) }).animate({ top: (d - 10) + 'px' }, e(7500, 8000), function () { $(this).fadeOut('slow', function () { f(a) }) }) }, e(1, 8000))
    }; $('<div></div>').attr('id', 'rainDiv')
      .css({ position: 'fixed', width: (c - 20) + 'px', height: '1px', left: '0px', top: '-5px', display: 'block' }).appendTo('body'); for (var i = 1; i <= 20; i++) {
        var g = $('<img/>').attr('src', image_urls['rain' + e(1, 4)])
          .css({ position: 'absolute', left: e(0, c) + 'px', top: '-30px', display: 'block', opacity: '0.' + e(10, 100), 'margin-left': 0 }).addClass('rainDrop').appendTo('#rainDiv'); f(g); g = null
      }; var h = 0; var j = 0; $(window).resize(function () { c = $(window).width(); d = $(window).height() })
  });