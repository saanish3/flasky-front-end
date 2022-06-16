import './App.css';
import DogList from './components/DogList'
import Dog from './components/Dog'

function App() {
  const dogData = [
    {
      name: "Whiskers",
      caretaker: "Farah",
    },
    {
      name: "Fang",
      caretaker: "Luciana",
    },
    {
      name: "Beetle",
      caretaker: "Aya",
    },
  ];

return (
<main>
  <h1>List of Dogs</h1>
    <Dog />
    <DogList dogData={dogData} />
</main>
  );
}

export default App;
