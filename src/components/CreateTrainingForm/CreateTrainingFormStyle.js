import styled from "styled-components";

export const WrapperDiv = styled.div`
  width: 100vw;
  justify-content: center;
`;
export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Shape = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30rem;

  margin: 2rem;
`;
export const OptionT = styled.select`
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  margin-bottom: 0.5rem;
  border-color: #ffe08a;
  background-color: #e8ede7;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  border: none;
  padding: 0.5rem;
  &:focus {
    outline: none;
    border-color: red;
    box-shadow: 0 0 3px red;
    -moz-box-shadow: 0 0 3px red;
    -webkit-box-shadow: 0 0 3px blue;
  }
`;
export const InputT = styled.input`
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  margin-bottom: 0.5rem;
  border-color: #e8ede7;
  background-color: #e8ede7;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  border: none;
  padding: 0.5rem;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 3px blue;
    -moz-box-shadow: 0 0 3px blue;
    -webkit-box-shadow: 0 0 3px blue;
  }
`;
export const DivDate = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 2rem;
`;
export const DivTime = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;
export const StyleButton = styled.button`
  background-color: #378ba4;
  border-color: transparent;
  color: #fff;
  margin-top: 2rem;

  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
`;
export const InputD = styled.input`
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  width: 14rem;
  margin-bottom: 0.5rem;
  border-color: #e8ede7;
  background-color: #e8ede7;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  border: none;
  padding: 0.5rem;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 3px blue;
    -moz-box-shadow: 0 0 3px blue;
    -webkit-box-shadow: 0 0 3px blue;
  }
`;
export const DivTimeEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const LabelT = styled.label`
  margin-bottom: 0.25rem;
`;
