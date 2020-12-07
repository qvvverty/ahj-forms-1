export default class Popover {
  init() {
    this.popover = document.createElement('div');
    this.popover.innerHTML = `
      <div class="popover-title"></div>
      <div class="popover-body"></div>
    `;
    this.popover.classList.add('popover');

    this.popoverTitle = this.popover.querySelector('.popover-title');
    this.popoverBody = this.popover.querySelector('.popover-body');

    document.body.append(this.popover);

    document.addEventListener('click', this.clickHandler.bind(this));
  }

  clickHandler(click) {
    if (click.target.hasAttribute('popover')) {
      this.popoverTarget = click.target;

      this.popover.style.display = 'inline-block';
      this.popoverTitle.innerHTML = this.popoverTarget.title;
      this.popoverBody.innerHTML = this.popoverTarget.dataset.popbd;

      const targetElemCoords = this.popoverTarget.getBoundingClientRect();
      const popoverCoords = this.popover.getBoundingClientRect();

      this.popover.style.top = `${targetElemCoords.top - popoverCoords.height - 5}px`;
      this.popover.style.left = `${targetElemCoords.left - popoverCoords.width / 2 + targetElemCoords.width / 2}px`;
    } else {
      this.popover.style.display = 'none';
    }
  }
}
