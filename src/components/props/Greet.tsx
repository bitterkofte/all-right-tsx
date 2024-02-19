type GreetProps = {
  name: string;
  msgCount: number;
  // msgs: Array<object>;
  msgs: {
    id: number;
    msg: string;
  }[];
};

export const Greet = ({ name, msgCount, msgs }: GreetProps) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>{msgCount}</p>
      {msgs.map((m) => (
        <span key={m.id}>{m.msg} - </span>
      ))}
    </div>
  );
};
