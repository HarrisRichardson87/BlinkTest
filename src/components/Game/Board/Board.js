import { memo } from 'react'
import { Shape } from './Shapes/Shape.js'
import { Target } from './Target/Target.js'
import { ShapeTypes } from "./Shapes/ShapeTypes";

// CSS Inline styles
const board = {
  display:"flex",
  justifyContent:"center",
  flexDirection:"row"
}
const shapes = {
  display:"flex",
  justifyContent:"space-between",
}
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

export const Board = memo(function Board({type}) {

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
  return (
    <div style={{ ...board}}>
      <div>
        Connect matching shapes together
      </div>
      <div>
        <Target type={type} css={getShapeCss()} />
      </div>
      <div style={{...shapes}}>
        <Shape type={ShapeTypes.TRIANGLE}   css={triangle} />
        <Shape type={ShapeTypes.RECTANGLE}  css={rectangle}/>
        <Shape type={ShapeTypes.CIRCLE}     css={circle}   />
      </div>
    </div>
  )
})
