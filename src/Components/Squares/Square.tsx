import React from "react";
import BaseFigure from "../../BaseFigure";
import Board from "../../Board";
import KingFigure from "../../figures/KingFigure";

type SquareProps = {
    Color: string,
    FigureCssClassName: string,
    TeamTurn: string,
    Figure: BaseFigure,
    UpdateBoardHandler: () => void,
    UpdateTeamTurn: () => void,
    Board: Board,
    readonly GameStopped: boolean
}

export default class Square extends React.Component<SquareProps> {
    constructor(props: SquareProps) {
        super(props);

        this.onclick_handler = this.onclick_handler.bind(this);
    }

    onclick_handler() {
        // game stopped, don't do anything
        if (this.props.GameStopped) {
            return;
        }

        var figure = this.props.Figure;
        var board = this.props.Board;

        // check if figure selected to be beaten
        // user selected enemy figure and clicked to this figure
        // user made turn
        if (figure.visual_data.beaten === true && 
            figure.visual_data.beaten_by_figure !== undefined && 
            figure.visual_data.command !== undefined) {

            var beat_figure = figure.visual_data.beaten_by_figure;
            var beaten_figure = figure;
            var command = figure.visual_data.command;
            
            command.call(board, beaten_figure, beat_figure);
            beat_figure.figure_turns_maden += 1;
            board.current_turns_count += 1;
            board.clearVisualData();

            this.props.UpdateTeamTurn();
            this.props.UpdateBoardHandler();
            return;
        }

        // after every click remove all visual movies and show again if need
        board.clearVisualData();
        this.props.UpdateBoardHandler();

        // check if the figure team can make turn
        if (this.props.TeamTurn !== figure.team || figure.team === undefined) {
            return;
        }
        
        // figure can make turn
        // show to user the possible turns
        figure.selected = true;
        figure.showPossibleMovies(board);
        this.props.UpdateBoardHandler();
    }

    render() {
        var captured_by_enemy: boolean = false;

        if (this.props.Figure.team === 'white' && this.props.Figure.captured.black) {
            captured_by_enemy = true;
        }else if (this.props.Figure.team === 'black' && this.props.Figure.captured.white) {
            captured_by_enemy = true;
        }

        return (
            <div 
                className={`square 
                            ${this.props.Figure instanceof KingFigure && captured_by_enemy ? "captured" : ""}
                            ${this.props.Color} 
                            ${this.props.FigureCssClassName}
                            ${this.props.Figure.selected ? "figure-selected" : ""} 
                            ${this.props.Figure.visual_data.beaten ? 'beaten-field' : '' }`}
                onClick={this.onclick_handler}

            >

            </div>
        );
    }
}