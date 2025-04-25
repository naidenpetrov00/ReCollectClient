import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export const openWindowAction = (state: any) => {
  console.log("Open window");
};
export const closeWindowAction = (state: any) => {
  console.log("Close window");
};

const increment: CaseReducer<number, PayloadAction<number>> = (state, action) =>
  state + action.payload;
