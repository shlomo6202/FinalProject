export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid var(--purple-light)",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export const datePickerStyle = {
  width: "40%",
  marginTop: "10px",
  marginLeft: "8px",
};

export const categoryDropDownStyle = {
  width: "50.5%",
  marginTop: "10px",
  marginLeft: "15px",
  "& .MuiSelect-select.MuiInputBase-input": {
    display: "flex",
    alignItems: "center",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.4em",
  },
};

export const descriptionStyle = {
  m: 1,
  marginTop: "20px",
  width: "94%",
};
