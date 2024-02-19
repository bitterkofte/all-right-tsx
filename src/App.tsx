// https://github.com/gopinav/React-TypeScript-Tutorials/tree/main/react-typescript-demo
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
import { UserContextProvider } from './components/context/UserContext';
import { TheUser } from './components/context/TheUser';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { ClassComp } from './components/class-component/ClassComp';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';

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
      {/* @ STATE - Union Type and Type Asertion*/}
      <User/>
      <HR/>
      
      {/* @ REDUCER - */}
      <Title txt="Reducer" />
      <Counter/>
      <HR/>
      
      {/* @ CONTEXT - Defining the type with initial value */}
      <Title txt="Context" />
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      {/* @ CONTEXT - Union Type and Type Asertion */}
      <UserContextProvider>
        <TheUser/>
      </UserContextProvider>
      <HR/>

      {/* @ REF - Dom Var. and Mutable Ref */}
      <Title txt="Ref" />
      <DomRef/>
      <MutableRef/>
      <HR/>

      {/* @ CLASS - State and Props */}
      <Title txt="Class Component" />
      <ClassComp message='hello' />
      <HR/>

      {/* @ Comp - Component as Prop */}
      <Title txt="Component as Prop" />
      <Private name="Hasan" isLoggedIn={true} component={Profile} />
      <HR/>

      {/* @ GENERIC PROPS - Type of a certain prop can vary, parameterized types */}
      <Title txt="Generic Props" />
      <List items={[{id: 2}, {id: 7}, {id: 32}]} onClick={(item) => console.log('item: ', item.id)}/>
      <HR/>
    </>
  );
}

export default App;
