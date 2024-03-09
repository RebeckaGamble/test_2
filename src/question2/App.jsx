// 2. Uppdatera E-post 3p
//todo: Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
//! Från början visas användarens nuvarande e-postadress.
//todo: Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

//! När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
//! När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("reb@chas.se");
  const [updateEmail, setUpdateEmail] = useState(false);
 /*
  function renderEmail() {
    if(edit) {
      return (
        <input
        type="text"
        value={email}
        className="border border-slate-400 pl-2"
      />
      )
    } else {
      return <p>{email}</p>
    }
  }*/

  return (
    <div className="w-full h-auto px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 2.</h2>
      <div className="flex flex-row items-center">
        {updateEmail ? (
          <>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border border-slate-400 pl-2"
            />
            <button
              onClick={() => setUpdateEmail(false)}
              className="border-2 border-purple-400 px-4 rounded-r-xl hover:text-white hover:bg-purple-400"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="pr-2"> <span className="font-semibold">Your Email: </span>{email}</p>
            <button
              onClick={() => setUpdateEmail(true)}
              className="border-2 border-purple-400 px-4 rounded-xl hover:text-white hover:bg-purple-400"
            >
              Edit Email
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
