import axios from "axios";
import { BASE_API } from "../constants/APIs.js";

export async function createExam(data) {
  const response = await axios.post(`${BASE_API}/exams/create/`, data);
  return response;
}
