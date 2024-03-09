import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "./questionSlice";

//! QuestionComponent: Ska visa ett inputfält där användaren kan skriva in en
// fråga. När frågan skickas (t.ex. genom att trycka på en knapp), ska frågan
// lagras i Redux store med hjälp av den action som definieras i questionSlice.

export default function QuestionComponent() {
  const [questionText, setQuestionText] = useState();
  const dispatch = useDispatch();

  function handleSend() {
    dispatch(setQuestion(questionText)); //skicka till redux
  }

  return (
    <>
      <p className="font-semibold">Type a question:</p>
      <input
        onChange={(e) => setQuestionText(e.target.value)}
        type="text"
        className="border border-slate-400 pl-2"
      />{" "}
      <button
        onClick={handleSend}
        className="border border-slate-300 font-semibold px-4 hover:bg-green-400 hover:text-white"
      >
        Ask
      </button>
    </>
  );
}
