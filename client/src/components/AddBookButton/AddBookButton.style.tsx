import { Fab } from "@mui/material";
import { styled } from "@mui/system";

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  right: theme.spacing(2),
  bottom: theme.spacing(2)
}));
