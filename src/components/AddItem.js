import React, {useState, useRef} from "react";
import ListItems from "./ListItems";

const AddItem = () => {
//set form states
const [disabled, setDisabled] = useState('disabled');
const [valid, setValid]       = useState(true);
const [item, setItem]         = useState('');
const [result, setResult]     = useState('');
const [feedback, setFeedback] = useState('');

//set references
const inputRef = useRef();
const formRef = useRef();
//an event handler to update the state so the user knows whether they can add the item to the list or not
const onInputChange = (e) => {
        setValid(false); //set aria to valid for submittal
        setDisabled(''); // enable button
        setItem(e.target.value); //store value of input
}
//TODO add each list item to the list element
const onFormSubmit = (e) => {
    e.preventDefault();
    setResult(inputRef.current.value); //add the value of the input to the list
    setFeedback(`${inputRef.current.value} added`); //non visual feedback when list item added 
}

    return (
        <div>
        <ListItems added={result} />
        <form ref={formRef} onSubmit={onFormSubmit}>
            <label htmlFor="add-to-do" className="visually-hidden"></label>
            <input type="text" ref={inputRef} value={item} onChange={onInputChange} id="add" placeholder="E.g. My first to do item" aria-invalid={valid} />
            <button type="submit"  disabled={disabled}>Add</button>
        </form>
        <div role="status" aria-live="polite" className="visually-hidden">{feedback}</div>
        </div>
    );
};

export default AddItem;