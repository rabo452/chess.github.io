import BaseFigure from "../BaseFigure";
import Board from "../Board";
import { BeatenFigureType } from "../BeatenFigureType";

export default class RookFigure extends BaseFigure {

    // get figures that the rook can beat
    getFiguresToBeat(board: Board): BeatenFigureType {
        var figures_to_beat = this.rookGetBeatenFigures(board);

        return figures_to_beat;
    }

    public rookGetBeatenFigures(board: Board): BeatenFigureType {
        var board_pos = board.position;
        var figures_to_beat: BeatenFigureType = [];
        var row = this.current_pos.row;
        var column = this.current_pos.column;
        var algoritms = [
            (row: number, column: number, i: number) => [row - i, column], // top side 
            (row: number, column: number, i: number) => [row + i, column], // bottom side
            (row: number, column: number, i: number) => [row, column - i], // left side
            (row: number, column: number, i: number) => [row, column + i]  // right side
        ]; // the algoritms for search of beaten fields 

        var temp_row: number;
        var temp_column: number;

        for (var algoritm_count = 0; algoritm_count < algoritms.length; algoritm_count++) {
            var algoritm: Function = algoritms[algoritm_count];

            var i: number = 0;
            while (i != 7) {
                i++;

                temp_row = algoritm(row, column, i)[0];
                temp_column = algoritm(row, column, i)[1];

                if (this.hasThisField(temp_row, temp_column) === false) {
                    break;
                }

                var figure = board_pos[temp_row][temp_column];
                var obj = this.possibleToBeat(figure);

                if (obj['canBeat']) {
                    figures_to_beat.push({
                        figure: figure,
                        command: board.beatField
                    });
                }

                if (obj['stop']) {
                    break;
                }
            }
        }
        
        return figures_to_beat;
    }
    
    getObjectCopy() {
        var rook: RookFigure = new RookFigure(this.current_pos.row, this.current_pos.column, this.team);
        rook.figure_turns_maden = this.figure_turns_maden;

        return rook;
    }

    get css_class_name(): string {
        if (this.team === 'white') {
            return 'white-rook';
        }
        return 'black-rook';
    }

}