import BaseFigure from "../BaseFigure";
import SquareFigure from "./SquareFigure";
import Board from "../Board";
import { BeatenFigureType } from "../BeatenFigureType";

export default class PawnFigure extends BaseFigure {
    // after the pawn make move for 2 fields from start pos, another pawn can beat aside within 1 turn
    can_beat_aside_within_turn?: number; 
    
    getFiguresToBeat(board: Board): BeatenFigureType {
        var figures_to_beat: BeatenFigureType = [];
        var row = this.current_pos.row;
        
        var column = this.current_pos.column;
        var board_pos = board.position;
        
        var i: number = this.team === "white" ? -1 : 1;
        var start_x_field: number = this.team === "white" ? 6 : 1;
        var x_beat_on_aside: number = this.team === "white" ? 3 : 4;

        
        // check if the next field is square without any figure
        if (board_pos[row + i][column] instanceof SquareFigure) {
            figures_to_beat.push({
                figure: board_pos[row + i][column],
                command: board.beatField
            });

            // if pawn in the start pos then it can run up 2 fields 
            if (row == start_x_field && board_pos[row + (i * 2)][column] instanceof SquareFigure) {
                figures_to_beat.push({
                    figure: board_pos[row + (i * 2)][column],
                    command: board.pawnMoveForTwoSquares
                });
            }
        }

        // if figures in the next row of the pawn and in sideways
        // then pawn can beat it
        
        if (this.hasThisField(row + i, column + 1)) {
            var figure = board_pos[row + i][column + 1];

            if ((figure instanceof SquareFigure) === false && this.possibleToBeat(figure)['canBeat']) {
                figures_to_beat.push({
                    figure: figure,
                    command: board.beatField
                });
            }
        }

        if (this.hasThisField(row + i, column - 1)) {
            var figure = board_pos[row + i][column - 1];

            if ((figure instanceof SquareFigure) === false && this.possibleToBeat(figure)['canBeat']) {
                figures_to_beat.push({
                    figure: figure,
                    command: board.beatField
                });
            }
        }

        // the row there pawn can beat on the aside
        if (row !== x_beat_on_aside) {
            return figures_to_beat; 
        }

        
        // algorithims
        var algorithims: Function[] = [
            (column: number) => column - 1, // figure left
            (column: number) => column + 1 // figure right
        ];

        for (var algorithm of algorithims) {
            var temp_column: number = algorithm(column);
            var temp_row: number = row;

            if (this.hasThisField(temp_row, temp_column)) {
                var figure: BaseFigure = board_pos[temp_row][temp_column];

                // check if it's enemy pawn
                if (this.possibleToBeat(figure)['canBeat'] && figure instanceof PawnFigure) {
                    var pawn: PawnFigure = (figure as PawnFigure);

                    if (pawn.can_beat_aside_within_turn !== undefined && pawn.can_beat_aside_within_turn === board.current_turns_count) {
                        // select the next field of pawn
                        figures_to_beat.push({
                            figure: board_pos[temp_row + i][temp_column],
                            command: board.pawnBeatMovedAsidePawn
                        });
                    }
                }
            }
        }

        return figures_to_beat;
    }

    getObjectCopy(): BaseFigure {
        var pawn: PawnFigure = new PawnFigure(this.current_pos.row, this.current_pos.column, this.team);
        pawn.figure_turns_maden = this.figure_turns_maden;

        return pawn;
    }

    get css_class_name(): string {
        if (this.team == 'white') {
            return 'white-pawn';
        }
        return 'black-pawn';
    }
}