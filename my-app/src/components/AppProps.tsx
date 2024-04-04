type AppProps = {
    message: string;
}

const AppPropsByType = ({ message }: AppProps) => <div>{message}</div>;

export default AppPropsByType

/*
possible ways 
1. with return type mentioned
const AppPropsByType = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;

2. 
const AppPropsByType = ({ message }: { message: string }) => <div>{message}</div>

3.
const AppPropsByType: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);

4.
const AppPropsByType: React.FC<{ message: string }> = ({ message }) => {
  return <div>{message}</div>;
}

*/