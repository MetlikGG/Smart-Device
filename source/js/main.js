import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {removeNojsClass, footerNav, footerContacts} from './modules/modals/accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const more = document.querySelector('[data-validate="btn-more"]');
  const about = document.querySelector('[data-validate="about"]');
  more.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (about.classList.contains('about--more')) {
      about.classList.remove('about--more');
    } else {
      about.classList.add('about--more');
    }
  });
  // Utils
  // ---------------------------------

  iosVhFix();
  removeNojsClass(footerNav);
  removeNojsClass(footerContacts);

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    removeNojsClass(footerNav);
    removeNojsClass(footerContacts);
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
