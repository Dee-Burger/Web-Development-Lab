
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const addBtn = document.getElementById("add-btn");
const filterSelect = document.getElementById("filter-category");
const totalDisplay = document.getElementById("total-amount");
const expenseList = document.getElementById("expense-list");


let expenses = [];


addBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const amount = Number(amountInput.value); // Convert text to a number
  const category = categoryInput.value;

  
    alert("Please enter a valid name and amount.");
    return;
  }

  
  const newExpense = {
    name: name,
    amount: amount,
    category: category
  };
  expenses.push(newExpense);

  
  nameInput.value = "";
  amountInput.value = "";

  
  renderExpenses();
});


filterSelect.addEventListener("change", function () {
  renderExpenses();
});


function renderExpenses() {
  expenseList.innerHTML = ""; // Clear current list
  let total = 0;
  const selectedCategory = filterSelect.value;

 
  for (let i = 0; i < expenses.length; i++) {
    const item = expenses[i];

    
    if (selectedCategory === "All" || item.category === selectedCategory) {
      
      total = total + item.amount;

      
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.name} (${item.category}) - ₹${item.amount}</span>
        <button class="delete-btn" onclick="deleteExpense(${i})">X</button>
      `;

      
      expenseList.appendChild(li);
    }
  }

 
  totalDisplay.textContent = total;
}


function deleteExpense(index) {
  expenses.splice(index, 1); 
  renderExpenses();          
}