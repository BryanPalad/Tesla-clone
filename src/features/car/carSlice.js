import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S","Model Y", "Model 3", "Model X","Solar Panels", "Solar Roofs"],
    menu: ["Model S","Model 3", "Model X", "Model Y","Solar Roof","Solar Panles",
"Existing Inventory", "Used Inventory","Trade-in","Test Drive","Powerwall", "Commercial Energy",
"Utilities","Charging","Find us", "Support", "Investor Relations","Shop","Account",
"More"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars
export const selectMenu = state => state.car.menu

export default carSlice.reducer