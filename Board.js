class Board {
  constructor(size) {
    Object.defineProperty(this.size, {
      writable: false,
      value: size
    });
    // Array.matrix = function(row,col,initial){
    //     let arr = [];
    //     for (var i=0; i < row; ++1){
    //         var columns=[];
    //         for (var j =0; j<col; ++1){
    //             columns[j] = initial;
    //         }
    //         arr[i]=columns;
    //     }
    //     return arr;
    // }
    
    this.square = [[row][col]];

    this.score = 0;
  }

  /**
   *Returns a boolean indication of whether the row and column identify a valid square on the board.
   */
  isValidLocation(row, col) {
    //Your code here
    if (
      row >= 0 ||
      (row <= this.size - 1 && col >= 0) ||
      col <= this.size - 1
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Returns a boolean indication of whether the board[row][column] is empty (Does not contain a candy.
   */
  isEmptyLocation(row, col) {
    //Your code here
    if (this.getCandyAt(row, col)) {
      return false;
    } else {
      return true;
    }
  }

  /**
   *Returns the number of squares on each side of the board
   */
  getBoardSize() {
    //Your code here
    return this.size;
  }

  /**
   * Get's the candy at [row, column] or null if the square is empty.
   */
  getCandyAt(row, col) {
    //Your code here
    if (!this.isEmptyLocation(row, col)) {
      return this.square[row][col];
    } else {
      return null;
    }
  }

  /**
   * Get the location of the candy (row, column) if it's on the board or null if it's not found.
   */
  getLocationOf(candy) {
    //Your code here
    if (this.isValidLocation(row, col)) {
      return `("row: "+${candy.row},"column: "+${candy.col} )`;
    } else {
      return null;
    }
  }

  /**
   * Get a list of all candies on the board, in no particular order
   */
  getAllCandies() {
    //Your code here

  }


  /**
   * Add a new candy to the board. Requires candy added to not be on the board an*d (row, col) must
   * be a valid empty square. The optional spawnRow and spawnCol indicate where the candy was "spawned"
   * the moment before it moved to row,col. This location which may be off the board, is added to the "add"
   * event and can be used to animate new candies that are coming in from  offBoard.
   * Dispaches a new "add" event with details containing the candy, fromRow, fromCol, toRow and toCol */
  add(candy, row, col, spawnRow, spawnCol) {
    //Your code here
  }

  /**
   * moves a candy from it's square to another square. Requires that this candy be found on this board and
   *  (toRow, toCol) must denote a valid empty spot on the board. Dispatches a new  "move" event with
   * details on the candy, toRow, fromRow, toCol, fromCol. */
  moveTo(candy, toRow, toCol) {
    //Your code here
  }

  /**
   * Removes a candy from this board. Requires that candy be found on this board. Dispatches a new
   * "remove" event with details on the candy, fromRow, fromCol.
   */
  remove(candy) {
    //Your code here
  }

  /**
   * Reomves candy at given location from this board. Requires that candy be found on this board. */
  removeAt(row, col) {
    //Your code here
  }

  /**
   * Remove all candies from board.
   */
  clear() {
    //Your code here
  }

  /**
   * Adds a candy of specified color to row, col.
   */
  addCandy(color, row, col, spawnRow, spawnCol) {
    //Your code here
  }

  /**
   * Adds a candy of randowm color at row, col
   */
  addRandomCandy(row, col, spawnRow, spawnCol) {
    //Your code here
  }

  /**
    * Returns the candy immediately in the direction specified ['up', 'down', 'left', 
    'right'] from the candy passed as fromCandy
    */
  getCandyInDirection(fromCcandy, direction) {
    //Your code here
  }

  /**
   * Flips candies passed, firing two move events. Does not verify the validity of the
   * flip and does not crush candies lined up after flip. With the events fired, details
   * on the candy, toRow, fromRow, toCol and fromCol are also dispatched
   */
  flipCandies(candy1, candy2) {
    //Your code here
  }

  /**
   * Resets the score. dispatches a new scoreUpdateEvent with details on the score.
   */
  resetScore() {
    //Your code here
  }

  /*
     * Adds some score
     * Dispatches a new "scoreUpdate" event with details on score, candy, row and col.
     */
  incrememtScore(candy, row, col) {
    //Your code here
    this.score += 1;
    return `("Score: "+${this.score},"row: "+${row},"Column: "+${
      this.col
    }, "Candy: "+${candy})`;
  }

  /*
     * Returns current score
     */
  getScore() {
    //Your code here
    return this.score;
  }

  /**
   * Returns a string representation of the board
   */
  toString() {
    //Your code here
    return `("SIZE: "+${this.size})`;
  }
}