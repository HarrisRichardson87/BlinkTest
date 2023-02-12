import { useDrop } from 'react-dnd';
export const Target = ({ type, css }) => {
  // Checks if object is over the target and if it is an acceptable type to drop
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: type,
    drop: () => ({ name: 'Target' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // Shows background color on hover
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div key={type} ref={drop} style={{ ...css, backgroundColor }} data-testid="targetShape"/>
  )
}