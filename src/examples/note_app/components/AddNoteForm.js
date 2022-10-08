import React, { useContext, useState } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = ({}) => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      //   setNotes([...notes, { title, body }]);

      dispatch({
        type: "ADD_NOTE",
        title,
        body,
      });
      setTitle("");
      setBody("");
    }
  };

  const removeNote = (title) => {
    // setNotes(notes.filter((note) => note.title !== title));
    dispatch({
      type: "REMOVE_NOTE",
      title,
    });
  };

  return (
    <form onSubmit={addNote}>
      <div className="form-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mt-2 form-group">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <button className="mt-3 btn btn-primary btn-block">Add Note</button>
    </form>
  );
};

export default AddNoteForm;
