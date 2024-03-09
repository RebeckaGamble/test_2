import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "./questionSlice";

//! AnswerComponent: Ska visa ett inputfält och en knapp för att svara
// på frågan. När svaret skickas, ska det också lagras i Redux store och visas
// under inputfältet.

export default function AnswerComponent() {
  const question = useSelector((state) => state.question.question);
  const answer = useSelector((state) => state.question.answer);

  const [inputAnswer, setInputAnswer] = useState("");
  const dispatch = useDispatch();

  const handleAnswer = () => {
    dispatch(setAnswer(inputAnswer));
  };

  return (
    <>
      <p className="pt-4 font-semibold">
        The question:{" "}
        <span className="text-xl text-green-700"> {question}</span>{" "}
      </p>
      <div>
        <input
          type="text"
          onChange={(e) => setInputAnswer(e.target.value)}
          className="border border-slate-400 pl-2"
        />{" "}
        <button
          onClick={handleAnswer}
          className="border border-slate-300 font-semibold px-4 hover:bg-green-400 hover:text-white"
        >
          Answer
        </button>
      </div>
      <div>
        <p>Your answer: {answer}</p>
      </div>
    </>
  );
}
