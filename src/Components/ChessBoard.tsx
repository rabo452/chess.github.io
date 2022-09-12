import React from "react";
import Square from "./Squares/Square";

import Board from "../Board";
import KingFigure from "../figures/KingFigure";


export default class ChessBoard extends React.Component {
    state: {
        board: Board,
        team_turn: string,
        game_stopped: boolean
    }

    squares_color: string[] = [];
    
    constructor(props: {}) {
        super(props);

        this.state = {
            board: new Board(),
            team_turn: 'white',
            game_stopped: false
        }

        // count the color of the square
        var color_index = 0;
        for (var i = 1; i <= 64; i++) {
            var color = color_index % 2 ? 'black' : 'white';
            this.squares_color.push(color);
            
            color_index++;

            // in the next row change the order of colors
            if (i % 8 == 0) {
                color_index++;
            }
        }

        this.UpdateBoard = this.UpdateBoard.bind(this);
        this.changeTeamTurn = this.changeTeamTurn.bind(this);
    }

    // the board pos is changed or the board's figure changed
    UpdateBoard(): void {
        this.setState(this.state);
    }

    /**
     * Change the team turn
     */
    changeTeamTurn(): void {
        this.state.team_turn = this.state.team_turn === 'black' ? 'white' : 'black';
    }

    shouldComponentUpdate() {
        if (this.state.game_stopped) {
            return true;
        }

        var board: Board = this.state.board; 
        var white_king: KingFigure | undefined = board.getKing('white');
        var black_king: KingFigure | undefined = board.getKing('black');
        var white_turns_count: number = board.getCountTurnOfTeam('white');
        var black_turns_count: number = board.getCountTurnOfTeam('black');

        // this shouldn't be
        if (white_king === undefined || black_king === undefined) {
            alert('Something went wrong!');
            return true;
        }

        // set captured fields for show user if his king captured
        this.state.board.clearCaptureFields();
        if (this.state.team_turn === "white") {
            board.setCaptureFields('black', true);
        } else {
            board.setCaptureFields('white', true);
        }

        if (white_turns_count === 0 && white_king.captured.black) {
            alert('The black team won this match!');
            this.state.game_stopped = true;
            this.UpdateBoard();
            return true;
        }

        if (black_turns_count === 0 && black_king.captured.white) {
            alert('The white team won this match!');
            this.state.game_stopped = true;
            this.UpdateBoard();
            return true;
        }

        if (white_turns_count === 0 && white_king.captured.black === false) {
            alert('This is draw, the white team in stalemate');
            this.state.game_stopped = true;
            this.UpdateBoard();
            return true;
        }

        if (black_turns_count === 0 && black_king.captured.white === false) {
            alert('This is draw, the black team in stalemate');
            this.state.game_stopped = true;
            this.UpdateBoard();
            return true;
        }

        return true;
    }

    render() {
        return (
            <div className="chess-board">
                {this.squares_color.map((color, index) => {
                    var figure_row: number = Math.trunc(index / 8);
                    var figure_column: number = index % 8;
                    var figure = this.state.board.position[figure_row][figure_column];
                    
                    var figure_class_name: string = figure.css_class_name;
                    
                    return <Square GameStopped={this.state.game_stopped} 
                                   UpdateTeamTurn={this.changeTeamTurn} 
                                   Board={this.state.board} 
                                   UpdateBoardHandler={this.UpdateBoard} 
                                   Figure={figure} Color={color} 
                                   FigureCssClassName={figure_class_name} 
                                   TeamTurn={this.state.team_turn} />
                })}
            </div>
        )
    }
}