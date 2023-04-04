import { Box } from "@mui/material";
import { ExpenseItem } from "./expenses-list.styled";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import ImageIcon from "@mui/icons-material/Image";
import { customScroll } from "../../expanses.styled";
import { colorPalette } from "../../../../utils/colorPalette";

export const icons = {
  Bills: (
    <ReceiptIcon
      sx={{
        color: colorPalette["Bills"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></ReceiptIcon>
  ),
  Home: (
    <HomeRoundedIcon
      sx={{
        color: colorPalette["Home"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></HomeRoundedIcon>
  ),
  Entertainment: (
    <TheaterComedyIcon
      sx={{
        color: colorPalette["Entertainment"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></TheaterComedyIcon>
  ),
  Groceries: (
    <LocalGroceryStoreIcon
      sx={{
        color: colorPalette["Groceries"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></LocalGroceryStoreIcon>
  ),
  Restaurants: (
    <RestaurantRoundedIcon
      sx={{
        color: colorPalette["Restaurants"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></RestaurantRoundedIcon>
  ),
  Food: (
    <FastfoodRoundedIcon
      sx={{
        color: colorPalette["Food"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></FastfoodRoundedIcon>
  ),
  Insurence: (
    <SafetyCheckIcon
      sx={{
        color: colorPalette["Insurence"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></SafetyCheckIcon>
  ),
  Communication: (
    <SatelliteAltIcon
      sx={{
        color: colorPalette["Communication"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></SatelliteAltIcon>
  ),
  Transportation: (
    <DirectionsBusIcon
      sx={{
        color: colorPalette["Transportation"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></DirectionsBusIcon>
  ),
  Energy: (
    <GasMeterIcon
      sx={{
        color: colorPalette["Energy"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></GasMeterIcon>
  ),
  Other: (
    <ImageIcon
      sx={{
        color: colorPalette["Other"],
        marginRight: ".5em",
        fontSize: "2.3em",
      }}
    ></ImageIcon>
  ),
};

function formatDate(date) {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function ExpenseListComponent({
  setChosenExpense,
  expenseList,
  chosenExpense,
}) {
  return (
    <Box sx={customScroll}>
      {expenseList &&
        expenseList.map((item) => (
          
          <ExpenseItem
            onClick={() =>
              setChosenExpense(chosenExpense?.ExpensesId === item.ExpensesId ? "" : item)
            }
            className={chosenExpense?.ExpensesId === item.ExpensesId ? "highlight" : ""}
            key={item.ExpensesId}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icons[item.Category]}
              <div>
                <div
                  style={{
                    fontSize: "1.1em",
                    fontWeight: 600,
                    color: "var(--purple-light)",
                  }}
                >
                  {item.Name}
                </div>
                <div style={{ fontSize: ".8em", color: "gray" }}>
                  {formatDate(item.Date)}
                </div>
              </div>
            </Box>
            <div
              style={{
                fontSize: "1.4em",
                color: "var(--purple-dark)",
                fontWeight: 500,
              }}
            >
              {item.Sum}₪
            </div>
          </ExpenseItem>
          
        ))}
        
    </Box>
  );
}
