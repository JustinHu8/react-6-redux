import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../store/store';
import { increment, decrement, incrementByAmount } from './../../features/counter/counterSlice';

const Counter: React.FC = () => {
  // Access state and dispatch actions
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;