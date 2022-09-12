// Board need for additional functionality,
// check the board if king is captured in this turn
// full copy board 8 rows array
// check if one team have the turns

import type BaseFigure from "./BaseFigure";
import ElephantFigure from "./figures/ElephantFigure";
import KingFigure from "./figures/KingFigure";
import KnightFigure from "./figures/KnightFigure";
import PawnFigure from "./figures/PawnFigure";
import QueenFigure from "./figures/QueenFigure";
import RookFigure from "./figures/RookFigure";
import SquareFigure from "./figures/SquareFigure";
import { BeatenFigureType } from "./BeatenFigureType";


// this class contains the board position
// in code only this class object can change position
export default class Board {
    public current_turns_count: number = 0; // turns of game, how many turns maden
    private _position: Array<BaseFigure[]>
    // this field need for understanding this board for counting the turns or this is original board with that user working
    private isThisBoardCopy: boolean; 

    constructor(position: Array<BaseFigure[]> = [], isThisBoardCopy: boolean = false) {
        // empty array, no args, make pos by default
        if (position.length == 0) {
            this.createStartPos();
        }else {
            this._position = position;
        }

        this.isThisBoardCopy = isThisBoardCopy;
    }

    // return the same board pos with new references
    public copyBoard(): Board {
        var new_board: Array<BaseFigure[]> = [];

        for (var row of this._position) {
            var new_row: BaseFigure[] = [];
            
            for (var figure of row) {
                var figure_copy = figure.getObjectCopy();
                figure_copy.figure_turns_maden = figure.figure_turns_maden;

                new_row.push(figure_copy);
            }

            new_board.push(new_row);
        }

        var temp_board = new Board(new_board, true);
        temp_board.current_turns_count = this.current_turns_count;
        return temp_board;
    }

    // clear the capture field for all figures
    public clearCaptureFields(): void {
        for (var row of this._position) {
            for (var figure of row) {
                figure.captured = {
                    white: false,
                    black: false
                }
            }
        }
    }

    // clear all info about beaten figures and selected figure
    // that user can see
    public clearVisualData() {
        for (var row of this._position) {
            for (var figure of row) {
                figure.selected = false;
                
                figure.visual_data = {
                    beaten: false,
                    beaten_by_figure: undefined,
                    command: undefined
                }
            }
        }
    }

    // set capture field for each team's figure
    public setCaptureFields(team: string, with_filter: boolean): void {
        for (var row of this._position) {
            for (var figure of row) {
                if (figure.team === team) {
                    figure.setCaptureToBeatFigures(this, with_filter);
                }
            }
        }
    }    

    // return how many movies team can make for this turn
    public getCountTurnOfTeam(team: string): number {
        var turn_count: number = 0;
        
        for (var row of this._position) {
            for (var figure of row) {
                if (figure.team === team) {
                    var beaten_figures: BeatenFigureType = figure.getFiguresToBeat(this);
                    turn_count += figure.getProtectedMovies(this, beaten_figures).length;
                }
            }
        }

        return turn_count;
    }
    
    // return king object from pos 
    public getKing(team: string): KingFigure | undefined {
        for (var row of this._position) {
            for (var figure of row) {
                if (figure.team === team && figure instanceof KingFigure) {
                    return figure;
                }
            }
        }
    }

    public createStartPos(): void {
        var position: Array<BaseFigure[]> = [];
        
        // set basic pos of figures
        for (var row_count = 0; row_count <= 7; row_count++) {
            var row: BaseFigure[] = [];

            for (var column_count = 0; column_count <= 7; column_count++) {
                row.push(new SquareFigure(row_count, column_count));
            }
            position.push(row);
        }

        
        // set pawns 
        for (var column_count = 0; column_count <= 7; column_count++) {
            position[1][column_count] = new PawnFigure(1, column_count, 'black');
            position[6][column_count] = new PawnFigure(6, column_count, 'white');
        } 

        // rooks
        position[0][0] = new RookFigure(0, 0, 'black');
        position[0][7] = new RookFigure(0, 7, 'black');

        position[7][7] = new RookFigure(7, 7, 'white');
        position[7][0] = new RookFigure(7, 0, 'white');

        // elephants
        position[0][2] = new ElephantFigure(0, 2, 'black');
        position[0][5] = new ElephantFigure(0, 5, 'black');

        position[7][2] = new ElephantFigure(7, 2, 'white');
        position[7][5] = new ElephantFigure(7, 5, 'white');

        // knights
        position[0][1] = new KnightFigure(0, 1, 'black');
        position[0][6] = new KnightFigure(0, 6, 'black');

        position[7][6] = new KnightFigure(7, 6, 'white');
        position[7][1] = new KnightFigure(7, 1, 'white');

        // queens
        position[7][3] = new QueenFigure(7, 3, 'white');
        position[0][3] = new QueenFigure(0, 3, 'black');
        
        // kings
        position[7][4] = new KingFigure(7, 4, 'white');
        position[0][4] = new KingFigure(0, 4, 'black');

        this._position = position;
    }


