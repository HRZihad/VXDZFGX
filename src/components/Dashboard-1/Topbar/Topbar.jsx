import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { logo } from "assets/images";
import React, { useState } from "react";
import EstimatesSection from "../MainContent/EstimatesSection";
import InvoicesSection from "../MainContent/InvoicesSection";
import PaymentsSection from "../MainContent/PaymentsSection";
import CheckoutsSection from "../MainContent/CheckoutsSection";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import RoofingIcon from "@mui/icons-material/Roofing";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const Topbar = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("Invoices");
 
  const tabs = ["Estimates", "Invoices", "Payments", "Recurring Invoices", "Checkouts"];

  console.log("check tabs", activeTab);

  return (
    <Box>
      {/* top header section for lg devices */}
      <Box className=" hidden md:block lg:block">
        <Box className="flex items-center justify-between ">
          {/* logo  */}
          <Box className="cursor-pointer">
            <img src={logo} alt="logo" width={180} />
          </Box>

          {/* top tab section  */}
          <Box className="flex items-center gap-x-1">
            {/* icon  */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <SpaceDashboardIcon />
            </IconButton>

            {/* box  */}
            <Box className="px-1 py-1 rounded-3xl flex items-center gap-x-3" sx={{bgcolor: theme.palette.primary.cardBg}}>
              {/* icon  */}
              <IconButton
                sx={{
                  bgcolor: theme.palette.primary.semiWhite,
                  borderRadius: "100%",
                }}
              >
                <SpaceDashboardIcon />
              </IconButton>
              {tabs.map((tab) => (
                <Typography
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-3xl cursor-pointer ${activeTab === tab ? "bg-[#ccff66]" : ""}`}
                  sx={{
                    color: activeTab === tab ? theme.palette.primary.white : theme.palette.primary.semiWhite,
                  }}
                >
                  {tab}
                </Typography>
              ))}
            </Box>

            {/* icons  */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <EventNoteIcon />
            </IconButton>
            {/* icons  */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <LocalAtmIcon />
            </IconButton>

            {/* icons  */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <RoofingIcon />
            </IconButton>

            {/* icons  */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <FeaturedPlayListIcon />
            </IconButton>

            {/* icons  */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <FactCheckIcon />
            </IconButton>

            {/* icons  */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <PeopleOutlineIcon />
            </IconButton>
          </Box>

          {/* right section  */}
          <Box className="flex items-center gap-x-2">
            {/* icon  */}
            <IconButton
              sx={{
                bgcolor: theme.palette.primary.semiWhite,
                borderRadius: "100%",
              }}
            >
              <NotificationsIcon />
            </IconButton>
            {/* icon  */}
            <IconButton
              sx={{
                bgcolor: theme.palette.primary.semiWhite,
                borderRadius: "100%",
              }}
            >
              <SettingsIcon />
            </IconButton>
            {/* avatar  */}
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" sx={{ width: 48, height: 48 }} />
          </Box>
        </Box>
      </Box>

      {/* top header section for sm devices  */}
      <Box className=" block md:hidden lg:hidden">
        <Box className=" flex items-center justify-between">
          {/* logo  */}
          <Box className="cursor-pointer">
            <img src={logo} alt="logo" />
          </Box>
          {/* sidebar for sm  */}
          <Box>sidebar</Box>
        </Box>
      </Box>

      {/* children or content section  */}
      <Box className=" mt-6">
        {activeTab === "Estimates" && <EstimatesSection />}
        {activeTab === "Invoices" && <InvoicesSection />}
        {activeTab === "Payments" && <PaymentsSection />}
        {activeTab === "Recurring Invoices" && <PaymentsSection />}
        {activeTab === "Checkouts" && <CheckoutsSection />}
      </Box>
    </Box>
  );
};

export default Topbar;
