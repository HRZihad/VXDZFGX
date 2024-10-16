import { Avatar, AvatarGroup, Box, Grid, IconButton, LinearProgress, linearProgressClasses, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TuneIcon from "@mui/icons-material/Tune";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import EventNoteIcon from '@mui/icons-material/EventNote';
import React from "react";

// for show the liner progress
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 20,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "gray", // Background of the progress track
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#ccff66", // Progress bar color
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)", // Adding shadow effect to the progress bar
    transition: "width 0.4s ease-in-out", // Smooth transition for progress change
  },
  // Customizing other CSS properties
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Shadow around the entire LinearProgress component
  marginBottom: "10px", // Add space around the progress bar
  backgroundColor: "#e0e0e0", // You can also adjust the track background here
  position: "relative", // If you need to position elements inside it

  // Custom CSS for other pseudo-elements or hover effects
  "&:hover": {
    backgroundColor: "#d9d9d9", // Change background on hover
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, rgba(255,255,255,0.15), rgba(0,0,0,0.1))", // Adding a gradient overlay effect
    borderRadius: 10, // Make sure this matches the outer border-radius
  },
}));

const InvoicesSection = () => {
  const theme = useTheme();
  // Define media queries for different breakpoints
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(min-width:600px) and (max-width:960px)");
  const isLargeScreen = useMediaQuery("(min-width:960px)");
  return (
    <Box>
      {/* top section  */}
      <Box className=" flex items-center justify-between">
        {/* left  */}
        <Box className=" flex items-center gap-x-2">
          {/* arrow icon  */}
          <IconButton
            sx={{
              border: `1px solid ${theme.palette.primary.semiWhite}`,
              borderRadius: "100%",
            }}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          {/* text  */}
          <Typography sx={{ fontSize: "60px" }}>Invoices</Typography>
        </Box>
        {/* right */}
        <Box className=" flex items-center gap-x-1">
          {/* arrow icon  */}
          <IconButton
            sx={{
              border: `1px solid ${theme.palette.primary.semiWhite}`,
              borderRadius: "100%",
            }}
          >
            <TuneIcon />
          </IconButton>
          <Box className=" rounded-3xl px-2 py-2 flex items-center justify-center gap-x-1 cursor-pointer" sx={{ border: `1px solid ${theme.palette.primary.semiWhite}` }}>
            <NoteAddIcon />
            <Typography>Create an invoices</Typography>
          </Box>
        </Box>
      </Box>

      {/* content section  */}

      {/* grid system apply  */}
      <Grid container spacing={2}>
        <Grid item xs={isMediumScreen || isSmallScreen ? 12 : 7}>
          {/* left  */}
          <Box sx={{ clipPath: "polygon(49% 2%, 100% 0, 99% 26%, 99% 72%, 100% 100%, 53% 98%, 0 100%, 1% 72%, 1% 28%, 0 0)" }} className=" rounded-md">
            <Box className=" bg-[#DBE5F2] rounded-[30px] p-12 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-12">
              {/* left box in card  */}
              <Box className=" flex flex-col gap-y-14 ">
                {/* overdue  */}
                <Box className=" flex flex-col gap-y-3">
                  <Typography sx={{ fontSize: "26px" }}>Overdue</Typography>

                  <Box className="flex items-center gap-x-2">
                    <Typography sx={{ color: "gray", mt: "11px", fontSize: "26px" }}>$</Typography>
                    <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>31,211.00</Typography>
                  </Box>
                </Box>

                {/*month and  progress section  */}
                <Box>
                  <Box className=" flex items-center justify-between gap-x-2 ">
                    <Box className=" w-full">
                      <Box className=" flex flex-col  gap-y-3  w-full ">
                        {/* month  */}
                        <Typography sx={{ fontSize: "26px" }}>Sep</Typography>
                        {/* progress  */}
                        <Box>
                          <BorderLinearProgress variant="determinate" value={50} />
                        </Box>
                      </Box>
                    </Box>
                    <Box className=" flex flex-col gap-y-3  w-[30%]">
                      {/* month  */}
                      <Typography sx={{ fontSize: "26px" }}>Oct</Typography>
                      {/* progress  */}
                      <Box>
                        <BorderLinearProgress variant="determinate" value={50} />
                      </Box>
                    </Box>
                  </Box>
                  {/* avatar  */}
                  <Box className=" flex items-center justify-center">
                    <AvatarGroup>
                      <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" />
                      <Avatar alt="Travis Howard" src="https://i.ibb.co.com/GPrhFkv/2.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/xfGjJyz/3.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/nfFG5fL/4.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/8KLgrT2/5.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/HNvMtzP/6.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/RjY0Tzt/7.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/dct3Xg2/8.png" />
                    </AvatarGroup>
                  </Box>
                </Box>
              </Box>

              {/* mid box in card  */}
              <Box className=" flex flex-col gap-y-14 ">
                {/* due within next month  */}
                <Box className=" flex flex-col gap-y-3">
                  <Typography sx={{ fontSize: "26px" }}>Due within next month</Typography>

                  <Box className="flex items-center gap-x-2">
                    <Typography sx={{ color: "gray", mt: "11px", fontSize: "26px" }}>$</Typography>
                    <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>172,560.00</Typography>
                  </Box>
                </Box>

                {/*month and  progress section  */}
                <Box>
                  <Box className=" flex items-center justify-between gap-x-2 ">
                    <Box className=" w-full">
                      <Box className=" flex flex-col  gap-y-3  w-full ">
                        {/* month  */}
                        <Typography sx={{ fontSize: "26px" }}>Nov</Typography>
                        {/* progress  */}
                        <Box>
                          <BorderLinearProgress variant="determinate" value={30} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* avatar  */}
                  <Box className=" flex items-center justify-center">
                    <AvatarGroup>
                      <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" />
                      <Avatar alt="Travis Howard" src="https://i.ibb.co.com/GPrhFkv/2.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/xfGjJyz/3.png" />
                      {/* <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/nfFG5fL/4.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/8KLgrT2/5.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/HNvMtzP/6.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/RjY0Tzt/7.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/dct3Xg2/8.png" /> */}
                    </AvatarGroup>
                  </Box>
                </Box>
              </Box>

              {/* right section of card  */}
              <Box className=" flex flex-col gap-y-14 ">
                {/* overdue  */}
                <Box className=" flex flex-col gap-y-3">
                  <Typography sx={{ fontSize: "26px" }}>Average time to get paid</Typography>

                  <Box className="flex items-center gap-x-2">
                    <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>12</Typography>
                    <Typography sx={{ color: "gray", mt: "11px", fontSize: "26px" }}>days</Typography>
                  </Box>
                </Box>

                {/*month and  progress section  */}
                <Box>
                  <Box className=" flex items-center justify-between gap-x-2 ">
                    <Box className=" w-full">
                      <Box className=" flex flex-col gap-y-1 w-full ">
                        {/* month  */}
                        <Typography sx={{ fontSize: "26px" }}>Nov</Typography>
                        {/* progress  */}
                        <Box>
                          <BorderLinearProgress variant="determinate" value={12} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* avatar  */}
                  <Box className=" flex items-center justify-center">
                  <AvatarGroup>
                      <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" />
                      <Avatar alt="Travis Howard" src="https://i.ibb.co.com/GPrhFkv/2.png" />
                      {/* <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/xfGjJyz/3.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/nfFG5fL/4.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/8KLgrT2/5.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/HNvMtzP/6.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/RjY0Tzt/7.png" />
                      <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/dct3Xg2/8.png" /> */}
                    </AvatarGroup>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* right  */}
        <Grid item xs={isMediumScreen || isSmallScreen ? 12 : 5}>
          {/* right  */}
          <Box sx={{ clipPath: "polygon(49% 2%, 100% 0, 99% 26%, 99% 72%, 100% 100%, 53% 98%, 0 100%, 1% 72%, 1% 28%, 0 0)" }} className=" h-[390px] bg-[#DBE5F2]  rounded-[30px] p-12 relative">
            <Box className=" flex flex-col gap-y-10">
              {/* top amount option  */}
              <Box className=" flex  justify-between">
                {/* left  */}
                <Box>
                  {/* text  */}
                  <Typography sx={{ fontSize: "26px" }}>Available for Instant Payout</Typography>

                  {/* amount and button  */}
                  <Box className="flex items-center gap-x-2">
                    <Typography sx={{ color: "gray", mt: "11px", fontSize: "26px" }}>$</Typography>
                    <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>214,390.00</Typography>
                    {/* expects button  */}
                    <Box className=" ml-3 rounded-3xl px-6 py-1 flex items-center justify-center  cursor-pointer" sx={{ border: `1px solid gray` }}>
                      <Typography>Expects</Typography>
                    </Box>
                  </Box>
                </Box>
                {/* right  */}
                <Box>
                  {/* arrow icon  */}
                  <IconButton
                    sx={{
                      border: `1px solid gray`,
                      borderRadius: "100%",
                    }}
                  >
                    <ArrowOutwardIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* bottom payment option  */}
              <Box className=" ">
                <Box className="   flex items-center justify-between ">
                  {/* left  */}
                  <Box className=" flex items-center gap-x-2 absolute bottom-0">
                    {/* left box  */}
                    <Box className=" px-6 py-4  h-[130px] rounded-md " sx={{ bgcolor: theme.palette.primary.border2, mt: "25px" }}>
                      <Box className=" flex flex-col gap-y-3">
                        <Typography sx={{ fontWeight: "600" }}>#177210</Typography>
                        <Typography className=" mt-5">Stripe</Typography>
                      </Box>
                    </Box>
                    {/* mid box  */}
                    <Box className=" px-6 py-4  h-[150px] rounded-md " sx={{ bgcolor: theme.palette.primary.active }}>
                      <Box className=" flex flex-col gap-y-3">
                        <Typography sx={{ fontWeight: "600" }}>#177210</Typography>
                        <Typography className=" mt-5">Stripe</Typography>
                      </Box>
                    </Box>
                    {/* right box  */}
                    {/* #E1E7EC */}
                    <Box className=" px-6 py-4  h-[130px] rounded-md " sx={{ bgcolor: theme.palette.primary.border2, mt: "25px" }}>
                      <Box className=" flex flex-col gap-y-3">
                        <Typography sx={{ fontWeight: "600" }}>#177210</Typography>
                        <Typography className=" mt-5">Stripe</Typography>
                      </Box>
                    </Box>
                  </Box>
                  {/* right  */}
                  <Box className=" absolute bottom-4 right-5">
                    {/* expects button  */}
                    <Box className=" ml-3 rounded-3xl px-6 py-3 flex items-center justify-center  cursor-pointer" sx={{ bgcolor: "black", color: theme.palette.primary.semiWhite }}>
                      <Typography>Pay out now</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>


      {/* all invoices && Draft && Unpaid  */}
      <Box>
        
      </Box>



    </Box>
  );
};

export default InvoicesSection;
