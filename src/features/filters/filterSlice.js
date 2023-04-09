import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags:[],
    search:''
}


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        tagSelected: (state, action) => {
            state.tags.push(action.payload)
        },
        tagRemoved: (state, action) => {
              const existingTag = state.tags.indexOf(action.payload)
              if(existingTag !== -1) {
                  state.tags.splice(existingTag, 1)
              }
        },
        searchAdded: (state, action) => {
                state.search = action.payload
            }
      },
    })

export default filterSlice.reducer
export const {searchAdded ,tagRemoved , tagSelected} = filterSlice.actions