import BaseFigure from "../BaseFigure";
import Board from "../Board";
import { BeatenFigureType } from "../BeatenFigureType";

export default class SquareFigure extends BaseFigure {
    
    getFiguresToBeat(board: Board): BeatenFigureType {
        return [];
    }
    
    getObjectCopy() {
        return new SquareFigure(this.current_pos.row, this.current_pos.column, this.team);
    }

    get css_class_name(): string {
        return '';
    }
}