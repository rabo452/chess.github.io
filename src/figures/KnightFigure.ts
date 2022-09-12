import BaseFigure from "../BaseFigure";
import Board from "../Board";
import { BeatenFigureType } from "../BeatenFigureType";

export default class KnightFigure extends BaseFigure {
    
    getFiguresToBeat(board: Board): BeatenFigureType {
        var figures_to_beat: BeatenFigureType = [];
        var row = this.current_pos.row;
        var column = this.current_pos.column;
        var temp_x: number;
        var temp_y: number;
        var board_pos = board.position;
        
        // fields difference between current figure point and beaten field point
        var columns_values = [1, -1, 2, -2, 1, -1, 2, -2];
        var rows_values = [2, 2, 1, 1, -2, -2, -1, -1];

        for (var i = 0; i < rows_values.length; i++) {
            temp_x = row + rows_values[i];
            temp_y = column + columns_values[i];

            if (this.hasThisField(temp_x, temp_y)) {
                var figure = board_pos[temp_x][temp_y];
                var obj = this.possibleToBeat(figure);

                if (obj['canBeat']) {
                    figures_to_beat.push({
                        figure: figure,
                        command: board.beatField
                    });
                }
            }
        }

        return figures_to_beat;
    }

    getObjectCopy(): BaseFigure {
        return new KnightFigure(this.current_pos.row, this.current_pos.column, this.team);
    }
    
    get css_class_name(): string {
        if (this.team == 'white') {
            return 'white-knight';
        }
        return 'black-knight';
    }
}