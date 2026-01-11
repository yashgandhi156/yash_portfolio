import { Box, Button, Container, Typography, Stack, Grid } from "@mui/material";
import { FiMail, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <Box
      id="home"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      sx={{
        background: "radial-gradient(circle at top, #020617, #020617)",
        pt: { xs: 10, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.8rem" },
                  fontWeight: "bold",
                  color: "#22d3ee",
                }}
              >
                Hi, I'm
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "2.6rem", sm: "3.4rem", md: "4rem" },
                  fontWeight: "bold",
                  lineHeight: 1.1,
                  background: "linear-gradient(to right, #22d3ee, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Yash Gandhi
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.3rem" },
                  color: "gray",
                  mt: 1,
                }}
              >
                Software Engineer | MERN Stack Developer
              </Typography>

              <Typography
                sx={{
                  maxWidth: 520,
                  mx: { xs: "auto", md: 0 },
                  color: "gray",
                  mt: 2,
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                Passionate about building scalable web applications, real-time
                systems, and solving complex problems. Experienced in full-stack
                development, frontend engineering, and competitive programming.
              </Typography>

              {/* BUTTONS */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                mt={4}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <a
                  href="/resume.pdf"
                  download
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<FiDownload />}
                    sx={{
                      px: 3,
                      py: 1.2,
                      bgcolor: "#22d3ee",
                      color: "#020617",
                      fontWeight: "bold",
                      "&:hover": { bgcolor: "#38e8ff" },
                    }}
                  >
                    Download Resume
                  </Button>
                </a>

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ borderColor: "#22d3ee", color: "#22d3ee" }}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Me
                </Button>
              </Stack>

              {/* SOCIALS */}
              <Stack
                direction="row"
                spacing={2.5}
                mt={4}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <a href="https://github.com/yashgandhi156" target="_blank">
                  <FaGithub size={26} color="#22d3ee" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yash-gandhi-306377228/"
                  target="_blank"
                >
                  <FaLinkedin size={26} color="#22d3ee" />
                </a>
                <a href="https://leetcode.com/u/crazy_156/" target="_blank">
                  <SiLeetcode size={26} color="#22d3ee" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=yashgandhi156@gmail.com"
                  target="_blank"
                >
                  <FiMail size={26} color="#22d3ee" />
                </a>
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <Box
                sx={{
                  width: { xs: 220, sm: 260, md: 320 },
                  height: { xs: 220, sm: 260, md: 320 },
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                  p: "4px",
                  boxShadow: "0 0 60px rgba(34,211,238,0.35)",
                }}
              >
                <Box
                  component="img"
                  src="/profile.jpg"
                  alt="Yash Gandhi"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    background: "#020617",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
