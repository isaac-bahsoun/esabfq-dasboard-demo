import React, { useState, useEffect } from "react";
import { getAllApplicationsInfo } from "../../apiCalls/application.js";
import LoadingScreen from "../../elements/Loading.jsx";
import { CheckboxWrapper, ResetButton, SelectHeader, StyledCheckbox, TableWrapper } from "./RecentApplicationsTableStyles.js";

export default function RecentApplicationsTable() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedColumns, setSelectedColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllApplicationsInfo();
        setApplications(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleColumnChange = (event) => {
    const columnName = event.target.name;
    if (event.target.checked) {
      setSelectedColumns((prevSelectedColumns) => [
        ...prevSelectedColumns,
        columnName,
      ]);
    } else {
      setSelectedColumns((prevSelectedColumns) =>
        prevSelectedColumns.filter((col) => col !== columnName)
      );
    }
  };
  const handleResetClick = () => {
    setSelectedColumns([]);
  };

  const tableHeader = (
    <thead>
      <tr>
        {selectedColumns.map((colName) => (
          <th key={colName}>{colName}</th>
        ))}
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {applications.map((app) => (
        <tr key={app.application_id}>
          {selectedColumns.map((colName) => (
            <td key={`${app.application_id}-${colName}`}>
              {colName === 'created_at' || colName === 'date_of_birth' ? new Date(app[colName]).toLocaleDateString('en-GB') : app[colName]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  const table = (
    <TableWrapper>
      <table>
        {tableHeader}
        {tableBody}
      </table>
    </TableWrapper>
  );

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {applications.length > 0 ? (
            <>
  <SelectHeader>
    Select Fields:
  </SelectHeader>
  <CheckboxWrapper>
  {Object.keys(applications[0]).map((columnName) => (
    <label key={columnName}>
      <input
        type="checkbox"
        name={columnName}
        checked={selectedColumns.includes(columnName)}
        onChange={handleColumnChange}
      />
      {columnName}
    </label>
  ))}
  <ResetButton onClick={handleResetClick}>Reset</ResetButton>
</CheckboxWrapper>
              {table}
            </>
          ) : (
            <h4 style={{ color: "red", marginTop: "1rem" }}>
              0 Applications Found
            </h4>
          )}
        </>
      )}
    </>
  );
}
