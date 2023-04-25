import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 2rem;
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

export const FilterLabel = styled.label`
  font-size: 1rem;
  color: #036280;
  margin-bottom: 00.5rem;
`;
