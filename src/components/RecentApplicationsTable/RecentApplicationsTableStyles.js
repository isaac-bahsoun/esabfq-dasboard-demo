import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #0077cc;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: scroll;
  margin-top: 2rem;
  max-width: calc(100vw - 14rem);
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 1rem;
    background-color: #fff;
    color: #212529;
    font-size: 0.9rem;
    line-height: 1.6;
    font-weight: 400;
    text-align: left;

    th,
    td {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }

    th {
      font-weight: 500;
      background-color: #f8f9fa;
    }

    tbody tr:nth-of-type(even) {
      background-color: #f2f2f2;
    }

    tbody tr:hover {
      background-color: #e9ecef;
    }
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 1rem;

    input[type="checkbox"] {
      cursor: pointer;
      appearance: none;
      width: 1.2rem;
      height: 1.2rem;
      border: 2px solid #aaa;
      border-radius: 0.25rem;
      margin-right: 0.5rem;
      transition: all 0.2s ease;

      &:checked {
        background-color: #2196f3;
        border-color: #2196f3;

        &:before {
          content: "✔";
          display: block;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
`;
export const ResetButton = styled.button`
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  padding: 8px 16px;

  &:hover {
    background-color: #bbb;
  }
`;

export const SelectHeader = styled.h3`
  color: #036280;
  margin-bottom: 1rem;
`;
export const DateRangeH = styled.h5`
  color: #378ba4;
  margin-bottom: 00.5rem;
`;

export const DateInput = styled.input`
  background-color: #f7f7f7;
  border: none;
  border-radius: 4px;
  color: #444444;
  font-size: 16px;
  height: 40px;
  padding: 8px;
  width: 100%;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px #999999;
  }
`;

export const TimeRangeCont = styled.div`
  display: flex;
  width: 100%;
`;
export const TimeRangeControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5rem;
`;
