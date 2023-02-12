import { useDrag } from 'react-dnd'
import { ShapeTypes } from './ShapeTypes.js'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  float: 'left',
  cursor: 'move',
  marginRight:"20px"
}

export const Shape = function Shape({ name, type, css }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // Send user to success page
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, ...css, opacity }} data-testid={`Shape`}/>
  )
}