import Header from "./components/Header"
import { Box, CssBaseline, Stack, Typography, Drawer } from "@mui/material"
import { useState } from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import {menu} from "./seeds/data";
import { fontStyle, navBarStyle } from "./styles/css";

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
          <Stack 
            display={open?"flex": "none"}
            direction={"column"}
            sx={{paddingTop: "40px"}}
            >
            <Stack
              spacing={5}
              useFlexGap
              sx={{
                ...navBarStyle, 
                borderBottom: 0,
                paddingBlock: 4,
                bgcolor: "rgb(27 27 39)"
              }}
            >
              {
                menu.map((item, index) => (
                  <Typography
                    key={index} 
                    component={"a"} 
                    href={item.link} 
                    sx={{
                      ...fontStyle,
                      ":hover": {
                        textShadow: "0 0 5px #00e5ff, 0 0 10px #00e5ff, 0 0 15px #00e5ff, 0 0 20px #00e5ff"
                      }  
                    }}>
                    {item.label}
                  </Typography>
                ))
              }
            </Stack>
          </Stack>
        </Drawer>
        <Box
          id="detail"
          display={"flex"}
          sx={{paddingTop: "40px"}}

        >
          <Outlet/>
        </Box>
        {/* menu */}
      </Box>
    )
  }

}

export default App
