
const BASE_URL = "https://api.tvmaze.com";
export const getAllShows = async () => {
    const response = await fetch (`${BASE_URL}/shows`);
    if (!response.ok){
        throw new Error(" Failed to Fatch showes");
    }
    return response.json();
};


export const searchShows = async (query) => {
const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);

if (!response.ok){
    throw new Error("Faild to serch shows");
}


const data = await response.json();
return data.map((item) => item.show);
};