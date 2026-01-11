import { Box, Container, Typography, Paper, Stack } from "@mui/material";

const achievements = [
  {
    icon: "🎓",
    title: "JEE Advanced 2021",
    desc: "Secured AIR 9673 among 1.5 lakh+ candidates",
  },
  {
    icon: "⚔️",
    title: "LeetCode Knight",
    desc: "Maximum rating of 1949",
  },
  {
    icon: "💪",
    title: "Competitive Programming",
    desc: "Solved 1500+ DSA problems",
  },
  {
    icon: "🏆",
    title: "InterviewBit Rankings",
    desc: "Global Rank 137, University Rank 2",
  },
  {
    icon: "🎭",
    title: "Y20 Summit 2023",
    desc: "Performed at Youth 20 Summit under G20",
  },
  {
    icon: "🏏",
    title: "Sports Achievement",
    desc: "Best Player in Inter-Hostel Cricket",
  },
];

export default function Achievements() {
  return (
    <Box py={10} id="achievements">
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
          Achievements
        </Typography>

        <Stack spacing={3}>
          {achievements.map((a, i) => (
            <Paper
              key={i}
              sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: 3,
                textAlign: "center",
                background: "rgba(15,23,42,0.6)",
                border: "1px solid rgba(34,211,238,0.15)",
                backdropFilter: "blur(10px)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 0 25px rgba(34,211,238,0.15)",
                  borderColor: "#22d3ee",
                },
              }}
            >
              <Typography fontSize="2rem">{a.icon}</Typography>

              <Typography fontWeight="bold" color="#22d3ee" mt={1}>
                {a.title}
              </Typography>

              <Typography color="gray" fontSize="0.9rem" mt={0.5}>
                {a.desc}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
