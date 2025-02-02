// TIC TAC TOE
const tic_tac_toe ={ 
    board: ['','','','','','','','',''],
    symbols: {
        options: ['X','O'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    container_element: null,
    gameOver: false,
    winning_sequences: [
        [0,1,2],
        [3,4,5],
        [6,,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    init: function(container){
        this.container_element = container;
    },

    make_play: function(position){
        if(this.gameOver) return false;
        if(this.board[position] === ''){
            this.board[position] = this.symbols.options [this.symbols.turn_index];
            this.draw();
            let winning_sequence_index = this.check_winner (this.symbols.options[ this.symbols.turn_index])

            if(winning_sequence_index >= 0){
                this.game_is_over();
            }
            else{
                this.symbols.change();
            }
            return true;
        }
        else{
            return false;
        }
    },

    start: function(){
        this.board.fill('');
        this.gameOver = false;
        this.draw();
    },

    game_is_over: function(){
        this.gameOver = true;
        alert("GAME OVER");
    },

    check_winner: function(symbol){
        for(i in this.winning_sequences){
            if(this.board [ this.winning_sequences[i][0] ] == symbol &&
                this.board [ this.winning_sequences[i][1] ] == symbol &&
                this.board [ this.winning_sequences[i][2] ] == symbol ){
                    return i;
                    console.log('Winner sequence: ' +  i);
                }
        };
        return -1;
    },

    draw: function(){
        let content = '';

        for(i in this.board){
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        }

        this.container_element.innerHTML = content;
    },
};