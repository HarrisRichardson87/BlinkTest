import React, { Component } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Board } from './Board/Board';
import { ShapeTypes } from './Board/Shapes/ShapeTypes';

class Game extends Component {
    state ={
        type:null
    }
    componentDidMount(){
        this.init()
    }
    init(){
        // Select a random shape for the board
        var keys = Object.keys(ShapeTypes);
        const type = ShapeTypes[keys[ keys.length * Math.random() << 0]];

        // Set it to the state
        this.setState({ type });
    }
    render() {
        const { type } = this.state;
        return (
                <DndProvider backend={HTML5Backend}>
                    { type && <Board type={type}/> }
                </DndProvider>
        );
    }
}

export default Game;