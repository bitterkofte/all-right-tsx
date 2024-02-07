type WrapperProps = {
  children: string;
};
export const Wrapper = ({ children }: WrapperProps) => {
  return <p>{children}</p>;
};
