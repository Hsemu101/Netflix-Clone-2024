const API_k = process.env.REACT_APP_API_K;

const requests = {
    fetchTopRated: `/tv/top_rated?api_key=${API_k}&language=en-US`,
    fetchNetflixOriginals: `/trending/movie/day?api_key=${API_k}&language=en-US`,
    fetchAction:    `/discover/movie?api_key=${API_k}&with_genres=28`,
    fetchAdventure: `/discover/movie?api_key=${API_k}&with_genres=12`,
    fetchAnimation: `/discover/movie?api_key=${API_k}&with_genres=16`,
    fetchComedy: `/discover/movie?api_key=${API_k}&with_genres=35`,
    fetchCrime: `/discover/movie?api_key=${API_k}&with_genres=80`,
    fetchDocumentary: `/discover/movie?api_key=${API_k}&with_genres=99`,
    fetchDrama: `/discover/movie?api_key=${API_k}&with_genres=18`,
    fetchFantasy: `/discover/movie?api_key=${API_k}&with_genres=14`,
    fetchRomance: `/discover/movie?api_key=${API_k}&with_genres=10749`,
    fetchHorror: `/discover/movie?api_key=${API_k}&with_genres=27`,
    fetchScientificFiction: `/discover/movie?api_key=${API_k}&with_genres=878`,
    fetchHistory: `/discover/movie?api_key=${API_k}&with_genres=36`,
};


export default requests




