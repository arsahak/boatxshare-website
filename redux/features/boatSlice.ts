import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoatListState {
  loading: boolean;
  boatListData: any[];
}

const initialState: BoatListState = {
  loading: false,
  boatListData: [],
};

const boatListSlice = createSlice({
  name: "boatList",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setBoatListData: (state, action: PayloadAction<any[]>) => {
      state.boatListData = action.payload;
    },
  },
});

export const { setLoading, setBoatListData } = boatListSlice.actions;
export default boatListSlice.reducer;
