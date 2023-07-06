import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 15px;
  border-radius: 30px;
  background: black;
  color: white;
  border: 1px solid transparent;
  width: 200px;
`;

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Wrapper>
        <StyledButton onClick={increment}>Increment</StyledButton>
        <StyledButton onClick={decrement}>Decrement</StyledButton>
      </Wrapper>
    </div>
  );
};

export default Counter;