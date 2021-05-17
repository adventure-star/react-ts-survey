const API_URL = "http://localhost:4000/api";

const gameList = async () => {
    const response = await fetch(`${API_URL}/`);
    if(!response.ok){
        throw new Error("Something went wrong.");
    }
    return response.json();
};

export { gameList };
