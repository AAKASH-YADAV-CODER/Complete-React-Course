import axios from "axios";
export async function fetchEvents() {
  try {
    const response = await axios.get("http://localhost:3000/events");

    if (response.status !== 200) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = response.data;
      throw error;
    }

    return response.data.events;
  } catch (error) {
    console.error("Error occurs", error);
    throw error;
  }
}
