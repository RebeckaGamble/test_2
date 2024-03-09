// 6. Fråga och Svar med Redux Toolkit 3p
//todo: Skapa en applikation med två komponenter: QuestionComponent och AnswerComponent.
//!Använd Redux Toolkit för att hantera en fråga som ställs i QuestionComponent och
// sedan svaras på i AnswerComponent.

//todo: State: Skapa en store och en questionSlice som hanterar en fråga och ett svar.
// questionSlice ska innehålla tillstånd för question (en sträng) och answer
// (en sträng), med actions för att sätta en ny fråga och svara på den.

//! QuestionComponent: Ska visa ett inputfält där användaren kan skriva in en
// fråga. När frågan skickas (t.ex. genom att trycka på en knapp), ska frågan
// lagras i Redux store med hjälp av den action som definieras i questionSlice.

//! AnswerComponent: Ska visa ett inputfält och en knapp för att svara
// på frågan. När svaret skickas, ska det också lagras i Redux store och visas
// under inputfältet.

import { store } from "./store";
import { Provider } from "react-redux";
import QuestionComponent from "./QuestionComponent";
import AnswerComponent from "./AnswerComponent";

export default function App() {
  return (
    <div className="w-full h-auto px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 6.</h2>
      <Provider store={store}>
        <div>
          <QuestionComponent />
          <AnswerComponent />
        </div>
      </Provider>
    </div>
  );
}
