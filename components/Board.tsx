import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId='board'>
        {(provided) => <div>{/* rendering all columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
