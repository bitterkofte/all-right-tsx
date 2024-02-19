type StatusProps = {
  // status: string;
  status: 'loading' | 'success' | 'error';
  info?: string
};

export const Status = ({ status, info = "OK" }: StatusProps) => {
  let message;
  if (status === 'loading') message = 'Loading...';
  else if (status === 'success') message = 'Data fetched successfully';
  else if (status === 'error') message = 'Error fetching data';
  return (
    <div>
      <h2>Status - {message}</h2>
      <p>{ info }</p>
    </div>
  );
};
