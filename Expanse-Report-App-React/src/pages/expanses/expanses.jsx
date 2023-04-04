import { StyledContainer, StyledBox } from "./expanses.styled";
import ExpenseDetailsComponent from "./components/expense-details/expense-detail";
import ExpenseListComponent from "./components/expenses-list/expenses-list";
import ExpenseToolbarComponent from "./components/expenses-toolbar/expenses-toolbar";
import { useState, useEffect,useContext } from "react";
import { getExpenses, _deleteExpense } from "../../backendService/backend";
import { Typography, Container } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import { createNotification } from "../../notificationService/notifications";
import {buttonContext} from "../../App";
import Button from '@mui/material/Button';


export default function ExpensesComponent() {
  const [currentFilters, setCurrentFilters] = useState();
  const [chosenExpense, setChosenExpense] = useState();
  const [expenseList, setExpenseList] = useState();
  const [openSB, setOpenSB] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("success");
  const [sbBorderColor, setSbBorderColor] = React.useState("darkseagreen");

  const handleCloseSB = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSB(false);
  };

  useEffect(() => {
    document.addEventListener(
      "openSnakeBar",
      (e) => {
        setMessage(e.detail.message);
        setMessageType(e.detail.type);
        if (e.detail.type === "success") setSbBorderColor("darkseagreen");
        else if (e.detail.type === "warning") setSbBorderColor("orange");
        else if (e.detail.type === "error") setSbBorderColor("palevioletred");
        else setSbBorderColor("lightblue");
        setOpenSB(true);
      },
      false
    );
  }, []);
  
  useEffect(() => {
    if(currentFilters){
      getExpenses(currentFilters).then((res) => {
        setExpenseList(res);
      }
      ).catch((err) => {
        createNotification("error", "Error getting expenses from server!");
        console.log(err);
      }
      );
    }
  }, [currentFilters]);

  const deleteExpense = (ExpensesId) => {
    return new Promise((resolve, reject) => {
      _deleteExpense(chosenExpense.ExpensesId)
        .then((res) => {
          setExpenseList(expenseList.filter((expense) => expense.ExpensesId !== ExpensesId));
          setChosenExpense();
          resolve();
        })
        .catch((err) => {
          reject();
        });
    });
  };


  return (
    

    <StyledContainer disableGutters>
      <ExpenseToolbarComponent
        handleApply={setCurrentFilters}
        setChosenExpense={setChosenExpense}
      ></ExpenseToolbarComponent>
      {expenseList?.length ? (
        <StyledBox>
          <ExpenseListComponent
            chosenExpense={chosenExpense}
            expenseList={expenseList}
            setChosenExpense={setChosenExpense}
          ></ExpenseListComponent>
          <ExpenseDetailsComponent
            currentFilters={currentFilters}
            setChosenExpense={setChosenExpense}
            chosenExpense={chosenExpense}
            deleteExpense={deleteExpense}
            expenseList={expenseList}
          ></ExpenseDetailsComponent>
        </StyledBox>
      ) : (
        <Container sx={{ textAlign: "center" }} disableGutters>
          <Typography sx={{ background: "var(--purple-light-opacity-20)" }}>
            Oops... there seems to be no data matching your selections
          </Typography>
        </Container>
      )}
      <Snackbar
        sx={{
          border: "1px solid",
          borderColor: sbBorderColor,
          borderRadius: "10px",
          overflow: "hidden",
          position: "fixed",
          left: "50% !important",
          transform: "translateX(-50%)",
        }}
        open={openSB}
        autoHideDuration={4000}
        onClose={handleCloseSB}
      >
        <Alert severity={messageType}>{message}</Alert>
      </Snackbar>
    </StyledContainer>
  );
}
