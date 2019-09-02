class Hoover {
  constructor(initialPosition) {
    this.initialPosition = initialPosition.split(' ');
    this.finalPosition;
    this.dirtPilesHoovered = 0;
  }

  clean(grid, path) {
    var moves = path.split('');
    var x = Number(this.initialPosition[0]);
    var y = Number(this.initialPosition[1]);

    moves.forEach(move => {         
      if(move === 'N') {
        if(y < grid[0].length-1){
          y += 1;
        }
      }
      if(move === 'S') {
        if(y > 0){
          y -= 1;
        }
      }

      if(move === 'E') {
        if(x < grid.length-1){
          x += 1;
        }
      }
      if(move === 'W') {
        if(x > 0){
          x -= 1;
        }
      }

      if(grid[x][y] === 'O') {
        this.dirtPilesHoovered += 1;
        grid[x][y] = 'X';
      }
    });
    this.finalPosition = `${x} ${y}`
  }
}

module.exports = {
  Hoover: Hoover
}
