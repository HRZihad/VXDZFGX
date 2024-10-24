import { Box, IconButton, Typography, useTheme } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShareIcon from "@mui/icons-material/Share";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import EastIcon from "@mui/icons-material/East";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSidebarOpen } from "redux/features/sidebar/sidebarSlice"; // Correctly import your action

const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.sidebarReducer.isSidebarOpen);

  // Detect scroll event to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Is sidebar open:", isSidebarOpen);

  return (
    <Box
      sx={{
        position: "sticky",
        top: isScrolled ? "103px" : "0",
        zIndex: 30,
        transition: "width 0.6s ease, opacity 0.6s ease",
        width: isSidebarOpen ? "220px" : "70px",
        overflow: "hidden",
      }}
      className="flex flex-col justify-between pb-10 pt-[15px] min-h-[90vh]"
    >
      {/* top section  */}
      <Box className="flex flex-col gap-y-3">
        {/* expand arrow or close arrow */}
        {isSidebarOpen ? (
          <Box className="flex items-center justify-start ">
            <IconButton
              onClick={() => dispatch(setIsSidebarOpen(false))} // Close sidebar when clicking
              size="large"
              sx={{
                bgcolor: theme.palette.icon.lightIconBg,
                borderRadius: "100%",
              }}
            >
              <KeyboardBackspaceIcon />

            </IconButton>
          </Box>
        ) : (
          <Box className="flex flex-col items-center gap-y-3">
            <IconButton
              onClick={() => dispatch(setIsSidebarOpen(true))} // Open sidebar when clicking
              size="large"
              sx={{
                bgcolor: theme.palette.icon.lightIconBg,
                borderRadius: "100%",
              }}
            >
              <EastIcon />
            </IconButton>
          </Box>
        )}

        {/* Sidebar content based on open/close state */}
        {isSidebarOpen ? (
          <Box className="flex flex-col gap-y-3">
            <Box className="flex items-center gap-x-2">
              <IconButton
                size="large"
                sx={{
                  bgcolor: theme.palette.icon.lightIconBg,
                  borderRadius: "100%",
                }}
              >
                <ShareIcon />
              </IconButton>
              <Typography>Share</Typography>
            </Box>
            <Box className="flex items-center gap-x-2">
              <IconButton
                size="large"
                sx={{
                  bgcolor: theme.palette.icon.lightIconBg,
                  borderRadius: "100%",
                }}
              >
                <DriveFolderUploadIcon />
              </IconButton>
              <Typography>Upload</Typography>
            </Box>
          </Box>
        ) : (
          <Box className="flex flex-col items-center gap-y-3">
            <IconButton
              size="large"
              sx={{
                bgcolor: theme.palette.icon.lightIconBg,
                borderRadius: "100%",
              }}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                bgcolor: theme.palette.icon.lightIconBg,
                borderRadius: "100%",
              }}
            >
              <DriveFolderUploadIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* bottom section */}
      {isSidebarOpen ? (
        <Box className="flex flex-col gap-y-2">
          <Box className="flex items-center gap-x-2">
            <IconButton
              size="large"
              sx={{
                bgcolor: theme.palette.icon.lightIconBg,
                borderRadius: "100%",
              }}
            >
              <BedtimeIcon />
            </IconButton>
            <Typography>Dark</Typography>
          </Box>

          <Box className="flex items-center gap-x-2">
            <IconButton
              size="large"
              sx={{
                bgcolor: theme.palette.icon.lightIconBg,
                borderRadius: "100%",
              }}
            >
              <LightModeIcon />
            </IconButton>
            <Typography>Light</Typography>
          </Box>
        </Box>
      ) : (
        <Box className="flex flex-col items-center gap-y-2">
          <IconButton
            size="large"
            sx={{
              bgcolor: theme.palette.icon.lightIconBg,
              borderRadius: "100%",
            }}
          >
            <BedtimeIcon />
          </IconButton>

          <IconButton
            size="large"
            sx={{
              bgcolor: theme.palette.icon.darkIconBg,
              color: theme.palette.primary.semiWhite,
              borderRadius: "100%",
            }}
          >
            <LightModeIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
