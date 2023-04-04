import { styled, Container } from "@mui/material";

export const ExpenseItem = styled(Container)(() => ({
  paddingTop: ".5em",
  paddingBottom: ".5em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "&:hover": {
    background: "var(--purple-light-opacity-20)",
    cursor: "pointer",
  },
  "&.highlight": {
    background: "var(--purple-light-opacity-20)",
  },
  "&:active": {
    background: "var(--purple-light-opacity-10)",
  },
}));
