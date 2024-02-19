// https://github.com/gopinav/React-TypeScript-Tutorials/tree/main/react-typescript-demo
import './App.css';
import { Greet } from './components/props/Greet';
import { Status } from './components/props/Status';
import { Wrapper } from './components/props/Wrapper';
import { Container } from './components/props/Container';
import { Button } from './components/props/Button';
import { Input } from './components/props/Input';
import { useState } from 'react';
import { Style } from './components/props/Style';
import { Person } from './components/external-types/Person';
import { PersonList } from './components/external-types/PersonList';
import { User } from './components/state/User';
import { Counter } from './components/reducer/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { HR } from './components/HR';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { Title } from './components/Title';

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
      {/* @ PROPS Various Types */}
      <Title txt="Props" />
      <Greet name="Hasan" msgCount={3} msgs={msgs} />
      {/* <Greet name={"32"} /> */}
      <Status status="error" />

      {/* @ PROPS Children */}
      <Container>
        <Wrapper>HEY</Wrapper>
      </Container>

      {/* @ PROPS Event */}
      <Input value={inputText} handleChange={(e) => setInputText(e.target.value)} />
      <Button handleClick={(event, id) => console.log("Ğ", event, id)}>Run</Button>
      
      {/* @ PROPS Style */}
      <Style styles={{ color: "yellow", display: "block" }}/>
      <HR/>

      {/* @ TYPES External */}
      <Title txt="Types" />
      <PersonList names={names}/>
      <Person name={{first: "Bruce", last: "Wayne"}}/>
      <HR/>
      
      {/* @ STATE - Defining the type with initial value */}
      <Title txt="State" />
      <LoggedIn/>
      {/* @ STATE - Stating the types and Type Asertion*/}
      <User/>
      <HR/>
      
      {/* @ REDUCER - */}
      <Title txt="Reducer" />
      <Counter/>
      <HR/>
      
      {/* @ CONTEXT - */}
      <Title txt="Context" />
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <HR/>
    </>
  );
}

export default App;
