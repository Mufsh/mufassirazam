"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import DevicesIcon from "@mui/icons-material/Devices";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Person } from "@mui/icons-material";

const sections = [
  { name: "About", id: "about", icon: <Person /> },
  { name: "Education", id: "education", icon: <SchoolIcon /> },
  { name: "Experience", id: "experience", icon: <WorkIcon /> },
  { name: "Projects", id: "projects", icon: <CodeIcon /> },
  { name: "Skills", id: "skills", icon: <DevicesIcon /> },
  { name: "Achievements", id: "achievements", icon: <EmojiEventsIcon /> },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    handleClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(135deg, #1f2937 0%, #4b5563 100%)", // Dark gradient
        boxShadow: 4,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* On Large Screens: Center the Navigation Items */}
          {!isMobile && (
            <div
              className="flex gap-8 justify-center"
              style={{ width: "100%" }}
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Button
                    color="inherit"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.icon}
                    {section.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          )}

          {/* On Small Screens: "Mufassir" on the left and Menu Icon on the right */}
          {isMobile && (
            <>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Dancing Script, cursive",
                  fontSize: "2rem",
                  flexGrow: 1,
                  textAlign: "left",
                  paddingLeft: "16px",
                }}
              >
                Mufassir
              </Typography>

              {/* Mobile Menu Icon on the Right */}
              <IconButton color="inherit" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
            </>
          )}

          {/* Mobile Menu (for small screens) */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                backgroundColor: "#1f2937", // Dark background for the menu
                borderRadius: "8px",
              },
            }}
          >
            {sections.map((section) => (
              <MenuItem
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {section.icon}
                {section.name}
              </MenuItem>
            ))}
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
