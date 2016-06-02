var fillDetails = function() {
  if ('open' in document.createElement('details')) {
    return;
  }
  var detailses = document.querySelectorAll('details');
  for (var i = 0; i < detailses.length; i++) {
    var details = detailses[i];
    var summary = details.children[0];
    summary.addEventListener('click', function(e) {
      if (this.parentNode.hasAttribute('open')) {
        this.parentNode.removeAttribute('open');
      } else {
        this.parentNode.setAttribute('open', '');
      }
      e.stopPropagation();
    });
  }
};

fillDetails();
