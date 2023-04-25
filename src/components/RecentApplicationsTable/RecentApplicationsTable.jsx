import React, { useState, useEffect } from "react";
import { getAllApplicationsInfo } from "../../apiCalls/application.js";
import LoadingScreen from "../../elements/Loading.jsx";
import { TableWrapper } from "./RecentApplicationsTableStyles.js";

export default function RecentApplicationsTable() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

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

  return (
    <>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <>
          {applications.length > 0 ? (
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Full Name</th>
                    <th>Mother Full Name</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Place of Birth</th>
                    <th>Nationality</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Has Special Needs</th>
                    <th>Special Needs</th>
                    <th>Address</th>
                    <th>Firm</th>
                    <th>Branch</th>
                    <th>Position</th>
                    <th>Office Phone</th>
                    <th>Office Fax</th>
                    <th>Degree</th>
                    <th>Major</th>
                    <th>University</th>
                    <th>Marital Status</th>
                    <th>Spouse Full Name</th>
                    <th>Qualifications</th>
                    <th>Applied At</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.application_id}>
                    <td>Type</td>
                    <td>Full Name</td>
                    <td>Mother Full Name</td>
                    <td>Gender</td>
                    <td>Date of Birth</td>
                    <td>Place of Birth</td>
                    <td>Nationality</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Has Special Needs</td>
                    <td>Special Needs</td>
                    <td>Address</td>
                    <td>Firm</td>
                    <td>Branch</td>
                    <td>Position</td>
                    <td>Office Phone</td>
                    <td>Office Fax</td>
                    <td>Degree</td>
                    <td>Major</td>
                    <td>University</td>
                    <td>Marital Status</td>
                    <td>Spouse Full Name</td>
                    <td>Qualifications</td>
                    <td>Applied At</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          ) : (<h4 style={{ color: "red", marginTop: "1rem"}}>0 Applications Found</h4>)}</>)}</>)
}
