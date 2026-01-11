import { Box, Container, Typography, Paper, Stack, Chip } from "@mui/material";
import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaCloud,
  FaTools,
  FaBook,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode size={22} />,
    skills: ["C/C++", "JavaScript", "Python", "Java", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: <FaPaintBrush size={22} />,
    skills: [
      "React.js",
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "ShadCN UI",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer size={22} />,
    skills: ["Node.js", "Express.js", "FastAPI", "Socket.IO", "JWT"],
  },
  {
    title: "Database & Cloud",
    icon: <FaCloud size={22} />,
    skills: ["MongoDB", "OracleDB", "SQL", "AWS", "Cloudinary"],
  },
  {
    title: "Tools & Technologies",
    icon: <FaTools size={22} />,
    skills: ["Git", "GitHub", "VS Code", "Linux", "Chrome Extensions"],
  },
  {
    title: "Core Concepts",
    icon: <FaBook size={22} />,
    skills: ["DSA", "OOP", "System Design", "DBMS", "Operating Systems"],
  },
];

export default function Skills() {
  return (
    <Box py={10} id="skills">
      <Container>
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
          Skills & Technologies
        </Typography>

        {/* Responsive grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // mobile
              sm: "1fr 1fr", // tablet
              md: "1fr 1fr", // small laptop
              lg: "1fr 1fr", // large laptop
            },
            gap: 3,
          }}
        >
          {skillCategories.map((cat) => (
            <Paper
              key={cat.title}
              className="glow-card"
              sx={{
                p: 3,
                borderRadius: 3,
                background: "rgba(15, 23, 42, 0.6)",
              }}
            >
              {/* Header */}
              <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
                <Box color="#22d3ee">{cat.icon}</Box>
                <Typography fontWeight="bold" color="#22d3ee">
                  {cat.title}
                </Typography>
              </Stack>

              {/* Skills */}
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {cat.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      bgcolor: "rgba(34,211,238,0.08)",
                      border: "1px solid rgba(34,211,238,0.3)",
                      color: "#e5e7eb",
                      fontSize: "0.8rem",
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
