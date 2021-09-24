import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 200px;
  padding: 10px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  max-width: 100%;
  padding: 10px 15px 10px 25px;
  margin: 15px 10px 10px;
  grid-column: 1 / 3;
  font-size: 16px;
  border: 1px solid #75aabb;
  border-radius: 5px;
  outline: none;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    border: 1px solid #3578d0;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
`;

export const StyledSelect = styled.select`
  display: inline-block;
  padding: 5px 20px 5px 10px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #444;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;
