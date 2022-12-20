import { useState } from 'react';
import './counter.css';
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';

const Counter = () => {

  const [count, setCount] = useState(0);

  const incrementCount = (by) => {
    setCount(count+by);
  }

  const decrementCount = (by) => {
    setCount(count-by);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <>
      <span className='count'>{count}</span>
      <CounterButton by={1} incrementCount={incrementCount} decrementCount={decrementCount}/>
      <CounterButton by={2} incrementCount={incrementCount} decrementCount={decrementCount}/>
      <CounterButton by={5} incrementCount={incrementCount} decrementCount={decrementCount}/>
      <ResetButton resetCount={resetCount}/>
    </>
  );
}

export default Counter;
