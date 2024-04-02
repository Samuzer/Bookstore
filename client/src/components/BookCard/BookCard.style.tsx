import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  zIndex: 1
}));
