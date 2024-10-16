import { Box, IconButton, Menu, MenuItem, TextField, Typography, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StorageIcon from "@mui/icons-material/Storage";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import AllInvoices from "./AllInvoices";
import DraftInvoices from "./DraftInvoices";
import UnpaidInvoices from "./UnpaidInvoices";

{
  /* <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" />
<Avatar alt="Travis Howard" src="https://i.ibb.co.com/GPrhFkv/2.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/xfGjJyz/3.png" /> */
}
{
  /* <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/nfFG5fL/4.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/8KLgrT2/5.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/HNvMtzP/6.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/RjY0Tzt/7.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/dct3Xg2/8.png" /> */
}

const data = [
  {
    id: 1,
    invoice_id: 404002,
    invoices_status: "unsent",
    amount: 80770,
    imgUrl: "https://i.ibb.co/YcXc5Cg/1.png",
    customer_details: [{ customer_name: "lutfor rahman", customer_position: "ceo" }],
    company_name: "BlueRock",
    company_logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
    subtotal: 53154,
    total: 53154,
    balance_due: 53154,
  },
  {
    id: 2,
    invoice_id: 426001,
    customer_details: [{ customer_name: "Jalal Nuri", customer_position: "Marketing manager" }],
    invoices_status: "unsent",
    amount: 80770,
    imgUrl: "https://i.ibb.co.com/GPrhFkv/2.png",
    company_name: "IT-Corner",
    company_logo: "https://i.ibb.co.com/g6G9fvz/it-corner.png",
    subtotal: 63155,
    total: 63155,
    balance_due: 53154,
  },
];

// three dot menu option start here
const threeDotMenuOption = ["Option 1", "Option 2", "Option 3"];

const ITEM_HEIGHT = 48;
// three dot menu option end here

const DetailsCard = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input
  // for show the three dot menu option start here
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  // for show the three dot menu option end here

  // for navigate the tab
  const [activeTab, setActiveTab] = useState("Unpaid Invoices");

  const tabs = ["all invoices", "draft", "unpaid"];
  const cardTabs = [
    { name: "all invoices", value: null },
    { name: "draft", value: 3 },
    { name: "Unpaid Invoices", value: 5 },
  ];

  console.log("check tabs", activeTab);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // for show the three dot menu option end here

  // Filter invoices based on customer_name search
  const filteredData = data.filter((info) => info.customer_details.some((customer) => customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase())));

  console.log("filteredData", filteredData);
  console.log("Data", data);
  console.log("searchTerm", searchTerm);
  

  return (
    <Box>
      {/* Card Topbar section  */}
      <Box className="flex justify-between">
        {/* text  */}
        <Box>
          <Typography sx={{ fontSize: "26px" }}>Active filter</Typography>
        </Box>

        {/* all customer  */}
        <Box className="">
          <Box className="rounded-[35px] flex items-center p-[2px]" sx={{ border: `1px solid ${theme.palette.primary.semiWhite}` }}>
            <TextField
              placeholder="all customer"
              variant="outlined" // if you're using the outlined variant
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            {/* side icon for show option */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Box>

        {/* All statues  */}
        <Box className="">
          <Box className="rounded-[35px] flex items-center p-[2px]" sx={{ border: `1px solid ${theme.palette.primary.semiWhite}` }}>
            <TextField
              placeholder="all statues "
              variant="outlined" // if you're using the outlined variant
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            {/* side icon for show option */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Box>

        {/* date and calendar */}
        <Box className="">
          <Box className="rounded-[35px] flex items-center p-[2px]" sx={{ border: `1px solid ${theme.palette.primary.semiWhite}` }}>
            <TextField
              placeholder="data and calendar"
              variant="outlined" // if you're using the outlined variant
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            {/* side icon for show option */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Enter invoices section */}
        <Box className="">
          <Box className="rounded-[35px] flex items-center p-[2px]" sx={{ border: `1px solid ${theme.palette.primary.semiWhite}` }}>
            <TextField
              placeholder="Enter invoices #"
              variant="outlined" // if you're using the outlined variant
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            {/* side icon for show option */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* card content section */}
      <Box className=" flex items-center justify-center">
        <Box className="  mt-5 rounded-[35px] overflow-hidden w-full" sx={{ bgcolor: theme.palette.primary.cardBg }}>
          <Box className="flex w-full">
            <Box className="flex-2 bg-white w-[40%]">
              <Box className=" h-full rounded-tr-[20px] px-6 py-6" sx={{ color: theme.palette.primary.semiWhite, bgcolor: theme.palette.primary.cardBg }}>
                <Typography sx={{ fontSize: "20px" }}>{activeTab}</Typography>
              </Box>
            </Box>
            <Box className="flex-[1.5] bg-white rounded-bl-[30px] rounded-br-[30px] ">
              <Box className=" flex items-center justify-center">
                {/* middle tab section here  */}
                <Box className=" flex items-center gap-x-2">
                  {cardTabs.map((tab) => (
                    <Box className={"px-3 py-3 rounded-3xl cursor-pointer"} sx={{ bgcolor: ` ${activeTab === tab.name ? theme.palette.primary.active : ""}` }}>
                      <Box className=" flex items-center gap-x-1">
                        <Typography
                          key={tab.name}
                          onClick={() => setActiveTab(tab.name)}
                          sx={{
                            color: activeTab === tab.name ? theme.palette.primary.white : theme.palette.primary.white,
                          }}
                        >
                          {tab.name}
                        </Typography>
                        {tab.value === null ? (
                          ""
                        ) : (
                          <Box className=" flex items-center justify-center rounded-full" sx={{ bgcolor: "white", width: "20px", height: "20px" }}>
                            <Typography>{tab.value}</Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="flex-2 bg-white w-[40%]">
              <Box className=" h-full rounded-tl-[20px]" sx={{ bgcolor: theme.palette.primary.cardBg }}>
                <Box className=" flex items-center justify-end px-6 py-6" sx={{ color: theme.palette.primary.semiWhite }}>
                  {/* right side icon section  */}
                  <Box className=" flex items-center gap-x-2">
                    {/* icon 1  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.semiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <StorageIcon sx={{ color: theme.palette.primary.semiWhite }} />
                    </IconButton>
                    {/* icon 2 for three dot menu option   */}
                    <Box>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{
                          border: `1px solid ${theme.palette.primary.semiWhite}`,
                          borderRadius: "100%",
                        }}
                      >
                        <MoreVertIcon sx={{ color: theme.palette.primary.semiWhite }} />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                          paper: {
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: "20ch",
                            },
                          },
                        }}
                      >
                        {threeDotMenuOption.map((option) => (
                          <MenuItem key={option} selected={option === "Pyxis"} onClick={handleClose}>
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="px-[30px] mb-5">
            {activeTab === "all invoices" && <AllInvoices />}
            {activeTab === "draft" && <DraftInvoices />}
            {activeTab === "Unpaid Invoices" && <UnpaidInvoices data={filteredData} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsCard;
