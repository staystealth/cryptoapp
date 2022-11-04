import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4ecbdfb0ddmsh9bc224ea9619740p1c4849jsn62c1390d8ace',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews : builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});
export const {useGetCryptoNewsQuery} = cryptoNewsApi;



