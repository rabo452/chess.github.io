import BaseFigure from "../BaseFigure";
import Board from "../Board";
import { BeatenFigureType } from "../BeatenFigureType";

export default class ElephantFigure extends BaseFigure {

    getFiguresToBeat(board: Board): BeatenFigureType {
        var figures_to_beat: BeatenFigureType = this.elephantGetBeatenFigures(board);

        return figures_to_beat;
    }

    public elephantGetBeatenFigures(board: Board): BeatenFigureType {
        var board_pos = board.position;
        var figures_to_beat: BeatenFigureType = [];
        var row = this.current_pos.row;
        var column = this.current_pos.column;
        var algoritms = [
            (row: number, column: number, i: number) => [row - i, column + i], // left-top 
            (row: number, column: number, i: number) => [row - i, column - i], // right-top
            (row: number, column: number, i: number) => [row + i, column + i], // left-bottom
            (row: number, column: number, i: number) => [row + i, column - i]  // right-bottom
        ]; // the algoritms for search of beaten fields 

        var temp_row: number;
        var temp_column: number;

        for (var algoritm_count = 0; algoritm_count < algoritms.length; algoritm_count++) {
            var algorithm: Function = algoritms[algoritm_count];
            
            var i: number = 0; 
            while (i != 7) {
                i++;

                temp_row = algorithm(row, column, i)[0];
                temp_column = algorithm(row, column, i)[1];

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

    getObjectCopy(): BaseFigure {
        return new ElephantFigure(this.current_pos.row, this.current_pos.column, this.team);
    }

    get css_class_name(): string {
        return this.team == 'white' ? 'white-elephant' : 'black-elephant';
    }
}