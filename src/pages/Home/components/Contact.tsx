import { Stack, IconButton } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { contacts } from "../../../seeds/data"
import { useLocation } from "react-router-dom";

export const Contact = () => {
  const location = useLocation();
  const mapIcon: Map<string, JSX.Element> = new Map([
    ["email", <MailOutlineIcon sx={{color: "#f5f5f5"}}/>],
    ["github", <GitHubIcon sx={{color: "#f5f5f5"}}/>],
    ["linkedin", <LinkedInIcon sx={{color: "#f5f5f5"}}/>],
  ])

  return (
    <Stack 
      position={"fixed"}
      top={"60%"}
      paddingRight={5}
      spacing={2} 
      alignSelf={"end"}
      sx={{ position: 'absolute', bottom: 40, right: 16 }}>
      {
        contacts.map((item, index) => (
          <IconButton 
            role="a"
            title={item.label}
            key={index}
            href={item.link}
            sx={{
              bgcolor: location.pathname != "/home"? "rgb(27 27 39)": "",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}
            >
            {mapIcon.get(item.label)}
          </IconButton>
        ))
      }
    </Stack>
  )
}