    /*
      change the board position, move figure to new field
      
      @param: beaten_figure - figure that need to remove from field
      @param: beat_figure - figure that need to move
      @param: user_made_turn - params that show if user made turn or script counting the turns
    */
    public beatField(beaten_figure: BaseFigure, beat_figure: BaseFigure): void {
        var beaten_field_pos = beaten_figure.figure_pos;
        var new_column = beaten_field_pos.column;
        var new_row = beaten_field_pos.row;

        // position of figure before the move
        var previous_figure_pos = beat_figure.figure_pos;
        var prev_row = previous_figure_pos.row;
        var prev_column = previous_figure_pos.column;

        // set new position in the board
        beat_figure.setNewPos(new_row, new_column);


        // if white pawn in 0 row or black in 7 row, that means that user can select what figure he want to get
        if ((beat_figure instanceof PawnFigure && beat_figure.team === 'white' && beat_figure.figure_pos.row === 0
            || beat_figure instanceof PawnFigure && beat_figure.team === 'black' && beat_figure.figure_pos.row === 7)) {
            
            // if program only counting the turns then don't need to ask the user for wanted figure
            while (this.isThisBoardCopy === false) {
                var figure_wanted = prompt(`
                What's figure you want to transforming your pawn? 
                (1 - queen, 2 - rook, 3 - knight, 4 - elephant)`, "");

                if (figure_wanted == '1') {
                    beat_figure = new QueenFigure(new_row, new_column, beat_figure.team);
                    break;
                } else if (figure_wanted == '2') {
                    beat_figure = new RookFigure(new_row, new_column, beat_figure.team);
                    break;
                } else if (figure_wanted == '3') {
                    beat_figure = new KnightFigure(new_row, new_column, beat_figure.team);
                    break;
                } else if (figure_wanted == '4') {
                    beat_figure = new ElephantFigure(new_row, new_column, beat_figure.team);
                    break;
                } else {
                    alert('Please select the figure!');
                }
            }
            
            if (this.isThisBoardCopy) {
                beat_figure = new QueenFigure(new_row, new_column, beat_figure.team);
            }
        }

        // set in board new pos
        this._position[new_row][new_column] = beat_figure;

        // set previous pos as square
        this._position[prev_row][prev_column] = new SquareFigure(prev_row, prev_column);
    }

    public pawnMoveForTwoSquares(field_to_move_pawn: BaseFigure, pawn: PawnFigure): void {
        this.beatField(field_to_move_pawn, pawn);
        pawn.can_beat_aside_within_turn = this.current_turns_count + 1; // within next turn this pawn can be beaten aside
    }

    /*
    * Pawn beat on the aside, for the pawn that made 2 turns in previous turn
    */
    public pawnBeatMovedAsidePawn(field_to_move_pawn: BaseFigure, pawn: PawnFigure): void {
        this.beatField(field_to_move_pawn, pawn);
        // in the bottom of field_to_move_pawn the pawn that need to remove
        var i: number = pawn.team === "white" ? -1 : 1;

        var pawn_to_remove_column = field_to_move_pawn.figure_pos.column;
        var pawn_to_remove_row = field_to_move_pawn.figure_pos.row - i;

        this._position[pawn_to_remove_row][pawn_to_remove_column] = new SquareFigure(pawn_to_remove_row, pawn_to_remove_column); 
    }


    public whiteTeamShortCastling(beaten_figure: BaseFigure, beat_figure: BaseFigure): void {
        var king: BaseFigure = this._position[7][4];
        var rook: BaseFigure = this._position[7][7];

        king.setNewPos(7, 6);
        rook.setNewPos(7, 5);

        this._position[7][5] = rook;
        this._position[7][6] = king;

        this._position[7][7] = new SquareFigure(7, 7);
        this._position[7][4] = new SquareFigure(7, 4);
    }

    public whiteTeamLongCastling(beaten_figure: BaseFigure, beat_figure: BaseFigure): void {
        var king: BaseFigure = this._position[7][4];
        var rook: BaseFigure = this._position[7][0];

        king.setNewPos(7, 2);
        rook.setNewPos(7, 3);

        this._position[7][2] = king;
        this._position[7][3] = rook;

        this._position[7][0] = new SquareFigure(7, 0);
        this._position[7][4] = new SquareFigure(7, 4);
    }

    public blackTeamShortCastling(beaten_figure: BaseFigure, beat_figure: BaseFigure): void {
        var king: BaseFigure = this._position[0][4];
        var rook: BaseFigure = this._position[0][7];

        king.setNewPos(0, 6);
        rook.setNewPos(0, 5);

        this._position[0][5] = rook;
        this._position[0][6] = king;

        this._position[0][7] = new SquareFigure(0, 7);
        this._position[0][4] = new SquareFigure(0, 4);
    }

    public blackTeamLongCastling(beaten_figure: BaseFigure, beat_figure: BaseFigure): void {
        var king: BaseFigure = this._position[0][4];
        var rook: BaseFigure = this._position[0][0];

        king.setNewPos(0, 2);
        rook.setNewPos(0, 3);

        this._position[0][2] = king;
        this._position[0][3] = rook;

        this._position[0][0] = new SquareFigure(0, 0);
        this._position[0][4] = new SquareFigure(0, 4);
    }

    public get position(): Array<BaseFigure[]> {
        return this._position;
    }
}