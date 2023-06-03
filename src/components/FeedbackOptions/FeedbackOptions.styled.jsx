import styled from 'styled-components';

export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14px;

  border: none;
  border-radius: 5px;

  background-color: #c6cfff;
  color: #121d58;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #a6b3ff;
    color: #151313;
  }
`;
