import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Formulario';

function App() {

  const [cards, setCard] = useState([])

  const onNewCard = (data) => {
    console.log(data)
    setCard([...cards, data])
  }

  return (
    <div className="App">
      <Banner />
      <Form onCreateCard={newCard => onNewCard(newCard)} />
    </div>
  );
}

export default App;
