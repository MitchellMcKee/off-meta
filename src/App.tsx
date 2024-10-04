import './App.css'
import InteractiveJsonDisplayer from './components/InteractiveJsonDisplayer';
import data from './mocks/Dihada, Binder of Wills.json';

function App() {
  // refer to https://scryfall.com/docs/api 

  return (
    <>
      <div>
        <h1>Display JSON Data</h1>
        <InteractiveJsonDisplayer json={data}></InteractiveJsonDisplayer>
      </div>
    </>
  )
}

export default App
