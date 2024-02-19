import { useState } from 'react';

function Basics() {
  const [count, setCount] = useState<number>(0);
  // const [name, setName] = useState<string>('');
  const age: number = 34;
  let arr: Array<number> = [11, 22, 33];
  let multiType: number | string | boolean;
  multiType = 20;
  // multiType = [true];
  function add(num1: number, num2: number = 10, num3?: number) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
  }

  interface Person {
    firstName: string;
    lastName: string;
  }

  const fullName = (person: Person) => {
    // setName(person.firstName + ' ' + person.lastName);
    return person.firstName + ' ' + person.lastName;
  };
  let p = {
    firstName: 'Hasan',
    lastName: 'Çelik',
  };

  return (
    <>
      <div className="card">
        <h1>React + TS</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>fullName: {fullName(p)}</div>
        <div>add: {add(3)}</div>
        <div>add: {add(3, 6)}</div>
        <div>add: {add(3, 6, 2)}</div>
        <div>
          {arr.map((m, i) => (
            <span style={{ marginRight: '10px' }} key={i}>
              {m}
            </span>
          ))}
        </div>
        <button onClick={() => arr.push(1)}>push</button>
      </div>
    </>
  );
}

export default Basics;
