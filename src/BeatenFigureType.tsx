import BaseFigure from "./BaseFigure"

type BeatenFigureType = Array<{
    figure: BaseFigure, 
    command: Function // this function will action if user clicked on the board or script counting the turns
}>

export type {
    BeatenFigureType
}