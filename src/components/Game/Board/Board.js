import { Shape } from './Shapes/Shape.js'
import { Target } from './Target/Target.js'
import { ShapeTypes } from "./Shapes/ShapeTypes";
import styles from "./Board.module.css";
// CSS Inline styles
const triangle = {
	width: "0",
	height: "0",
	borderLeft: "100px solid transparent",
	borderRight: "100px solid transparent",
	borderBottom: "200px solid #555",
}
const rectangle = {
  height: "200px",
  width: "200px",
  backgroundColor: "#555"
}
const circle = {
  height: "200px",
  width: "200px",
  backgroundColor: "#555",
  borderRadius: "50%",
}

export const Board = function Board({type}) {

  const getShapeCss = () =>{
    // Get corresponding css for your target type
    switch(type){
      case ShapeTypes.CIRCLE:
        return circle;
      case ShapeTypes.RECTANGLE:
        return rectangle;
      default:
        return triangle;
    }
  }
  const getTarget = (type) => {
    return <Target type={type} css={getShapeCss()}/>;
  }
  return (
    <div className={styles.board}>
      <div>
        Connect matching shapes together....
      </div>
      <div className={styles.target}>
        {/**Obviously we want to just pass the type here but there is something wrong with the react dnd see 
        https://github.com/react-dnd/react-dnd/issues/2732#issuecomment-677739822 **/}
        {type === ShapeTypes.CIRCLE    && <Target type={ShapeTypes.CIRCLE}    css={getShapeCss()}/>}
        {type === ShapeTypes.RECTANGLE && <Target type={ShapeTypes.RECTANGLE} css={getShapeCss()}/>}
        {type === ShapeTypes.TRIANGLE  && <Target type={ShapeTypes.TRIANGLE}  css={getShapeCss()}/>}
      </div>
      <div className={styles.shapes}>
        <Shape type={ShapeTypes.TRIANGLE }  css={triangle }/>
        <Shape type={ShapeTypes.RECTANGLE}  css={rectangle}/>
        <Shape type={ShapeTypes.CIRCLE   }  css={circle   }/>
      </div>
    </div>
  )
};
