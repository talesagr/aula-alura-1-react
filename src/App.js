import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Formulario';
import Team from './components/Team';

function App() {
  
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
        name: 'Data Science',
        primaryColor: '#A6D157',
        secondaryColor: '#F0F8E2',
    },
    {
        name: 'Devops',
        primaryColor: '#E06B69',
        secondaryColor: '#FDE7E8',
    },
    {
        name: 'UX e Design',
        primaryColor: '#D86EBF',
        secondaryColor: '#FAE5F5',
    },
    {
        name: 'Mobile',
        primaryColor: '#FEBA05',
        secondaryColor: '#FFF5D9',
    },
    {
        name: 'Inovação e Gestão',
        primaryColor: '#FF8A29',
        secondaryColor: '#FFEEDF',
    },
  ]

  const [cards, setCard] = useState([])

  const onNewCard = (data) => {
    console.log(data)
    setCard([...cards, data])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onCreateCard={newCard => onNewCard(newCard)} />
      
      {teams.map(team => 
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          members={cards.filter(card => card.team === team.name)}
        />
      )}
    </div>
  );
}

export default App;
