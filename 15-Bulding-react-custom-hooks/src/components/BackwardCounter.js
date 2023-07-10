import Card from './Card';
import useCounter from '../Hooks/use-Counter';
const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
