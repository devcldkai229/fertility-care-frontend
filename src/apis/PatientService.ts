import axios from "axios"


export const getPatientById = async (patientId: string) => {
    const response = await axios.get(`https://localhost:7201/api/v1/patients/${patientId}`);

    return response.data.data;
}