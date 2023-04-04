const apiUrl_Expanse="http://localhost:64059/api/Expanse";
const apiUrl_Expanse1="http://localhost:64059/api/Expanse/DeleteExpanse";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function randChangeOfSuccess() {
  // chance of success is 99.999999%
  return Math.random() > 0.0000001;
}

function returnAsync(data, success = randChangeOfSuccess()) {
  // Simulate async call
  // chance of success is 95%
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject(new Error("DB Error: Something went wrong, please try again!"));
      }
    });
  });
}



if(!localStorage.getItem("filters")) {
  localStorage.setItem("filters", JSON.stringify({
    year: new Date().getFullYear(),
    month: months[new Date().getMonth()]
  }));
}

function orderByDate(a, b) {
  return new Date(b.Date) - new Date(a.Date);
}


async function getAllExpenses() {
  let email = JSON.parse(localStorage.getItem("connectEmail"));
 try {
  const data = await getExpenses_byEmail(email);
   data.sort(orderByDate);
   return data;
  }catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }

}


export async function getFilterOptions() {
  let temp =  await getAllExpenses();
  //Get distinct years
  let years = [
    ...new Set(temp.map((item) => new Date(item.Date).getFullYear())),
  ];
  let categories = [
    "Home",
    "Bills",
    "Energy",
    "Insurence",
    "Communication",
    "Food",
    "Transportation",
    "Entertainment",
    "Groceries",
    "Restaurants",
    "Other",
  ];
  //Get min and max sum
  let minSum = Math.min(...temp.map((item) => item.Sum));
  let maxSum = Math.max(...temp.map((item) => item.Sum));
  return returnAsync({
    years,
    months,
    categories,
    minSum,
    maxSum,
  });
  //return { years, months, categories, minSum, maxSum };
}


export async function addExpense(expenseObject) {

  let connectEmail = JSON.parse(localStorage.getItem("connectEmail"));
  expenseObject['Email'] = connectEmail;

  const data = await addUserExpenses(expenseObject);

  return data;
    
}

export async function _deleteExpense(id) {
  if (randChangeOfSuccess()) {
    // if function returns true, delete expense
    

    const IDD = await deleteExpenses_byId(id);
    
    return true;
  }
  return false;
}


function saveFilterSelections(filters) {
  localStorage.setItem("filters", JSON.stringify(filters));
}



export function getLastSelectedFilters() {
  try {
    return returnAsync(JSON.parse(localStorage.getItem("filters")));
  } catch (e) {
    return returnAsync(e, false);
  }
}

// get expansed by chosen filter from DB (expanses.jsx)
export async function getExpenses(filterObject) {
  try {
    if (randChangeOfSuccess()) {
      let temp =  await getAllExpenses();

      temp.map((item) => {
        item.month = months[new Date(item.Date).getMonth()];
        item.year = new Date(item.Date).getFullYear();
        return item;
      });

      if (!filterObject) return temp;
      //If no filter is selected, set default filter to current month and year

      if (filterObject.year) {
        temp = temp.filter(
          (item) => new Date(item.Date).getFullYear() === filterObject.year
        );
      }
      if (filterObject.month) {
        temp = temp.filter(
          (item) =>
            months[new Date(item.Date).getMonth()] === filterObject.month
        );
      }
      if (filterObject.category) {
        temp = temp.filter((item) => item.Category === filterObject.category);
      }
      if (filterObject.startSum) {
        temp = temp.filter((item) => item.Sum >= filterObject.startSum);
      }
      if (filterObject.endSum) {
        temp = temp.filter((item) => item.Sum <= filterObject.endSum);
      }
      saveFilterSelections(filterObject);
      return returnAsync(temp);
    }
  } catch (e) {
    return returnAsync(e, false);
  }
}



//---------fetch-----------

async function addUserExpenses(userExpenses){
  
  const response = await fetch(apiUrl_Expanse, {
    method: 'POST',
    body: JSON.stringify(userExpenses),
    headers: new Headers({
      'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
      'Accept': 'application/json; charset=UTF-8',
    })
  })
  if (!response.ok)
  {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}
    

async function getExpenses_byEmail(email){
  const response = await fetch(apiUrl_Expanse + "?email="+ email, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8',
    })
  })
  if (!response.ok)
  {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data; 
}



async function deleteExpenses_byId(id){
  const response = await fetch(apiUrl_Expanse1 , {
    method: 'Delete',
    body: JSON.stringify(id),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8',
    })
  })
  if (!response.ok)
  {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data; 
}

 
