import BaseFigure from "../BaseFigure";
import ElephantFigure from "./ElephantFigure";
import RookFigure from "./RookFigure";
import Board from "../Board";
import { BeatenFigureType } from "../BeatenFigureType";

export default class QueenFigure extends BaseFigure {
    
    // get figures to beat from rook and elephant methods
    getFiguresToBeat(board: Board): BeatenFigureType {
        var elephant_beaten_figures: BeatenFigureType = new ElephantFigure(this.current_pos.row, this.current_pos.column, this.team).elephantGetBeatenFigures(board);
        var rook_beaten_figures: BeatenFigureType = new RookFigure(this.current_pos.row, this.current_pos.column, this.team).rookGetBeatenFigures(board);
        var figures_to_beat: BeatenFigureType = [];

        for (let figure of elephant_beaten_figures) {
            figures_to_beat.push(figure);
        }

        for (let figure of rook_beaten_figures) {
            figures_to_beat.push(figure);
        }

        return figures_to_beat;
    }

    getObjectCopy(): BaseFigure {
        return new QueenFigure(this.current_pos.row, this.current_pos.column, this.team);
    }

    get css_class_name(): string {
        return this.team == 'white' ? 'white-queen' : 'black-queen';
    }
}