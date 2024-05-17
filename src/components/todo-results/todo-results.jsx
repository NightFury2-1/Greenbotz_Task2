import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  function calculateChecked() {
    return todos.filter((t) => t.checked === true).length;
    }

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
