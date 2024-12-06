import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { expSteps } from '../../../seeds/data';

const mapIcon: Map<string, JSX.Element> = new Map([
  ["work", <WorkIcon/>],
  ["education", <SchoolIcon/>],
  ["born", <MonitorHeartIcon/>],
])

export default function VerticalLinearStepper() {
  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper orientation="vertical">
        {expSteps.map((item, index) => (
          <Step key={index} active>
            <StepLabel
              icon={
                mapIcon.get(item.type)
              }
            >
              <Typography
                variant='h6'
                fontWeight={600}
              >
                {item.company}
              </Typography>
            </StepLabel>
            <StepContent>
              <Stack
                component={Paper}
                padding={2}
                spacing={1}
                useFlexGap
              >
                <Stack 
                  direction={{xs:"column", sm:"row"}} 
                  alignItems={{xs:"none", sm:"center"}}
                  justifyContent={"space-between"}
                >
                  <Typography fontStyle={"italic"} fontSize={14}>{item.position}</Typography>
                </Stack>
                {
                  item.type == "education"?
                  "":
                  item.description.map((text, descIndex) => (
                    <Typography key={descIndex} fontSize={14} >{text}</Typography>
                  ))
                }
                <Typography fontSize={12}>{item.period}</Typography>
              </Stack>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}