import axios from "axios";

const API_KEY = "37434480-5e27defebd587974c5a89ff23";
const PER_PAGE = 12;

axios.defaults.baseURL = "https://pixabay.com/api";
axios.defaults.params = {
    image_type: "photo",
    orientation: "horizontal",
    per_page: PER_PAGE,
    key: API_KEY,
}

export const getImages = async (category, page) => {
    try {
        const response = await axios.get(`/?q=${category}&page=${page}`, {
            transformResponse: (data) => {
                let res = JSON.parse(data);
                if (res && res.hits && res.hits.length > 0) {
                    return res.hits.map(hit => {
                        return {
                            id: hit.id,
                            small: hit.webformatURL,
                            large: hit.largeImageURL,
                        }
                    })
                }
                return []
            }
        });
        return response.data
    } catch(err) {
        console.warn(err)
        return err.message
    }
}