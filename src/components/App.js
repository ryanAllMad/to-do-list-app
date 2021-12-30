import React, {useState, useRef} from 'react';
import AddItem from "./AddItem";


const App = () => {
    const [heading, setHeading] = useState('');
    const headingRef = useRef();
    const titleFormRef = useRef();

    const onHeadingChange = () => {
        setHeading(headingRef.current.value);
        //turned the list heading string into a syntactiacally friendly ID and aria-lableled-by in App element
    }
//remove heading input form from dom after submit

//TODO add Edit icon and button and bring back Input to edit the title already filled out
const onHeadingSubmit = (e) => {
    e.preventDefault();
    titleFormRef.current.remove();
}
    
return (
    <section aria-labelledby={heading.replaceAll(' ', '-').toLowerCase()}>
    <h1 id={heading.replaceAll(' ', '-').toLowerCase()}> {heading}</h1>
    <form ref={titleFormRef} onSubmit={onHeadingSubmit}>
    <input id="heading-input" type="text" placeholder="E.g. Title my to do list" ref={headingRef} value={heading} onChange={onHeadingChange} />
    </form>
    
    
    <div className="empty-state">
        <p>Either you've done everything already or there are still thingsto add to your list</p>
    </div>
    <AddItem />
</section>
);
}

export default App;
