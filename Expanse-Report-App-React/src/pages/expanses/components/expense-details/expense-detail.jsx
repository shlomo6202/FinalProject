import React from "react";
import SpecificExpenseDetails from "./specific-details/specific-details";
import GeneralDetails from "./general-details/general-details";

export default function ExpenseDetailsComponent({
  setChosenExpense,
  chosenExpense,
  deleteExpense,
  expenseList,
  currentFilters,
}) {
  return chosenExpense ? (
    <SpecificExpenseDetails
      chosenExpense={chosenExpense}
      setChosenExpense={setChosenExpense}
      deleteExpense={deleteExpense}
    ></SpecificExpenseDetails>
  ) : (
    <GeneralDetails
      currentFilters={currentFilters}
      expenseList={expenseList}
    ></GeneralDetails>
  );
}
