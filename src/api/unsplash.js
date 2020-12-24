//This file is for the configuration needed for using the unsplash API (authorization).

import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID OUlGIAH_f7QKYx3SR1nbCRN_BPxBA8rrqtHmY97miik"
    }
});
