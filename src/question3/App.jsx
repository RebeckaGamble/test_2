// 3. Välj Favoritfärg via Dropdown 3p
//todo: Skapa två React-komponenter: ParentComponent och ChildComponent.
//todo: ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
//todo: När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
//todo: ParentComponent ska visa användarens valda favoritfärg.

//! I ChildComponent, implementera ett <select>-element med några färgalternativ.
//! Använd en callback-funktion för att meddela ParentComponent om användarens val.
//! ParentComponent ska ta emot och visa det valda färgalternativet.

import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="w-full h-auto bg-slate-50 px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 3.</h2>
      <div>
        <ParentComponent />
      </div>
    </div>
  );
}

export default App;
