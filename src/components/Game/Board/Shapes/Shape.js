import { useDrag } from 'react-dnd'
import { useDispatch } from 'react-redux'
import history from '../../../../reducers/history'

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  float: 'left',
  cursor: 'move',
  marginRight:"20px"
}

export const Shape = function Shape({ type, css}) {
  const dispatch = useDispatch(); // Use redux dispatch

  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // Send user to success page using redux TODO
        history.push("/results")
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
