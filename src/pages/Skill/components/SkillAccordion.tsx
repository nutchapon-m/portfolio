import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import { CardMedia, Typography, Stack, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { skillSet } from '../../../seeds/data';

export default function SkillsAccordion() {
  return (
    <div>
      {
        skillSet.map((item, index) => (
        <Accordion 
          key={index} 
          defaultExpanded
          sx={{borderRadius: 2}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={item.header}
          >
            <Typography fontWeight={600}>
              {item.header}
            </Typography>
          </AccordionSummary>
          <Stack 
            direction={"row"} 
            spacing={3} 
            alignItems={"center"}
            paddingBlock={2}
            paddingInline={4}
          >
            {item.skills.map((skill, subIndex) => (
              <AccordionActions key={subIndex}>
                <Link component={"a"} href={skill.link} >
                  <CardMedia
                    component={"img"}
                    src={skill.img}
                    width={60}
                    sx={{objectFit:"cover"}}
                  />
                </Link>
              </AccordionActions>
            ))}
          </Stack>
        </Accordion>
        ))
      }
    </div>
  );
}