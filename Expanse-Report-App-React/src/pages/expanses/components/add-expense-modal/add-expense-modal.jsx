import {
  modalStyle,
  datePickerStyle,
  categoryDropDownStyle,
  descriptionStyle,
} from "./add-expense-modal.styled";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DescriptionIcon from "@mui/icons-material/Description";
import Alert from "@mui/material/Alert";
import { createNotification } from "../../../../notificationService/notifications";
import {
  Backdrop,
  Modal,
  Fade,
  OutlinedInput,
  InputAdornment,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { icons } from "../expenses-list/expenses-list";
import dayjs from "dayjs";
import React from "react";
import {
  addExpense,
  getFilterOptions,
  months,
} from "../../../../backendService/backend";

import { useState } from "react";
import { useEffect } from "react";
export default function AddExpenseModalComponent({
  open,
  setOpen,
  setFilterSelections,     
  setChosenExpense,        
  
}) {
  const [dateValue, setDateValue] = useState(dayjs(new Date()));
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [sum, setSum] = useState("");
  const [alertUser, setAlertUser] = useState(false);
  const [categoriesToDisplay, setCategoriesToDisplay] = useState([]);

  useEffect(() => {
    getFilterOptions().then((res) => {
      setCategoriesToDisplay(res.categories);
    }).catch((err) => {
      createNotification('error', 'Error getting categories from server!')
      console.log(err)
    });
  }, []);


  const checkValidation = () => {
    return !!dateValue && !!name && !!category && !!sum;
  };
  

  const handleAddNewExpense = () => {

    if (!checkValidation()) {
      setAlertUser(true);
      return;
    }

    let expenseObject = {
      name: name,
      category: category,
      description: description,
      sum: +sum,
      date: dateValue,
    };

    setFilterSelections({
      year: new Date(expenseObject.date).getFullYear(),
      month: months[new Date(expenseObject.date).getMonth()],
    });

    addExpense(expenseObject).then((res) => {
      setChosenExpense(res);              
      closeModal();
      createNotification('success', 'Expense added successfully!');
    }).catch((err) => {
      createNotification('error', 'Error adding expense to server!')
      console.log(err)
    });

  };

  const resetInputs = () => {
    setCategory("");
    setName("");
    setDateValue(dayjs(new Date()));
    setDescription("");
    setSum("");
  };

  const closeModal = () => {
    resetInputs();
    setOpen(false);
    setAlertUser(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Typography
            sx={{ color: "var(--purple-light)", marginBottom: "1em" }}
            id="transition-modal-title"
            variant="h6"
            component="h2"
          >
            Add Expense
          </Typography>

          <TextField
            label="Bussiness Name"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "50%" }}
            onChange={(e) => {
              setName(e.target.value);
              checkValidation();
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StorefrontIcon />
                </InputAdornment>
              ),
            }}
            color="secondary"
          />
          <FormControl sx={{ m: 1, width: "40%" }} color="secondary">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              startAdornment={
                <InputAdornment position="start">₪</InputAdornment>
              }
              label="Amount"
              onChange={(e) => {
                setSum(e.target.value);
                checkValidation();
              }}
            />
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Date"
              inputFormat="DD/MM/YYYY"
              value={dateValue}
              onChange={(value) => {
                setDateValue(value);
                checkValidation();
              }}
              renderInput={(params) => (
                <TextField
                  style={datePickerStyle}
                  {...params}
                  color="secondary"
                />
              )}
            />
          </LocalizationProvider>
          <TextField
            id="outlined-select"
            select
            label="Category"
            sx={categoryDropDownStyle}
            value={category ?? ""}
            onChange={(e) => {
              setCategory(e.target.value);
              checkValidation();
            }}
            color="secondary"
          >
            {categoriesToDisplay.map((option) => (
              <MenuItem key={option} value={option}>
                {icons[option]}
                <span sx={{ fontSize: "16px" }}>{option}</span>
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Decsription"
            sx={descriptionStyle}
            id="outlined-start-adornment"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
            color="secondary"
          />
          <Button
            sx={{
              m: 1,
              width: "45%",
            }}
            onClick={closeModal}
            variant="outlined"
            color="secondary"
          >
            Close
          </Button>

          <Button
            sx={{
              m: 1,
              width: "45%",
              background: "var(--purple-light)",
              "&:hover": {
                background: "var(--purple-hover)",
              },
            }}
            onClick={() => {
              handleAddNewExpense();
            }}
            variant="contained"
            color="secondary"
          >
            Add Expense
          </Button>

          {alertUser && (
            <Alert sx={{ marginTop: "20px" }} severity="error">
              Error: You must fill all the fields!
            </Alert>
          )}
          
        </Box>
      </Fade>
    </Modal>
  );
}
