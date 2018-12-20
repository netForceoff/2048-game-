class Cell {
  constructor(parentElement, game) {
    this.game = game;

    this.element = createElementAndAppend('cells', parentElement);

    this.element.style.width = this.game.cellSize + 'vmin';
    this.element.style.height = this.game.cellSize + 'vmin';

      if (Math.random() > 0.8) {
        this.spawn();
      }
  }

  set value(value) {
    this._value = value;
    this.element.innerHTML = value == 0 ? '' : value;
  }

  get value() {
    return this._value || 0;
  }

  spawn() {
    this.value = Math.random() > 0.5 ? 4 : 2;
  }
}
