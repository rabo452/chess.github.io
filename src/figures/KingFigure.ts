import BaseFigure from "../BaseFigure";
import Board from "../Board";
import { BeatenFigureType } from "../BeatenFigureType";
import SquareFigure from "./SquareFigure";

export default class KingFigure extends BaseFigure {
    
    // get figures for king  
    getFiguresToBeat(board: Board): BeatenFigureType {
        var row = this.current_pos.row;
        var column = this.current_pos.column;
        var temp_row = row;
        var temp_column = column;
        var board_pos = board.position;

        var figures_to_beat: BeatenFigureType = [];

        // get beaten fields in the top of king figure
        temp_row -= 1; 
        for (var i = -1; i <= 1; i++) {
            if (this.hasThisField(temp_row, temp_column + i)) {
                var figure: BaseFigure = board_pos[temp_row][temp_column + i];

                var obj = this.possibleToBeat(figure);

                if (obj['canBeat'] === false) {
                    continue;
                }

                figures_to_beat.push({
                    figure: figure,
                    command: board.beatField
                });
            }
        }

        // get beaten fields in the same row of king figure
        temp_row = row;
        if (this.hasThisField(temp_row, temp_column - 1)) {

            var figure: BaseFigure = board_pos[temp_row][temp_column - 1];

            var obj = this.possibleToBeat(figure);

            if (obj['canBeat']) {
                figures_to_beat.push({
                    figure: figure,
                    command: board.beatField
                });
            }
        }

        if (this.hasThisField(temp_row, temp_column + 1)) {

            var figure: BaseFigure = board_pos[temp_row][temp_column + 1];

            var obj = this.possibleToBeat(figure);

            if (obj['canBeat']) {
                figures_to_beat.push({
                    figure: figure,
                    command: board.beatField
                });
            }
        }

        // get beaten fields in the bottom of king figure
        temp_row += 1;
        for (var i = -1; i <= 1; i++) {
            if (this.hasThisField(temp_row, temp_column + i)) {
                var figure: BaseFigure = board_pos[temp_row][temp_column + i];

                var obj = this.possibleToBeat(figure);

                if (obj['canBeat']) {
                    figures_to_beat.push({
                        figure: figure,
                        command: board.beatField
                    });
                }
            }
        }


        // check for castling
        if (this.team === 'white' && this.figure_turns_maden === 0 && this.captured.black === false) {
            var short_castling_rook: BaseFigure = board_pos[7][7];
            var long_castling_rook: BaseFigure = board_pos[7][0];
            var king_field_after_short_castling: BaseFigure = board_pos[7][6];
            var king_field_after_long_castling: BaseFigure = board_pos[7][2];

            // check if within rook and king aren't anothers figures
            // and if the king captured and field then king will replace not captured too
            if (short_castling_rook.figure_turns_maden === 0 && 
                king_field_after_short_castling.captured.black === false &&
                board_pos[7][6] instanceof SquareFigure && 
                board_pos[7][5] instanceof SquareFigure) {
                
                figures_to_beat.push({
                    figure: board_pos[7][6],
                    command: board.whiteTeamShortCastling
                });
            }

            if (long_castling_rook.figure_turns_maden === 0 &&
                king_field_after_long_castling.captured.black === false &&
                board_pos[7][1] instanceof SquareFigure &&
                board_pos[7][2] instanceof SquareFigure &&
                board_pos[7][3] instanceof SquareFigure) {

                    figures_to_beat.push({
                        figure: board_pos[7][2],
                        command: board.whiteTeamLongCastling
                    });
            }
        }

        // check for castling
        if (this.team === 'black' && this.figure_turns_maden === 0 && this.captured.white === false) {
            var short_castling_rook: BaseFigure = board_pos[0][7];
            var long_castling_rook: BaseFigure = board_pos[0][0];
            var king_field_after_short_castling: BaseFigure = board_pos[0][6];
            var king_field_after_long_castling: BaseFigure = board_pos[0][2];

            // check if within rook and king aren't anothers figures
            // and if the king captured and field then king will replace not captured too
            if (short_castling_rook.figure_turns_maden === 0 &&
                king_field_after_short_castling.captured.white === false &&
                board_pos[0][6] instanceof SquareFigure &&
                board_pos[0][5] instanceof SquareFigure) {

                figures_to_beat.push({
                    figure: board_pos[0][6],
                    command: board.blackTeamShortCastling
                });
            }

            if (long_castling_rook.figure_turns_maden === 0 &&
                king_field_after_long_castling.captured.white === false &&
                board_pos[0][1] instanceof SquareFigure &&
                board_pos[0][2] instanceof SquareFigure &&
                board_pos[0][3] instanceof SquareFigure) {

                figures_to_beat.push({
                    figure: board_pos[0][2],
                    command: board.blackTeamLongCastling
                });
            }
        }

        return figures_to_beat;
    }
    
    public isKingCaptured(): boolean {
        if (this.team === "black" && this.captured.white === true) {
            return true;
        } else if (this.team === "white" && this.captured.black === true) {
            return true;
        } else {
            return false;
        }
    }

    getObjectCopy(): BaseFigure {
        var king: KingFigure = new KingFigure(this.current_pos.row, this.current_pos.column, this.team);
        king.figure_turns_maden = this.figure_turns_maden;

        return king;
    }

    get css_class_name(): string {
        return this.team == 'white' ? 'white-king' : 'black-king';
    }
}