import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { menu } from '../seeds/data';

export default function ListMenu() {
  return (
    <List
      sx={{ 
        width: '100%', 
        bgcolor: 'rgb(27 27 40)',
        paddingTop: "40px",
      }}
      component="nav"
    >
      {
        menu.map((item, index) => (
        <ListItemButton 
          key={index} 
          role='a' 
          href={item.link}
          sx={{textAlign: "center"}}
        >
          <ListItemText 
            primary={item.label} 
            sx={{
              color:"#f3f3f5",
              "& .MuiTypography-root": {
                fontWeight: 600,
                fontSize: 18
              }
            }}
          />
        </ListItemButton>
        ))
      }
    </List>
  );
}