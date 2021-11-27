import React, { useState } from "react";

function EditNote({ log, handleUpdateNotes, setIsEditing }) {
  const { id, notes } = log;
  const [updatedNote, setUpdatedNote] = useState(notes);

  function handleEditForm(e) {
    e.preventDefault();

    fetch(`/trips/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note: updatedNote }),
    })
      .then((resp) => resp.json())
      .then((updatedNote) => handleUpdateNotes(updatedNote));

    setIsEditing(false);
  }

  return (
    <form onSubmit={handleEditForm}>
      <textarea
        id="note"
        type="number"
        name="note"
        value={updatedNote}
        onChange={(e) => setUpdatedNote(e.target.value)}
      ></textarea>
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditNote;
