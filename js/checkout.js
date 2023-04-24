//----------------------------------- checkout -----------------------------------

//item 1
let item1CostChange = document.getElementById("item1Amt");
let item1Cost = Number(localStorage.getItem("price1")) * Number(localStorage.getItem("item1Quantity"));
item1CostChange.innerHTML = "€ " + item1Cost;

//item 2
let item2CostChange = document.getElementById("item2Amt");
let item2Cost = Number(localStorage.getItem("price2")) * Number(localStorage.getItem("item2Quantity"));
item2CostChange.innerHTML = "€ " + item2Cost;

//item 3
let item3CostChange = document.getElementById("item3Amt");
let item3Cost = Number(localStorage.getItem("price3")) * Number(localStorage.getItem("item3Quantity"));
item3CostChange.innerHTML = "€ " + item3Cost;

//item 4
let item4CostChange = document.getElementById("item4Amt");
let item4Cost = Number(localStorage.getItem("price4")) * Number(localStorage.getItem("item4Quantity"));
item4CostChange.innerHTML = "€ " + item4Cost;

//item 5
let item5CostChange = document.getElementById("item5Amt");
let item5Cost = Number(localStorage.getItem("price5")) * Number(localStorage.getItem("item5Quantity"));
item5CostChange.innerHTML = "€ " + item5Cost;

//item 6
let item6CostChange = document.getElementById("item6Amt");
let item6Cost = Number(localStorage.getItem("price6")) * Number(localStorage.getItem("item6Quantity"));
item6CostChange.innerHTML = "€ " + item6Cost;

//item 7
let item7CostChange = document.getElementById("item7Amt");
let item7Cost = Number(localStorage.getItem("price7")) * Number(localStorage.getItem("item7Quantity"));
item7CostChange.innerHTML = "€ " + item7Cost;

//item 8
let item8CostChange = document.getElementById("item8Amt");
let item8Cost = Number(localStorage.getItem("price8")) * Number(localStorage.getItem("item8Quantity"));
item8CostChange.innerHTML = "€ " + item8Cost;

//item 9
let item9CostChange = document.getElementById("item9Amt");
let item9Cost = Number(localStorage.getItem("price9")) * Number(localStorage.getItem("item9Quantity"));
item9CostChange.innerHTML = "€ " + item9Cost;

//total
let totalCost = item1Cost + item2Cost + item3Cost + item4Cost + item5Cost + item6Cost + item7Cost + item8Cost + item9Cost;
totalCost = Math.round(totalCost * 100) / 100; //round to 2 decimal places

let totalCostChange = document.getElementById("totalCost");
totalCostChange.innerHTML = "€ " + totalCost;


function emptyCart()
{
	//--- set all item quantities to 0 ---
	localStorage.setItem("item1Quantity", 0);
	localStorage.setItem("item2Quantity", 0);
	localStorage.setItem("item3Quantity", 0);
	localStorage.setItem("item4Quantity", 0);
	localStorage.setItem("item5Quantity", 0);
	localStorage.setItem("item6Quantity", 0);
	localStorage.setItem("item7Quantity", 0);
	localStorage.setItem("item8Quantity", 0);
	localStorage.setItem("item9Quantity", 0);
	
	
	alert("Your cart has been emptied");
	
	location.reload();
}//empty cart

function deleteAccount()
{
	//--- remove details from local storage ---
	localStorage.removeItem("FirstName");
	localStorage.removeItem("LastName");
	localStorage.removeItem("Password");
	localStorage.removeItem("Email");
	
	alert("Your account has been deleted");
}//deletes user's given info - name, email, password