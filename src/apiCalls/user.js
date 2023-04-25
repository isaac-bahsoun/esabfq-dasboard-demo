import axios from "axios";
import { BASE_API } from "../constants/APIs.js";
export async function getAllInstructors() {
  try {
    const response = await axios.get(`${BASE_API}/users/all/instructors`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
