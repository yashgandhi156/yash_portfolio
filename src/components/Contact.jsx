import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Try again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Box py={12} id="contact">
      <Container maxWidth="sm">
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={1}
          sx={{
            background: "linear-gradient(to right, #22d3ee, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get In Touch
        </Typography>

        <Typography textAlign="center" color="gray" mb={4}>
          Have a project in mind or want to collaborate? Feel free to reach out.
        </Typography>

        {/* Form */}
        <Stack spacing={2}>
          <TextField
            label="Name"
            fullWidth
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            label="Email"
            fullWidth
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              py: 1.3,
              background: "linear-gradient(to right, #22d3ee, #06b6d4)",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Stack>

        {/* Divider */}
        <Divider sx={{ my: 5, borderColor: "rgba(34,211,238,0.2)" }} />

        {/* Direct Contact */}
        <Typography
          textAlign="center"
          fontWeight="bold"
          mb={2}
          fontSize="1.1rem"
        >
          Or reach me directly at:
        </Typography>

        <Stack spacing={1} alignItems="center" mb={3}>
          <Typography color="#22d3ee">📧 yashgandhi156@gmail.com</Typography>
          <Typography color="#22d3ee">📱 +91-9589098344</Typography>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={3} justifyContent="center">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/yashgandhi156",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/yash-gandhi-306377228/",
            },
            {
              icon: <SiLeetcode />,
              link: "https://leetcode.com/u/crazy_156/",
            },
            {
              icon: <FiMail />,
              link: "https://mail.google.com/mail/?view=cm&fs=1&to=yashgandhi156@gmail.com",
            },
          ].map((item, i) => (
            <Box
              key={i}
              component="a"
              href={item.link}
              target="_blank"
              rel="noreferrer"
              sx={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "2px solid #22d3ee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#22d3ee",
                fontSize: "1.5rem",
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(34,211,238,0.1)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              {item.icon}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
