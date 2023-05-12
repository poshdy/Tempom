import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


 
export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "charts/track" }),
    getAllCharts: builder.query({ query: ({listId}) => `charts/track?locale=en-US&listId=${listId}` } ),
    
    getAllChartsListId : builder.query({query:()=> 'charts/list'}, ),

    getArtistSummary: builder.query({
      query: ({ artistId }) => `artists/get-summary?id=${artistId}&l=en-US`,
    }),
    getAlbumDetails: builder.query({
      query: ({ albumid }) => `albums/get-details?id=${albumid}&l=en-US`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `songs/get-details?key=${songid}`,
    }),
    getRelatedSong: builder.query({
      query: ({ songid }) => `songs/list-recommendations?key=${songid}`,
    }),
    getSearchTerm: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}`,
    }),
  }),
  
});
export const {
  useGetTopChartsQuery,
  useGetAllChartsListIdQuery,
  useGetAllChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongQuery,
  useGetAlbumDetailsQuery,
  useGetSearchTermQuery,
  useGetArtistSummaryQuery,

} = shazamApi;
