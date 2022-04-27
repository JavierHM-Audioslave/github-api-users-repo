import axios from "axios";



export const consumeAPI = async url => {
    try {
        const response = await axios.get(url, {
            headers: { "Authorization": "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" }
        });
        return response;
    } catch(error) {
        throw new Error(error);
    }
}