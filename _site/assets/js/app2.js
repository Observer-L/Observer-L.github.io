var Preview = (function() {
  var s;

  return {
    settings: {
      img_words: document.getElementsByClassName('previews__container'),
    },

    init: function() {
      s = this.settings;
      this.display();
      this.mouseenter();
    },

    display: function() {
      if (s.img_words.length) {
        [].forEach.call(s.img_words, function(img_words, idx) {
          if (idx > 0) img_words.style.display = 'none';
        });
      }
    },