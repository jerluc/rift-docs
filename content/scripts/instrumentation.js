var sectionBounds = {};

var instrumentPage = function(ga) {
  if (!ga) {
    return;
  }

  var docSections = document.querySelectorAll('main > section');
  for (var i = 0; i < docSections.length; i++) {
    var docSection = docSections[i];
    var rect = docSection.getBoundingClientRect();
    sectionBounds[i] = {
      top: rect.top + window.scrollY,
      bottom: rect.bottom + window.scrollX
    };
  }
  console.log(sectionBounds);

  window.addEventListener('scroll', function(evt) {
    for (var i in sectionBounds) {
      var sectionBound = sectionBounds[i];
      var clientTop = sectionBound.top - window.scrollY;
      var sectionHeight = sectionBound.bottom - sectionBound.top;
      var clientVisible = sectionHeight - Math.abs(clientTop);
      console.log("Visibility " + i + ":" + clientVisible);
    }
  });

};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78415015-1', 'auto');
ga('send', 'pageview');
