import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const pracownicy = [
    {
    id: 1,
    imie: 'Adam',
    nazwisko: 'Kowalski',
    pensja: 15000
  }, 
  {
    id: 2,
    imie: 'Jan',
    nazwisko: 'Nowak',
    pensja: 10000
  },
  {
    id: 3,
    imie: 'Ewa',
    nazwisko: 'Markowska',
    pensja: 25000
  }


]
  const usunPracownika = (id) => {
    const nowaLista = lista.filter( pracownik => pracownik.id !== id)
    setLista(nowaLista)
  }

  const [lista, setLista] = useState(pracownicy)
  return (
  <>
    <ul>
      {
        lista.map( pracownik => (
          <li key={pracownik.id}>{pracownik.imie} <button onClick={() => (usunPracownika(pracownik.id))}>Usuń</button></li>

        ))
      }
    </ul>
  
  </>
  );
}

export default App;
