// 5. Skapa Custom Hook för API-anrop 3p
// Målet med denna uppgift är att skapa en custom
// hook i React, useFetchData, för att hämta data från
//en angiven URL. Din hook ska enbart hantera datahämtning och laddningsstatus.

//todo: Skapa en custom hook som heter: useFetchData, som tar en URL som argument
// och använder fetch för att hämta data.
//! Hooken ska returnera ett objekt med två egenskaper: data (datan som hämtats)
//! och isLoading (en boolean som indikerar om datahämtningen pågår).

// Använd https://jsonplaceholder.typicode.com/users som test-URL för att demonstrera
// hur din hook kan användas i en komponent för att visa användardata och en
// laddningsindikator.

// Exempel på användning:
import { useEffect, useState } from "react";

function UserList() {
  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) return <div>Laddar...</div>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function useFetchData(url) {
  //url as input
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); //loading from beginning

  useEffect(() => {
    async function getData() {
      const respone = await fetch(url);
      const data = await respone.json();
      setData(data);
      setIsLoading(false);
    }
    getData();
  }, [url]);

  //returnera object med 2 egenskaper
  return { data, isLoading };
}

function App() {
  return (
    <div className="w-full h-auto bg-slate-50 px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 5.</h2>
      <>
        <UserList />
      </>
    </div>
  );
}

export default App;
