import { Box, Container, Typography, Paper, Stack, Chip } from "@mui/material";
import { FaBriefcase } from "react-icons/fa";
import { useState } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Bizacuity Solutions Pvt. Ltd.",
    period: "July 2025 - Present",
    points: [
      "Contributed to full-stack recruitment platform managing applications, roles, and interviews",
      "Developed 10+ backend routes with Python FastAPI, integrated with React frontend",
      "Implemented JWT-based authentication and role-based access control (RBAC)",
      "Designed AI-based resume scoring pipeline processing 200+ resumes/month, reducing manual screening by 60%",
    ],
    tech: [
      "React.js",
      "FastAPI",
      "Python",
      "ShadCN UI",
      "Tailwind CSS",
      "SQL",
      "OracleDB",
      "AWS",
    ],
  },
  {
    role: "SDE Intern",
    company: "Unified Mentor",
    period: "May 2024 - July 2024",
    points: [
      "Implemented real-time chat functionality using Socket.IO",
      "Developed secure user authentication with JWT",
      "Integrated OpenAI-powered chatbot for intelligent responses",
    ],
    tech: ["Socket.IO", "JWT", "OpenAI API", "Node.js", "Express", "React"],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Box py={10} id="experience">
      <Container maxWidth="md">
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
          Work Experience
        </Typography>

        <Box position="relative">
          {/* Vertical line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 10, sm: 14 },
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, #22d3ee, #a855f7)",
            }}
          />

          <Stack spacing={6}>
            {experiences.map((exp, i) => {
              const isOpen = openIndex === i;

              return (
                <Box key={i} display="flex" gap={3}>
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      minWidth: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "#020617",
                      border: "2px solid #22d3ee",
                      boxShadow: "0 0 14px #22d3ee",
                      mt: "38px",
                    }}
                  />

                  {/* Card */}
                  <Paper
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="glow-card"
                    sx={{
                      flex: 1,
                      p: { xs: 3, md: 4 },
                      borderRadius: 5,
                      background: "rgba(15, 23, 42, 0.6)",
                      cursor: "pointer",
                      overflow: "hidden",

                      /* 🔥 KEY PART */
                      minHeight: 160,
                      maxHeight: isOpen ? 520 : 160,
                      transition: "all 0.45s ease",

                      "&:hover": {
                        boxShadow: "0 0 25px rgba(34,211,238,0.35)",
                      },
                    }}
                  >
                    {/* Always visible */}
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      mb={1}
                    >
                      <Box color="#22d3ee">
                        <FaBriefcase size={20} />
                      </Box>
                      <Typography fontWeight="bold" color="#22d3ee">
                        {exp.role}
                      </Typography>
                    </Stack>

                    <Typography fontWeight="bold">{exp.company}</Typography>
                    <Typography color="gray" mb={2}>
                      {exp.period}
                    </Typography>

                    {/* Expand content */}
                    <Box
                      sx={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen
                          ? "translateY(0)"
                          : "translateY(-8px)",
                        transition: "0.35s",
                      }}
                    >
                      <Stack spacing={1.2} mb={2}>
                        {exp.points.map((p, j) => (
                          <Typography key={j} color="gray" fontSize="0.95rem">
                            • {p}
                          </Typography>
                        ))}
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                      >
                        {exp.tech.map((t) => (
                          <Chip
                            key={t}
                            label={t}
                            sx={{
                              bgcolor: "rgba(34,211,238,0.08)",
                              border: "1px solid rgba(34,211,238,0.3)",
                              color: "#e5e7eb",
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Paper>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
