import { Box, Container, Typography, Paper, Stack, Chip } from "@mui/material";
import { FaBriefcase } from "react-icons/fa";

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
              left: { xs: 8, sm: 12 },
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, #22d3ee, #a855f7)",
            }}
          />

          <Stack spacing={6}>
            {experiences.map((exp, i) => (
              <Box key={i} display="flex" gap={3}>
                {/* Timeline dot */}
                <Box
                  sx={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "#020617",
                    border: "2px solid #22d3ee",
                    boxShadow: "0 0 12px #22d3ee",
                    mt: "28px",
                  }}
                />

                {/* Card */}
                <Paper
                  className="glow-card"
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    flex: 1,
                    background: "rgba(15, 23, 42, 0.6)",
                  }}
                >
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

                  <Stack spacing={1.2} mb={2}>
                    {exp.points.map((p, j) => (
                      <Typography key={j} color="gray">
                        • {p}
                      </Typography>
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
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
                </Paper>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
