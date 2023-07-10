import Card from './Card';
import useCounter from '../Hooks/use-Counter';
const ForwardCounter = () => {
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
