// const element = document.querySelector('#galSelect');
// const choices = new Choices(element, {
//   searchEnabled: false,
//   itemSelectText: '',
// });

window.addEventListener('DOMContentLoaded', function() {

  const city = document.getElementById('selectCity');
  const choicesCity = new Choices(city, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
  });

  const country = document.getElementById('selectCountry');
  const choicesCountry = new Choices(country, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
  });

  document.querySelectorAll('.select-filter').forEach(function(el) {
      let ariaLabel = el.getAttribute('aria-label');
      el.closest('.choices').setAttribute('aria-label', ariaLabel);
  });
})
