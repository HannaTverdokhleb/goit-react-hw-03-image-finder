import axios from "axios";

const API_KEY = "37434480-5e27defebd587974c5a89ff23";
export const PER_PAGE = 12;

axios.defaults.baseURL = "https://pixabay.com/api";
axios.defaults.params = {
    image_type: "photo",
    orientation: "horizontal",
    per_page: PER_PAGE,
    key: API_KEY,
}

export const getImages = async (category, page) => {
    const { data } = await axios.get(`/?q=${category}&page=${page}`, {
        transformResponse: (data) => {
            let res = JSON.parse(data);
            return res.hits.map(hit => {
                return {
                    id: hit.id,
                    small: hit.webformatURL,
                    large: hit.largeImageURL,
                }
            })
        }
    });
    return data
}