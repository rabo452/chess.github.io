import React from "react";

export default class TextSquare extends React.Component<{SquareText: string}> {
    render() {
        return (
            <div className="square square-text">
                {this.props.SquareText}
            </div>
        );
    }
}