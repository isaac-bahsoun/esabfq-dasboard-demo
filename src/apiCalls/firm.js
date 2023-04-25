import axios from "axios";
import { BASE_API } from "../constants/APIs.js";
export async function getAllFirms() {
  try {
    const response = await axios.get(`${BASE_API}/firms/all/`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
export async function createFirm({ firmName, firmAbv }) {
  const response = await axios.post(`${BASE_API}/firms/create/`, {
    firmAbv,
    firmName,
  });
  return response;
}
export async function updateFirm(id, { firmName, firmAbv }) {
  const response = await axios.put(`${BASE_API}/firms/update/${id}`, {
    firmAbv,
    firmName,
  });
  return response;
}
export async function deleteFirm(id) {
  const response = await axios.delete(`${BASE_API}/firms/delete/${id}`);
  return response;
}
