import Header from "./components/Header"
import { Box, CssBaseline, Drawer } from "@mui/material"
import { useState } from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import ListMenu from "./components/ListmMenu"

function App() {
  const location = useLocation()
  const [open, seOpen] = useState(false)

  if (location.pathname == '/') {
    return (<Navigate to={"/home"} replace/>)
  } else {
    return (
      <Box 
        className="layout"
        height={"100vh"}
        sx={{
          background: location.pathname == '/home' ? "rgb(27 27 39)": "#f3f3f5",
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '2px', // Set the width of the scrollbar
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f0f0f0', // Track color
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888', // Thumb color
            borderRadius: '4px', // Rounded corners
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555', // Thumb color on hover
          },
        }}
      >
        <CssBaseline/>
        <Header
          setMenuAction={seOpen}
        />
        <Drawer 
          anchor="top"
          open={open}
        >
          <ListMenu/>
        </Drawer>
        <Box
          id="detail"
          display={"flex"}
          sx={{paddingTop: "40px"}}

        >
          <Outlet/>
        </Box>
      </Box>
    )
  }

}

export default App
