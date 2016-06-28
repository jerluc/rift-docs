var winHeight = window.innerHeight;
var B = document.body,
    H = document.documentElement,
    docHeight;

if (typeof document.height !== 'undefined') {
  docHeight = document.height; // For webkit browsers
} else {
  docHeight = Math.max(B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight);
}

var maxScroll = docHeight - winHeight;

var upArrowOffset = 200;

var addUpArrow = function() {
  var upArrow = document.createElement('div');
  upArrow.setAttribute('style', 'display: none; position: fixed; bottom: 0; right: 0; font-size: 2em');
  upArrow.innerHTML = '<a style="display: block; padding: 0.5em" href="#top">&uarr;</a>';
  document.body.appendChild(upArrow);
  window.addEventListener('scroll', function() {
    if (window.scrollY > upArrowOffset && window.scrollY < maxScroll - upArrowOffset) {
      upArrow.style.display = 'block';
    } else {
      upArrow.style.display = 'none';
    }
  });
};
addUpArrow();
