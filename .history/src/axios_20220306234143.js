import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=9c0726ab8c2c2ed1fd5f27622fdd5e3f",
});


export default instance;