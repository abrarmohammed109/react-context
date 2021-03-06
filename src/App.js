import {useState, createContext} from 'react'
import './App.css';
import ComponentA from './components/ComponentA';

export const DataContext = createContext()
console.log(DataContext)

function App() {

  const [userName, setUserName] = useState('mohammed')
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <DataContext.Provider value={{userName, setLoggedIn, loggedIn}}>
      <h1> Learning react context </h1>
      {loggedIn ? "Logged In" : "Logged Out"}
      <ComponentA />
    </DataContext.Provider>
  );
}



export default App;
