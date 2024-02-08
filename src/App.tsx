import './App.css';
import { Greet } from './components/Greet';
import { Status } from './components/Status';
import { Wrapper } from './components/Wrapper';
import { Container } from './components/Container';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { useState } from 'react';
import { Style } from './components/Style';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

const msgs = [
  {
    id: 1,
    msg: 'Hey',
  },
  {
    id: 2,
    msg: 'How you doin?',
  },
  {
    id: 3,
    msg: 'Do you wanna hang out?',
  },
];

const names = [
  {
    first: "hasan",
    last: "celik",
  },
  {
    first: "taner",
    last: "tolga",
  },
  {
    first: "optimus",
    last: "prime",
  },
]

function App() {
  const [inputText, setInputText] = useState<string>("")
  return (
    <>
      <Greet name="Hasan" msgCount={3} msgs={msgs} />
      {/* <Greet name={"32"} /> */}
      <Status status="error" />
      <Container>
        <Wrapper>HEY</Wrapper>
      </Container>
      <Input value={inputText} handleChange={(e) => setInputText(e.target.value)} />
      <Button handleClick={(event, id) => console.log("Ğ", event, id)}>Run</Button>
      <Style styles={{ color: "purple", display: "block" }}/>
      <PersonList names={names}/>
      <Person name={{first: "Bruce", last: "Wayne"}}/>
    </>
  );
}

export default App;
