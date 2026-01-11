import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { FaGraduationCap, FaCode } from "react-icons/fa";
import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <Box py={10} id="about">
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={6}
          sx={{
            background: "linear-gradient(to right, #22d3ee, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </Typography>

        <Stack spacing={4}>
          {/* Education Card */}
          <Paper
            className="glow-card"
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: "rgba(15, 23, 42, 0.6)",
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
              <Box color="#22d3ee">
                <FaGraduationCap size={26} />
              </Box>
              <Typography variant="h6" fontWeight="bold">
                Education
              </Typography>
            </Stack>

            <Typography fontWeight="bold" fontSize="1.05rem">
              B.Tech - Metallurgical Engineering
            </Typography>
            <Typography color="gray">
              Indian Institute of Technology (BHU), Varanasi
            </Typography>
            <Typography color="#22d3ee" mt={0.5}>
              CGPA: 8.35 | 2021 – 2025
            </Typography>

            <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

            <Stack spacing={1}>
              <Typography color="gray">
                • Senior Secondary (MP Board):{" "}
                <span style={{ color: "#22d3ee" }}>90.20%</span>
              </Typography>
              <Typography color="gray">
                • Secondary (CBSE Board):{" "}
                <span style={{ color: "#22d3ee" }}>83.20%</span>
              </Typography>
            </Stack>
          </Paper>

          {/* My Journey Card */}
          <Paper
            className="glow-card"
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: "rgba(15, 23, 42, 0.6)",
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
              <Box color="#22d3ee">
                <FaCode size={24} />
              </Box>
              <Typography variant="h6" fontWeight="bold">
                My Journey
              </Typography>
            </Stack>

            {/* SHORT TEXT */}
            <Typography color="gray" lineHeight={1.9}>
              I’m a curious and passionate software developer who genuinely
              enjoys building things that people can use and love. My journey
              started alongside my engineering studies, where I explored coding
              on my own and slowly fell in love with backend systems and
              full-stack development.
            </Typography>

            {/* EXTRA TEXT */}
            {open && (
              <Typography color="gray" lineHeight={1.9} mt={2}>
                Beyond code, I’m an active member of my college dance club and
                have performed in multiple competitions, including Inter IIT and
                the Y20 Summit. Balancing academics, coding, competitions, and
                teamwork has shaped my discipline, creativity, and
                problem-solving mindset.
                <br />
                <br />I enjoy working on challenging problems, building
                real-world products, and constantly pushing myself to learn new
                technologies. Whether it’s developing scalable applications or
                brainstorming new ideas, I love turning concepts into reality.
              </Typography>
            )}

            {/* READ MORE BUTTON */}
            <Button
              onClick={() => setOpen(!open)}
              sx={{
                mt: 2,
                color: "#22d3ee",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { background: "rgba(34,211,238,0.08)" },
              }}
            >
              {open ? "Read less ▲" : "Read more ▼"}
            </Button>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
