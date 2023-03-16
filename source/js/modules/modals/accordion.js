const footerNav = document.querySelector('[data-footer-navigation]');
const footerContacts = document.querySelector('[data-footer-contacts]');
const footerContactsArea = document.querySelector('[data-footer-contacts-area]');
const footerNavArea = document.querySelector('[data-footer-nav-area]');

const removeNojsClass = (element) => {
  if (element) {
    element.classList.remove('is-nojs');
  }
};

const onClickOpenInfo = (mainElement, sideElement) => {
  return () => {
    if (mainElement && sideElement) {
      mainElement.classList.toggle('is-closed');
      mainElement.classList.toggle('is-opened');
      sideElement.classList.remove('is-opened');
      sideElement.classList.add('is-closed');
    } else {
      mainElement.classList.toggle('is-closed');
      mainElement.classList.toggle('is-opened');
    }
  };
};

if (footerNavArea) {
  footerNavArea.addEventListener('click', onClickOpenInfo(footerNav, footerContacts));
}

if (footerContactsArea) {
  footerContactsArea.addEventListener('click', onClickOpenInfo(footerContacts, footerNav));
}

export {removeNojsClass, footerNav, footerContacts};
