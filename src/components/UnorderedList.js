import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


//TODO map over results to add items to the list

// Okay i can add to the id number but i can't print out new list items 
//TODO add iconography


const UnorderdList = ({results}) => {
  const [deletedFeedback, setDeletedFeedback] = useState('');

  const onDeleteClick = () => {
    document.querySelector(`li`).remove();
    document.querySelector(`[tabindex="-1"]`).focus();
    setDeletedFeedback(`${results} has been removed`);
  }
  return  (
       <div>
       <ul className="list-items">
       <li><input type="checkbox" id={`to-do-${results.replaceAll(' ', '-').toLowerCase()}`} />
       <label htmlFor={`to-do-${results.replaceAll(' ', '-').toLowerCase()}`}>
       {results}
       </label>
       <button onClick={onDeleteClick} className="trash">
       <FontAwesomeIcon icon={faTrashAlt} />
       <span className="visually-hidden">delete</span>
       </button>
       </li>
       </ul>
       <div role="status" aria-live="polite" className="visually-hidden">{deletedFeedback}</div>
       </div>
  );
  
}


export default UnorderdList;