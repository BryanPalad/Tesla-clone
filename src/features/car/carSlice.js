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
            {
              menuname: "Model S",
              menulink: '/models',
            },
            {
              menuname: "Model 3",
              menulink: '/model3',
            },
            {
              menuname: "Model X",
              menulink: '/modelx',
            },
            {
              menuname: "Model Y",
              menulink: '/modely',
            },
            {
              menuname: "Solar Roof",
              menulink: '/solarroofs',
            },
            {
              menuname: "Solar Panels",
              menulink: '/solarpanels',
            },
            {
              menuname: "Roadster",
              menulink: '/',
            },
            {
              menuname: "Semi",
              menulink: '/',
            },
            {
              menuname: "Charging",
              menulink: '/',
            },
            {
              menuname: "Powerwall",
              menulink: '/',
            },
            {
              menuname: "Commercial Energy",
              menulink: '/',
            },
            {
              menuname: "Utilities",
              menulink: '/',
            },
            {
              menuname: "Find us",
              menulink: '/',
            },
            {
              menuname: "Support",
              menulink: '/',
            },
            {
              menuname: "Investor Relations",
              menulink: '/',
            },
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