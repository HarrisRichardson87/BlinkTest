import React, { Component } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Board } from './Board/Board';
import { ShapeTypes } from './Board/Shapes/ShapeTypes';
import { connect } from 'react-redux';

class Game extends Component {
    state = {
        // These are all our possible shapes
        shapes:[
            ShapeTypes.CIRCLE,
            ShapeTypes.TRIANGLE,
            ShapeTypes.RECTANGLE
        ]
    }
    render() {
        const { shapes } = this.state;
        const { index }  = this.props;
        return (
                <DndProvider backend={HTML5Backend}>
                   <Board type={shapes[index]}/>
                </DndProvider>
        );
    }
}
const mapStateToProps = (state) => {
    // increament to the next shape if user has successfully connected the shape
    return {
        index: state.shape.index
    }
}
export default connect(mapStateToProps)(Game)