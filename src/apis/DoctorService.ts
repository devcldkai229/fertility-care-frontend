import axios from "axios";
import type { Doctor } from "../models/Doctor";
import type { ApiResponse } from "../models/StandardResponse";

export const getDoctors = async (
  Page: number = 1,
  PageSize: number = 100
): Promise<Doctor[]> => {
  const response = await axios.get<ApiResponse<Doctor[]>>(
    "http://localhost:7201/api/v1/doctors",
    {
      params: {
        Page,
        PageSize,
      },
    }
  );

  return response.data.data;
};





