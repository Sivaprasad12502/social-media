import axios from "axios";
export const makeRequest =axios.create({
    baseURL:"http://localhost:800/api/",
    withCredentials:true,
})