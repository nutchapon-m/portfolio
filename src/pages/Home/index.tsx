import { Stack, Box, Typography, Avatar } from "@mui/material"
import { useState } from "react"
import { Contact } from "./components/Contact"
import { avatarStyle } from "../../styles/css"
import { fontStyle } from "../../styles/css"

const Home = () => {
  const [mouseOver, setMouseOver] = useState(false)

  return (
    <Stack
      marginBlock={5}
      spacing={3}
      alignItems={"center"} 
      width={"100%"}
      useFlexGap
      overflow={"none"}
     >
      <Box>
        <Avatar 
          src={mouseOver?"171533.jpg":"my_pic.PNG"} 
          sx={avatarStyle}
          onMouseOver={()=>{setMouseOver(true)}}
          onMouseLeave={()=>{setMouseOver(false)}}
        />
      </Box>
      
      <Stack spacing={2} textAlign={"center"} maxWidth={300}>
        <Typography variant="h6" sx={fontStyle}>
          Hi, I am Nut.
        </Typography>
        <Typography variant="h6" sx={fontStyle}>
          Backend Developer
        </Typography>
        <Typography variant="h6" sx={{...fontStyle, fontSize:18, textShadow: "none"}}>
        “Clean, simple, & high-quality solution
         always sparks joy in my blood.”
        </Typography>
      </Stack>
      <Contact/>
    </Stack>

  )
}

export default Home