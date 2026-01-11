import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Image Generator",
    desc: "A MERN stack web application for sharing, browsing, and generating images using AI with community forum features.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
    ],
    link: "https://github.com/yashgandhi156/AI-Image-Generation-APP",
  },
  {
    title: "ShopEase – MERN E-Commerce Platform",
    desc: "A full-featured MERN stack e-commerce application supporting secure purchasing, customer reviews, and a powerful admin dashboard for managing products, users, and orders.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Bcrypt",
      "React-Bootstrap",
    ],
    link: "https://github.com/yashgandhi156/ecommerce-app",
  },
  {
    title: "YouTube Bookmarker Extension",
    desc: "A Chrome extension that allows users to bookmark YouTube videos and manage them efficiently with seamless integration.",
    tech: ["JavaScript", "HTML", "CSS", "Chrome Storage API"],
    link: "https://github.com/yashgandhi156/youtube-bookmark-Chrome-Extension",
  },
];

export default function Projects() {
  return (
    <Box py={10} id="projects">
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
          Projects
        </Typography>

        <Stack spacing={4}>
          {projects.map((project) => (
            <Paper
              key={project.title}
              className="glow-card"
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                background: "rgba(15, 23, 42, 0.6)",
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="#22d3ee" mb={1}>
                {project.title}
              </Typography>

              <Typography color="gray" mb={2} lineHeight={1.7}>
                {project.desc}
              </Typography>

              {/* Tech stack */}
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
                mb={3}
              >
                {project.tech.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    sx={{
                      bgcolor: "rgba(168,85,247,0.08)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      color: "#e5e7eb",
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Stack>

              {/* Button */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FaGithub />}
                href={project.link}
                target="_blank"
                sx={{
                  borderColor: "#22d3ee",
                  color: "#22d3ee",
                  py: 1.2,
                  "&:hover": {
                    borderColor: "#22d3ee",
                    bgcolor: "rgba(34,211,238,0.08)",
                  },
                }}
              >
                View on GitHub
              </Button>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
