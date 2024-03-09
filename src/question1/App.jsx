// 1. Kommentarslista 3p
// Hantera och visa en list
// Skapa en React-komponent för att hantera och visa en lista
//todo: Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
//todo: med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
//! Listan är tom från början.
//todo: och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

import React, { useState } from "react";

let count = 1; //for the id

export default function App() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  function handleInput(e) {
     setInput(e.target.value);
  }

  function handleAddComment() {
    //new commment, dont add empty
    if (input.trim() !== "") {
    const comment = {
      id: count++,
      text: input,
    };
  

    setComments([...comments, comment]); //merge existing comments + the new comment
    setInput(''); //reset input filed
  }
  }

  function handleRemoveComment(id) {
    const filteredComments = comments.filter((comment) => comment.id != id);

    setComments(filteredComments);
  }

  return (
    <div className="w-full h-auto bg-slate-50 px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 1.</h2>
      <div>
        <p>Write new comments: </p>
        <input
        value={input}
          onChange={handleInput}
          type="text"
          className="border border-slate-400 border-r-none pl-2 py-0.5"
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-0.5 border border-slate-400 rounded-r-full uppercase tracking-wider font-semibold bg-white hover:bg-green-200 "
        >
          Add comment
        </button>
      </div>
      <div className="py-6 mt-4 bg-white">
        <p className="px-2 pb-4 text-lg font-semibold">Your comments: </p>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="flex flex-row mb-4">
              <p className="px-2 font-semibold">{comment.text}</p>
              <button
                onClick={() => handleRemoveComment(comment.id)}
                className="ml-2 px-4 py-0.5 border border-slate-400 rounded-full uppercase tracking-wider font-semibold bg-white hover:bg-red-200"
              >
                Remove comment
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
