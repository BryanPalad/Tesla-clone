import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [
        {
            carname: "Model S",
            link: '/models',
          },
          {
              carname: "Model 3",
              link: '/model3',
            },
            {
              carname: "Model X",
              link: '/modelx',
            },
            {
              carname: "Model Y",
              link: '/modely',
            },
            {
              carname: "Solar Roof",
              link: '/solarroofs',
            },
            {
              carname: "Solar Panels",
              link: '/solarpanels',
            },
        ],
    menu: [
        "Existing Inventory",
        "Used Inventory",
        "Trade-In",
        "Test Drive",
        "Insurance",
        "Cybertruck",
        "Roadster",
        "Semi",
        "Charging",
        "Powerwall",
        "Commercial Energy",
        "Utilities",
        "Find us",
        "Support",
        "Investor Relations",
         ],
    }


const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars
export const selectMenu = state => state.car.menu
export default carSlice.reducer