import { Box, Container } from "@mui/material"
import SkillsAccordion from "./components/SkillAccordion"

const Skill = () => {
  return (
    <Box sx={{width: "100%", bgcolor: "#f3f3f5"}}>
      <Container sx={{
        display: "flex",
        justifyContent: "center",
        paddingBlock:2
      }}>
        <SkillsAccordion/>
      </Container>
    </Box>

  )
}

export default Skill