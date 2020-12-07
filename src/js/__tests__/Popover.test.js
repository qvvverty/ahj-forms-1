import Popover from '../Popover';

document.body.innerHTML = `
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacus quis leo aliquam eleifend. Integer tempus aliquam lobortis. Nunc fringilla lorem vitae mi rutrum vehicula. Morbi at aliquet ligula. Vestibulum gravida efficitur augue, consectetur dictum eros gravida a. Phasellus egestas volutpat tempus. Praesent sit amet nulla laoreet ipsum lobortis pretium sed nec justo. Pellentesque lacinia justo velit, nec tempor sem aliquam pulvinar. Vestibulum sit amet consequat odio. Quisque hendrerit dolor et nisi dictum, eu hendrerit tellus condimentum. Nulla id finibus nibh.
  </p>
  <button class="popover-button" popover title="first popover" data-popbd="well, first one!">
    Popover
  </button>
`;

const popover = new Popover();
popover.init();
const popoverElem = document.querySelector('div.popover');
const popBtn = document.querySelector('[popover]');

test('Expect init() to add popover element to the page', () => {
  expect(popoverElem).toBeTruthy();
});

test('Expect popover to show up', () => {
  popBtn.click();
  expect(popoverElem.style.display).toBe('inline-block');
});

test('Expect popover title to match button title attribute', () => {
  expect(popoverElem.querySelector('div.popover-title').innerHTML).toBe(popBtn.title);
});

test('Expect popover body to match button popbd attribute', () => {
  expect(popoverElem.querySelector('div.popover-body').innerHTML).toBe(popBtn.dataset.popbd);
});

const popBtnCoords = popBtn.getBoundingClientRect();
const popoverElemCoords = popoverElem.getBoundingClientRect();

test('Expect popover to located above the button', () => {
  expect(popoverElem.style.top).toBe(`${popBtnCoords.top - popoverElemCoords.height - 5}px`);
});

test('Expect popover to hide after click aside', () => {
  document.querySelector('p').click();
  expect(popoverElem.style.display).toBe('none');
});
