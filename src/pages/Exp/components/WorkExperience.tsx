import { Box, Stepper, Step, StepLabel, StepContent, Typography, Paper } from "@mui/material";

const experiences = [
  {
    company: "Green Earth Inc.",
    role: "Environmental Analyst",
    duration: "Jan 2020 - Dec 2022",
    description: "Analyzed environmental data to develop sustainable solutions.",
  },
  {
    company: "Eco Solutions",
    role: "Project Manager",
    duration: "Jan 2018 - Dec 2019",
    description: "Managed renewable energy projects and led cross-functional teams.",
  },
  {
    company: "Planet Protectors",
    role: "Research Assistant",
    duration: "Jan 2015 - Dec 2017",
    description: "Conducted research on waste reduction and pollution prevention strategies.",
  },
];

const WorkExperienceStepper = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Stepper orientation="vertical">
        {experiences.map((exp, index) => (
          <Step key={index} active>
            <StepLabel>
              <Typography variant="h6">{exp.company}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {exp.role}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2" color="text.secondary">
                {exp.duration}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {exp.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Paper square elevation={3} sx={{ p: 2, mt: 2 }}>
        <Typography variant="h6" align="center">
          More Experiences to Explore!
        </Typography>
      </Paper>
    </Box>
  );
};

export default WorkExperienceStepper;
