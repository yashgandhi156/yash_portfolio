import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  "about",
  "skills",
  "projects",
  "experience",
  "achievements",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(2,6,23,0.75)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(34,211,238,0.15)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            fontWeight="bold"
            fontSize="1.4rem"
            sx={{
              background: "linear-gradient(to right, #22d3ee, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => scrollTo("home")}
          >
            YG
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {sections.map((s) => (
              <Button
                key={s}
                onClick={() => scrollTo(s)}
                sx={{
                  color: "#e5e7eb",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#22d3ee",
                    background: "rgba(34,211,238,0.08)",
                  },
                }}
              >
                {s.toUpperCase()}
              </Button>
            ))}
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", md: "none" }, color: "#22d3ee" }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "rgba(2,6,23,0.95)",
            backdropFilter: "blur(12px)",
          },
        }}
      >
        <Stack spacing={3} p={3}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              fontWeight="bold"
              fontSize="1.2rem"
              sx={{
                background: "linear-gradient(to right, #22d3ee, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Yash Gandhi
            </Typography>

            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: "#22d3ee" }}
            >
              <X />
            </IconButton>
          </Box>

          {sections.map((s) => (
            <Button
              key={s}
              fullWidth
              onClick={() => scrollTo(s)}
              sx={{
                color: "white",
                justifyContent: "flex-start",
                fontSize: "1rem",
                "&:hover": {
                  color: "#22d3ee",
                  background: "rgba(34,211,238,0.08)",
                },
              }}
            >
              {s.toUpperCase()}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
