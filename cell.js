class Cell {
    constructor(fieldElement, game) {
        this.game = game;
        this.fieldElement = fieldElement;

        this.element = createElementAndAppend('cells', fieldElement);

        this.element.style.width = this.game.cellSize + 'vmin';
        this.element.style.height = this.game.cellSize + 'vmin';

        if (Math.random() > 0.8) {
             this.spawn();
        }

        //this.element.onclick = this.stackCells.bind(this) // bind(this) -  Будет выполняться в контексте текущего объекта, а не в window
    }

    get value() { // Добавляем get и set, потому что будет отрисовка
        return this._value || 0;
    }

    set value(value) {
        this._value = value;
        this.element.innerHTML = value == 0 ? '' : value;
        this.element.setAttribute('data-color', value);
    }

    clear() {
        this.value = '';
    }

    stackCells(cell) {
      if (this.value) {
        this.game.createScore(this.value + cell.value);
      }

      new AnimateCell(cell, this);

      this.value += cell.value;
      cell.clear();
    }

    isSameTo(cell) {
      return this.value == cell.value;
    }

    spawn() {
        this.value = Math.random() > 0.5 ? 4 : 2;
    }

    get isEmpty() {
        return this.value == 0;
    }
}

class AnimateCell {
  constructor(fromCell, toCell) {
    this.element = fromCell.element.cloneNode(true);
    this.element.className = 'cells animate';

    this.element.style.top = (fromCell.element.offsetTop - 10) + 'px';
    this.element.style.left = (fromCell.element.offsetLeft - 10) + 'px';

    fromCell.fieldElement.appendChild(this.element);

    this.element.style.top = (toCell.element.offsetTop - 10) + 'px';
    this.element.style.left = (toCell.element.offsetLeft - 10) + 'px';

    setTimeout(function() {
      fromCell.fieldElement.removeChild(this.element)
    }.bind(this), 1000);
  }
}
