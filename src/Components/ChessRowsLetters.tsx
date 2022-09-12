import React from "react";
import TextSquare from "./Squares/TextSquare";

export default class ChessRowsLetters extends React.Component {
    render() {
        return (
            <div className="row-rows-letters">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((letter) => {
                    return <TextSquare SquareText={letter} />
                })}
            </div>
        )
    }
}