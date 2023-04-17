import axios from "axios";

export function searchVideos(query) {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            q: query,
            part: 'snippet,id',
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': '117789552bmshc4772dcaa7dc797p1365ddjsn1f07cab9e560',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    return axios.request(options)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}
