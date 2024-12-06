import { 
  AppBar,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from "react-router-dom";
import {menu} from "../seeds/data";
import { FC } from "react";
import { fontStyle} from "../styles/css";

interface HeaderProps {
  setMenuAction: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: FC<HeaderProps> = ({ setMenuAction }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const location = useLocation();
  const handleMenuButton = () => {
    setMenuAction((prev) => !prev)
  }

  if (matches) {
    setMenuAction(false)
  }

  return (
    <AppBar
      component={"nav"}
      elevation={0}
      position="fixed"
      sx={{
        height: "40px",
        justifyContent:'center',
        bgcolor:"rgb(45, 45, 60)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        "& .MuiToolbar-root": {
          justifyContent: {xs: "end", sm:"center"}
        }
      }}
    >
      <Toolbar>
        <Stack
          display={{xs: "none", sm: "flex"}}
          direction={"row"}
          justifyContent={"center"}
          spacing={10}
          useFlexGap
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
        <Stack
          display={{xs: "flex", sm: "none"}}
          paddingInline={2}
          sx={{
            borderColor: location.pathname == "/home"?"#f3f3f5":"rgb(27 27 39)",
          }}
        >
          <IconButton
            sx={{
              color: "#f5f5f5"
            }}
            onClick={handleMenuButton}
            disableFocusRipple
            disableRipple
            disableTouchRipple
          >
            <MenuIcon sx={{fontSize: 28}}/>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header