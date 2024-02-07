import './App.css';
import { Greet } from './components/Greet';
import { Status } from './components/Status';
import { Wrapper } from './components/Wrapper';
import { Container } from './components/Container';

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

function App() {
  return (
    <>
      <Greet name="Hasan" msgCount={3} msgs={msgs} />
      {/* <Greet name={"32"} /> */}
      <Status status="error" />
      <Container>
        <Wrapper>HEY</Wrapper>
      </Container>
    </>
  );
}

export default App;
