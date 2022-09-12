import React from "react";
import TextSquare from "./Squares/TextSquare";

// this column show to user the count of row, in the left
export default class ChessNumberColumn extends React.Component {
    render() {
        return (
            <div className="column-rows-count">
                {new Array(8).fill(0).map((el, index) => {
                    return <TextSquare SquareText={(9 - (index + 1)).toString()} />
                })}
            </div>
        )
    }
}