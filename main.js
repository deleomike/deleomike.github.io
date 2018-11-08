$('ul.navbar-nav li a').each((i, item) => {
  if ($(item).attr('data-page')) {
    $(item).on('click', (element) => {
        $('#mainContainer').load($(element.target).attr('data-page')+'.html');
    });
  }
});