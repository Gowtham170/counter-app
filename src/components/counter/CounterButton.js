import './counter.css';

const CounterButton = ({ by, incrementCount, decrementCount }) => {

    return (
      <div>
        <button className='btn' onClick={() => incrementCount(by)}>+{by}</button>
        <button className='btn' onClick={() => decrementCount(by)}>-{by}</button>
      </div>
    )
  }
  
  export default CounterButton;