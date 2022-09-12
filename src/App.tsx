import React from "react";
import ChessBoard from "./Components/ChessBoard";
import ChessNumberColumn from "./Components/ChessNumberColomn";
import ChessRowsLetters from "./Components/ChessRowsLetters";

export default class App extends React.Component {
    render() {
        return (
            <div className="chess-parent">
                <div className="chess-board-box">
                    <ChessNumberColumn />
                    <ChessBoard />
                    <ChessRowsLetters />
                </div>
            </div>
        )
    }
}