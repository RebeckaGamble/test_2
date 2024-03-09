// 4. Dela Favoritfärg med Context 3p
//! Skapa en applikation som använder React Context för att hantera och
// dela en användares val av favoritfärg mellan komponenter.
// Applikationen ska bestå av två huvudkomponenter: ColorSelector och ColorDisplay.

//todo: Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

//todo: Steg 2: ColorSelector-komponenten ska innehålla en dropdown-lista (select)
// där användaren kan välja en färg. När en färg väljs, uppdatera ColorContext
// med det nya värdet.

//todo: Steg 3: ColorDisplay-komponenten ska använda ColorContext för att visa den valda
// favoritfärgen. Den ska lyssna på ändringar i context och uppdatera visningen
// automatiskt när en ny färg väljs.

// Genom att använda React Context kan du skapa en tät koppling mellan
// ColorSelector och ColorDisplay utan att direkt skicka props eller använda callbacks.
import { ColorProvider } from "./colorContext";
import ColorSelector from "./ColorSelector";
import ColorDisplay from "./ColorDisplay";

function App() {
  return (
    <ColorProvider>
      <div className="w-full h-auto px-2 py-10">
        <h2 className="font-semibold pb-4 text-lg">Question 4.</h2>
        <div>
          <ColorSelector />
        </div>
        <div>
          <ColorDisplay />
        </div>
      </div>
    </ColorProvider>
  );
}

export default App;
