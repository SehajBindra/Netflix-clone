import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themovieb.org/3"
})


export default instance;