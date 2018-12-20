class Game {
  constructor(parentElement, size) {
    this.size = size;
    this.fieldSize = 80;

    this.cellSize = this.fieldSize/this.size - 2;

    let gameFieldElement = createElementAndAppend('game', parentElement);
    this.headerElement = createElementAndAppend('header', gameFieldElement);
    this.scoreElement = createElementAndAppend('score', this.headerElement);

    let fieldElement = createElementAndAppend('field', gameFieldElement);

    this.score = 0;

    this.field = [];

    for (let i = 0; i < this.size; i++) {
      this.field[i] = [];
      for (let k = 0; k < this.size; k++) {
        this.field[i][k] = new Cell(fieldElement, this);
      }
    }


  }

  spawnUnit() {
    let spawnCells = [];
    for (let i = 0; i < this.field.length; i++) {
      for (let k = 0; k < this.field[i].length; k++) {
        if(!this.field[i][k].value) {
          spawnCells.push(this.field[i][k]);
        }
      }
    }
    if (spawnCells.length) {
      spawnCells[getRandomInt(0, spawnCells.length - 1)].spawn()
    }
    else {
      alert('Проеб!');
    }
  }
}
