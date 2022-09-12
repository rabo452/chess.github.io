import KingFigure from "./figures/KingFigure";
import Board from "./Board";
import { BeatenFigureType } from "./BeatenFigureType";

export default abstract class BaseFigure {
    [x: string]: any;
    abstract get css_class_name(): string;

    public readonly team?: string;
    public figure_turns_maden: number = 0; // how many turns this figure maden
    public selected: boolean; // the figure was selected (user clicked on it)
    
    // the data shows to user possible to move fields on the boards by this params
    // if beaten === true, then this field can be beaten by click another user
    public visual_data: {
        beaten: boolean,
        beaten_by_figure?: BaseFigure,
        command?: Function // after user click the field do this command 
    }

    // is captured by another team without visual to user
    public captured: { black: boolean, white: boolean } = {
        black: false, // the black team is capturing this field 
        white: false // the white team is capturing this field
    }

    protected current_pos: {
        row: number,
        column: number
    }
    
    constructor(row: number, column: number, team?: string) { 
        this.current_pos = {
            row: row,
            column: column
        }

        this.team = team;
        this.selected = false;
        this.visual_data = {
            beaten: false,
            beaten_by_figure: undefined,
            command: undefined
        }
    }

    /*
      get figures on the board that this figure can beat
      
      @param: board_pos - the position on the board as 8 rows array
      @param: check_king_captured - turn checking for if king of team is captured after turn or not
    */
    abstract getFiguresToBeat(board: Board): BeatenFigureType;

    abstract getObjectCopy(): BaseFigure; // return the same object but with another reference

    // filter the figures that current figure can beat
    // check if after turn the king will be captured or not
    // after the turn the king mustn't be captured
    public getProtectedMovies(board: Board, figures_possible_to_beat: BeatenFigureType): BeatenFigureType {
        if (this.team === undefined) {
            return [];
        }
        
        var protected_movies: BeatenFigureType = [];

        for (var beaten_figure_obj of figures_possible_to_beat) {
            var temp_board = board.copyBoard();
            temp_board.current_turns_count = board.current_turns_count;

            var figure_to_move = this.getObjectCopy(); // figure that we're moving
            var opposite_team = this.team === "white" ? "black" : "white";
            var team_king: KingFigure | undefined;
            
            // if this figure is king, then this is team king figure
            // else get king figure from the desk
            if (this instanceof KingFigure) {
                team_king = (figure_to_move as KingFigure);
            }else {
                team_king = temp_board.getKing(this.team);
            }

            // this shouldn't be
            if (team_king === undefined) {
                alert('Something went wrong!');
                continue;
            }
            
            var command = beaten_figure_obj.command;
            var beaten_figure = beaten_figure_obj.figure; // the field that user clicked upon it

            command.call(temp_board, beaten_figure, figure_to_move);

            // after the turn was made need to check the turns for opposite team for turns without checking if their king would be captured
            temp_board.setCaptureFields(opposite_team, false);

            // check if in the next turn the team king would be captured
            // if yes then figure can't make this move
            // if not then figure can make this move
            if (team_king.isKingCaptured() === false) {
                protected_movies.push(beaten_figure_obj);
            } 
        }

        return protected_movies;
    }

    // check if possible to beat figure on the board
    protected possibleToBeat(figure: BaseFigure): {stop: boolean, canBeat: boolean} {
        // it's square without figure
        if (figure.team === undefined) {
            return { stop: false, canBeat: true }
        }

        // it's not friendly figure
        if (figure.team !== this.team) {
            return { stop: true, canBeat: true }
        }
        
        // friendly figure
        return { stop: true, canBeat: false }
    }

    // show to user possible movies for this figure
    public showPossibleMovies(board: Board): void {
        // the Square field can't have any beaten field
        if (this.team === undefined) {
            return;
        }

        var selected_figures: BeatenFigureType = this.getFiguresToBeat(board);
        selected_figures = this.getProtectedMovies(board, selected_figures);
        for (var beaten_figure_info of selected_figures) {
            beaten_figure_info.figure.visual_data = {
                beaten: true,
                beaten_by_figure: this,
                command: beaten_figure_info.command
            }
        }
    }

    // set capture field for figures that this figure can beat
    // without visual for user 
    // filter - include checking for king's capture or not
    public setCaptureToBeatFigures(board: Board, use_filter: boolean): void {
        // the Square figure can't have any beaten field
        if (this.team === undefined) {
            return;
        }
        
        var beaten_figures = this.getFiguresToBeat(board);
        if (use_filter) {
            beaten_figures = this.getProtectedMovies(board, beaten_figures);
        }

        for (var figure_obj of beaten_figures) {
            var figure: BaseFigure = figure_obj.figure;

            if (this.team === "black") {
                figure.captured.black = true;
            }else {
                figure.captured.white = true;
            }
        }
    }

    public setNewPos(row: number, column: number): void {
        this.current_pos = {
            row: row,
            column: column
        }
    }
    
    public get figure_pos(): {row: number, column: number} {
        return this.current_pos;
    }

    // have this field on the board
    public hasThisField(row: number, column: number): boolean {
        if (row > 7 || row < 0 || column > 7 || column < 0) {
            return false;
        }
        return true;
    }
}