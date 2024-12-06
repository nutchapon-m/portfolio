import { Box, Container } from "@mui/material"
import VerticalLinearStepper from "./components/StepExp"

const Experience = () => {
  return (
    <Box sx={{width: "100%", bgcolor: "#f3f3f5"}}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBlock: 2,
        }}
      >
        <VerticalLinearStepper/>
      </Container>
    </Box>
  )
}

export default Experience