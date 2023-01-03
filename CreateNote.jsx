import React, {useState} from 'react';

function CreateNote(props) {
    const [note, createNote] = useState({
        heading: "",
        text: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        createNote(prevState => {
            return {
                ...prevState,
                [name]: value
            };
        });
    }

    function addNote(event){
        props.add(note);
        createNote({
            heading: "",
            text: ""
        });
        event.preventDefault();
    }

    return (
      <div>
          <form>
              <input
                name="heading"
                onChange={handleChange}
                value={note.heading}
                placeholder="Heading"
              />

              <textarea
                name="text"
                onChange={handleChange}
                value={note.text}
                placeholder="Write your note here"
                rows="3"
              />

              <button onClick={addNote}>+</button>

          </form>
      </div>
    );
}

export default CreateNote;