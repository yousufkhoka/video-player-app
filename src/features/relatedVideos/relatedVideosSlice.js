import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./ralatedVideosAPI";
const initialState = {
    relatedVideos: [],
    isLoading:false,
    isError : false,
    error:''
}
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchrelatedVideos',
async ({tags,id}) => {
     const relatedVideos = await getRelatedVideos({tags,id})
     return relatedVideos
})

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers:(builder) =>{
                   builder
                   .addCase(fetchRelatedVideos.pending,(state) => {
                       state.isLoading = true;
                       state.isError = false;
                   })
                   .addCase(fetchRelatedVideos.fulfilled,(state ,action) => {
                    state.isLoading = false;
                    state.relatedVideos = action.payload;
                })
                  .addCase(fetchRelatedVideos.rejected,(state ,action) => {
                    state.isLoading = false;
                    state.relatedVideos = [];
                    state.isError = true;
                    state.error = action.error?.message

                })
     }
    
})

export default relatedVideosSlice.reducer