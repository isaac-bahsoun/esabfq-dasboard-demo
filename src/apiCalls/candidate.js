import axios from "axios";
import { BASE_API } from "../constants/APIs.js";

export const getAllCandidatesInfo = async () => {
  try {
    const response = await axios.get(`${BASE_API}/candidates/all/info`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
export const getAllCandidatesUnassignedTraining = async () => {
  try {
    const response = await axios.get(`${BASE_API}/candidates/all/unassigned/t`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
export const getAllCandidatesUnassignedExam = async () => {
  try {
    const response = await axios.get(`${BASE_API}/candidates/all/unassigned/e`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
export const getAllCandidatesUnassignedBoth = async () => {
  try {
    const response = await axios.get(
      `${BASE_API}/candidates/all/unassigned/both`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
