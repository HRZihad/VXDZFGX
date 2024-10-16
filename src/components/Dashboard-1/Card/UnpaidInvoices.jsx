import { Avatar, Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";

const UnpaidInvoices = ({ data }) => {
  const [selectedData, setSelectedData] = useState(data[0]); // Default to the first invoice
  const [active, setActive] = useState(selectedData.invoice_id); // Track active invoice ID
  const theme = useTheme();

  // Handle toggling and selecting invoice
  const handleToggle = (info) => {
    setActive(info.invoice_id); // Set active invoice ID
    setSelectedData(info); // Store selected invoice data
  };

  console.log("selected data", selectedData);

  return (
    <Box className=" w-full mt-4">
      {/* grid system */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box className="flex flex-col gap-3">
              {data.map((info) => (
                <Box
                  key={info.id}
                  onClick={() => handleToggle(info)} // Handle click with toggle function
                  className="w-full rounded-[35px] px-2 py-2 flex items-center justify-between cursor-pointer"
                  sx={{
                    bgcolor: active === info.invoice_id ? theme.palette.background.cardBg : theme.palette.primary.cardBg2,
                  }}
                >
                  {/* avatar and invoice details */}
                  <Box className="flex items-center gap-x-2">
                    <Avatar alt="Remy Sharp" src={info.imgUrl} sx={{ width: 56, height: 56 }} />
                    {/* invoice id & time */}
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "600",
                          color: theme.palette.text.white,
                        }}
                      >
                        # {info.invoice_id} {/* Display dynamic invoice ID */}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: theme.palette.primary.semiWhite,
                        }}
                      >
                        In 5 days
                      </Typography>
                    </Box>
                  </Box>

                  {/* invoice status */}
                  <Box
                    className="px-3 py-1 rounded-3xl"
                    sx={{
                      bgcolor: active === info.invoice_id && theme.palette.primary.main,
                      border: info.invoice_id !== active && `1px solid ${theme.palette.primary.semiWhite}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        color: active === info.invoice_id ? theme.palette.text.black : theme.palette.primary.semiWhite,
                      }}
                    >
                      Unsent
                    </Typography>
                  </Box>

                  {/* amount */}
                  <Box className="mr-6 flex items-center gap-x-1">
                    <Typography
                      sx={{
                        color: theme.palette.primary.semiWhite,
                        mt: "2px",
                      }}
                    >
                      $
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: theme.palette.text.white,
                      }}
                    >
                      {info.amount} {/* Display dynamic amount */}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={8}>
            {/* Display selected invoice details */}
            <Box className="w-full p-6 rounded-3xl " sx={{ bgcolor: theme.palette.background.cardBg }}>
              <Box className=" flex flex-col gap-y-3">
                {/* top section  */}
                <Box className=" grid grid-cols-3 w-full gap-3">
                  {/* left  */}
                  <Box className=" flex flex-col gap-y-3">
                    <Typography sx={{ color: theme.palette.primary.semiWhite }}>Invoices details</Typography>
                    <Box className=" flex items-center gap-3">
                      <Typography sx={{ fontSize: "40px", color: theme.palette.text.white }}>
                        {" "}
                        <span style={{ fontSize: "16px", color: theme.palette.primary.semiWhite }}>#</span> {selectedData.invoice_id}
                      </Typography>
                      <Box className=" rounded-3xl px-[12px] py-[6px] flex items-center justify-center gap-x-1 cursor-pointer" sx={{ border: `1px solid ${theme.palette.primary.semiWhite}` }}>
                        <Typography sx={{ color: theme.palette.primary.semiWhite }}>{selectedData.invoices_status}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  {/* mid  */}
                  <Box className=" flex flex-col gap-y-3">
                    <Typography sx={{ color: theme.palette.primary.semiWhite }}>Company</Typography>
                    <Box className=" flex items-center gap-3">
                      <Typography sx={{ fontSize: "40px", color: theme.palette.text.white }}> {selectedData.company_name}</Typography>
                      {/* company logo  */}
                      <Box className=" w-10 h-10">
                        <img src={selectedData.company_logo} alt="company-logo" width="100%" height="100%" />
                      </Box>
                    </Box>
                  </Box>
                  {/* right  */}
                  <Box className=" flex flex-col gap-x-3">
                    <Typography sx={{ color: theme.palette.primary.semiWhite }}>Customer</Typography>
                    <Box className=" flex items-center gap-3">
                      {/* avatar  */}
                      <Avatar alt="Remy Sharp" src={selectedData.imgUrl} sx={{ width: 56, height: 56 }} />

                      {/* name and role */}
                      <Box className=" ">
                        {selectedData.customer_details.map((customer) => (
                          <Box className=" flex flex-col gap-y-[2px]">
                            <Typography sx={{ color: theme.palette.text.white, fontWeight: "600" }}>{customer.customer_name}</Typography>
                            <Typography sx={{ color: theme.palette.primary.semiWhite }}>{customer.customer_position}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* mid section  */}
                <Box className=" grid grid-cols-4 w-full gap-3">
                  <Box className=" p-4 rounded-[30px] w-full" sx={{ bgcolor: theme.palette.primary.cardBg3 }}>
                    {/* amount and arrow icon section  */}
                    <Box className=" flex items-center justify-between">
                      {/* amount section  */}
                      <Box className="mr-6 flex items-center gap-x-1">
                        <Typography
                          sx={{
                            color: theme.palette.primary.semiWhite,
                            mt: "2px",
                          }}
                        >
                          $
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            color: theme.palette.text.white,
                          }}
                        >
                          10,6300.80 {/* Display dynamic amount */}
                        </Typography>
                      </Box>
                      {/* arrow icon section  */}
                      <ArrowOutwardIcon sx={{ color: theme.palette.primary.semiWhite }} />
                    </Box>

                    {/* Amount for which section  */}
                    <Typography sx={{ color: theme.palette.primary.semiWhite, mt: "30px" }}>Concept Development</Typography>
                  </Box>
                  <Box className=" p-4 rounded-[30px] w-full" sx={{ bgcolor: theme.palette.primary.cardBg3 }}>
                    {/* amount and arrow icon section  */}
                    <Box className=" flex items-center justify-between">
                      {/* amount section  */}
                      <Box className="mr-6 flex items-center gap-x-1">
                        <Typography
                          sx={{
                            color: theme.palette.primary.semiWhite,
                            mt: "2px",
                          }}
                        >
                          $
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            color: theme.palette.text.white,
                          }}
                        >
                          10,6300.80 {/* Display dynamic amount */}
                        </Typography>
                      </Box>
                      {/* arrow icon section  */}
                      <ArrowOutwardIcon sx={{ color: theme.palette.primary.semiWhite }} />
                    </Box>

                    {/* Amount for which section  */}
                    <Typography sx={{ color: theme.palette.primary.semiWhite, mt: "30px" }}>CRM Development</Typography>
                  </Box>
                  <Box className=" p-4 rounded-[30px] w-full" sx={{ bgcolor: theme.palette.primary.cardBg3 }}>
                    {/* amount and arrow icon section  */}
                    <Box className=" flex items-center justify-between">
                      {/* amount section  */}
                      <Box className="mr-6 flex items-center gap-x-1">
                        <Typography
                          sx={{
                            color: theme.palette.primary.semiWhite,
                            mt: "2px",
                          }}
                        >
                          $
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            color: theme.palette.text.white,
                          }}
                        >
                          10,6300.80 {/* Display dynamic amount */}
                        </Typography>
                      </Box>
                      {/* arrow icon section  */}
                      <ArrowOutwardIcon sx={{ color: theme.palette.primary.semiWhite }} />
                    </Box>

                    {/* Amount for which section  */}
                    <Typography sx={{ color: theme.palette.primary.semiWhite, mt: "30px" }}>CRM Integration</Typography>
                  </Box>
                  <Box className=" p-4  rounded-[30px] w-full flex items-center justify-center" sx={{ bgcolor: theme.palette.primary.cardBg3 }}>
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
                {/* bottom section  */}
                <Box className=" p-4  rounded-[30px] w-full flex items-center justify-center" sx={{ bgcolor: theme.palette.primary.cardBg3, mt: "4px" }}>
                  <Box className="w-full grid grid-cols-4  gap-x-2">
                    {/* sub total  */}
                    <Box>
                        <Typography sx={{color: theme.palette.primary.semiWhite}}>Sub Total</Typography>
                           {/* amount section  */}
                      <Box className="mr-6 flex items-center gap-x-1">
                        <Typography
                          sx={{
                            color: theme.palette.primary.semiWhite,
                            mt: "2px",
                          }}
                        >
                          $
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            color: theme.palette.text.white,
                          }}
                        >
                          {selectedData.subtotal} {/* Display dynamic amount */}
                        </Typography>
                      </Box>
                    </Box>
                    {/* total  */}
                    <Box>
                        <Typography sx={{color: theme.palette.primary.semiWhite}}>Total</Typography>
                           {/* amount section  */}
                      <Box className="mr-6 flex items-center gap-x-1">
                        <Typography
                          sx={{
                            color: theme.palette.primary.semiWhite,
                            mt: "2px",
                          }}
                        >
                          $
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            color: theme.palette.text.white,
                          }}
                        >
                          {selectedData.total} {/* Display dynamic amount */}
                        </Typography>
                      </Box>
                    </Box>
                    {/* balance due  */}
                    <Box>
                        <Typography sx={{color: theme.palette.primary.semiWhite}}>Balance Due </Typography>
                           {/* amount section  */}
                      <Box className="mr-6 flex items-center gap-x-1">
                        <Typography
                          sx={{
                            color: theme.palette.primary.semiWhite,
                            mt: "2px",
                          }}
                        >
                          $
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            color: theme.palette.text.white,
                          }}
                        >
                          {selectedData.balance_due} {/* Display dynamic amount */}
                        </Typography>
                      </Box>
                    </Box>

                    {/* payout now button and icon section  */}
                    <Box className=" flex items-center justify-end gap-x-2">
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.semiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <DriveFileRenameOutlineIcon sx={{ color: theme.palette.primary.semiWhite }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.semiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <DateRangeIcon sx={{ color: theme.palette.primary.semiWhite }} />
                    </IconButton>
                    {/* pay out now section  */}
                    <Box className=" flex items-center justify-center px-3 py-3 rounded-3xl cursor-pointer" sx={{bgcolor: theme.palette.primary.active}}>
                        <Typography sx={{fontWeight: "600"}}>Pay out now</Typography>
                    </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* <Typography variant="h6" sx={{ color: theme.palette.text.white }}>
                Selected Invoice Details
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary }}>
                Invoice ID: {selectedData.invoice_id}
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary }}>
                Amount: {selectedData.amount}
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary }}>
                Status: Unsent
              </Typography> */}
              {/* Add more fields as needed */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UnpaidInvoices;
