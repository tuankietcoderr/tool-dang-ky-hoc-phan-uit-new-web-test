import { IRowOnlyId } from "@/interface/row";
import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

interface MonHocState {
  monHocDaChon: IRowOnlyId[];
}

const initialState: MonHocState = {
  monHocDaChon: [],
};

export const monHocSlice = createSlice({
  name: "monHoc",
  initialState,
  reducers: {
    chonMonHoc: (state, { payload: { monHoc } }) => {
      state.monHocDaChon.push(monHoc);
    },
    huyChonMonHoc: (state, { payload: { id } }) => {
      state.monHocDaChon = state.monHocDaChon.filter((mh) => mh.id !== id);
    },
  },
});

export default monHocSlice.reducer;
export const { chonMonHoc, huyChonMonHoc } = monHocSlice.actions;
export const monHocSelector = (state: RootState) => state.monHoc;
