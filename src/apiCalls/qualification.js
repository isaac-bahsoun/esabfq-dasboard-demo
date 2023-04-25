import axios from "axios";
import { BASE_API } from "../constants/APIs.js";
export async function getAllQualifications() {
  try {
    const response = await axios.get(`${BASE_API}/qualifications/all/`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
export async function createQualification({ name, abv, offered_by }) {
  const response = await axios.post(`${BASE_API}/qualifications/create/`, {
    name,
    abv,
    offered_by,
  });
  return response;
}
export async function updateQualification(id, { name, abv, offered_by }) {
  const response = await axios.put(`${BASE_API}/qualifications/update/${id}`, {
    name,
    abv,
    offered_by,
  });
  return response;
}
export async function deleteQualification(id) {
  const response = await axios.delete(
    `${BASE_API}/qualifications/delete/${id}`
  );
  return response;
}
