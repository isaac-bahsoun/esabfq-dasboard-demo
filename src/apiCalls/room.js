import axios from "axios";
import { BASE_API } from "../constants/APIs.js";
export async function getAllRooms() {
  try {
    const response = await axios.get(`${BASE_API}/rooms/all`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
export async function createRoom({ room }) {
  const response = await axios.post(`${BASE_API}/rooms/create/`, {
    room,
  });
  return response;
}
export async function updateRoom(id, { room }) {
  const response = await axios.put(`${BASE_API}/rooms/update/${id}`, {
    room,
  });
  return response;
}
export async function deleteRoom(id) {
  const response = await axios.delete(`${BASE_API}/rooms/delete/${id}`);
  return response;
}

// export async function getRoomById() {
//   try {
//     const response = await axios.get(`${BASE_API}/`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error(error.message);
//   }
// }

// export async function CreateRoom() {
//   try {
//     const response = await axios.post(`${BASE_API}/`, { room });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error(error.message);
//   }
// }
// export async function SetRoom() {
//   try {
//     const response = await axios.put(`${BASE_API}/`, { room });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error(error.message);
//   }
// }
// export async function deleteRoom() {
//   try {
//     const response = await axios.delete(`${BASE_API}/`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error(error.message);
//   }
// }
