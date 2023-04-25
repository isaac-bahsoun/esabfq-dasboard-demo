import axios from "axios";
import { BASE_API } from "../constants/APIs.js";

export async function createTraining(data) {
  const response = await axios.post(`${BASE_API}/trainings/create/`, data);
  return response;
}
