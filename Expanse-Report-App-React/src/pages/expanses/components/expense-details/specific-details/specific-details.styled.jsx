import { styled } from "@mui/material";
import { Container } from "@mui/system";

export const ExpenseHeader = styled(Container)(() => ({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "var(--purple-dark)",
  opacity: 0.5,
  textAlign: "center",
  span: {
    position: "relative",
    right: 20,
    margin: "0 auto",
    color: "white",
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 400,
    fontSize: "1.1em",
    lineHight: 1.5,
  },
}));

export const sumText = {
  fontSize: "50px",
  fontWeight: 500,
  color: "var(--purple-dark)",
  padding: "0px",
  margin: "0px",
};

export const CatDateWrapper = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "0px",
  margin: "30px 0 20px 0",
  div: {
    fontSize: "14px",
    fontWeight: 0,
    width: "30%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--purple-light-opacity-20)",
    padding: "10px",
    borderRadius: "10px",
    color: "black",
  },
}));

export const MapWrapper = styled(Container)(() => ({
  width: "100%",
}));
export const mapStyle = {
  width: "300px",
  height: "300px",
  borderRadius: "10px",
  boxShadow: "0px 0px 50px 0px var(--purple-light-opacity-20)",
};

export const BottomButtons = styled(Container)(() => ({
  width: "100%",
}));

export const Description = styled(Container)(() => ({
  display: "block",
  backgroundColor: "var(--purple-light-opacity-20)",
  padding: "10px",
  borderRadius: "10px",
  marginBottom: "20px",
}));
