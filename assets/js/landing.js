(function () {
  var btn = document.querySelector('.show-more-btn');
  var expandable = document.getElementById('landing-more');

  if (!btn || !expandable) return;

  // Hide the button entirely if there is no content to expand
  if (!expandable.children.length) {
    btn.closest('.landing-show-more').hidden = true;
    return;
  }

  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      expandable.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = 'Show more <span aria-hidden="true">↓</span>';
    } else {
      expandable.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.innerHTML = 'Show less <span aria-hidden="true">↑</span>';
    }
  });
}());
