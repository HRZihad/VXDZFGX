// Card.js
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDrag, useDrop } from "react-dnd";
import AddIcon from "@mui/icons-material/Add";
import { useXarrow } from "react-xarrows";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ItemType = "CARD";

export const DndResolution = ({ id, index, label, moveThirdBoxCard, children }) => {
  const theme = useTheme();
  const isSidebarOpen = useSelector((state) => state.sidebarReducer.isSidebarOpen);
  const updateXarrow = useXarrow();

  // useEffect to trigger updateXarrow when isSidebarOpen changes
  useEffect(() => {
    updateXarrow();
  }, [isSidebarOpen, updateXarrow]);

  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item) {
      if (item.index !== index) {
        moveThirdBoxCard(item.index, index);
        item.index = index; // Update the item's index
      }
    },
  });

  return (
    <>
      <Box
        ref={(node) => ref(drop(node))}
        sx={{
          cursor: "move",
        }}
      >
        <Box
          className="rounded-3xl px-6 py-4 flex flex-1 flex-col gap-y-[37px]"
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.black,
          }}
        >
          <Box className="flex items-center justify-between">
            <Box className="flex items-center gap-x-2">
              {/* Left connected box */}
              <Box
                className="w-5 h-5 rounded-full -ml-[60px] hidden lg:block"
                sx={{
                  bgcolor: theme.palette.primary.cardLightBg,
                }}
              >
                <div
                  onDrag={updateXarrow}
                  onStop={updateXarrow}
                  id={children}
                  className="w-[6px] h-[6px] rounded-full bg-[#83A2DB] m-2"
                />
              </Box>
              <IconButton
                sx={{
                  border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                  borderRadius: "100%",
                }}
              >
                <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
              </IconButton>
              <Typography sx={{ color: theme.palette.text.black }}>{label}</Typography>
            </Box>

            {/* Right connected box */}
            <Box
              className="w-5 h-5 rounded-full -mr-[60px] hidden lg:block"
              sx={{
                bgcolor: theme.palette.primary.cardLightBg,
              }}
            >
              <div className="w-[6px] h-[6px] rounded-full bg-[#83A2DB] m-2" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
