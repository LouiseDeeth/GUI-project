//----------------------------------- checkout -----------------------------------

//display cart 
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

//------ order details validation ------

let nameWarning = "Valid name required";
let emailWarning = "Must include @. Please enter valid Email Address";
let addressWarning = "Please enter valid shipping address";
let countryWarning = "Please input a valid country";
let countyWarning = "Please provide a valid county";

let canSubmit;
let firstNameValid;
let surnameValid;
let emailValid;
let addressValid;
let countryValid;
let countyValid;

function checkOut()
{
	if(totalCost == 0)
	{
		alert("Cart empty - cannot proceed with Checkout");
	}
	else
	{
		//receive input from user
		let firstNameInput = document.getElementById("firstNameIn").value;
		let lastNameInput = document.getElementById("lastNameIn").value;
		let emailInput = document.getElementById("emailIn").value;
		let addressInput = document.getElementById("addressIn").value;
		let countryInput = document.getElementById("countryIn").value;
		let countyInput = document.getElementById("countyIn").value;
		
		//target warning divs to display invalid messages
		let firstNameWarningCh = document.getElementById("firstNameChange");
		let lastNameWarningCh = document.getElementById("surnameChange");
		let emailWarningCh = document.getElementById("emailChange");
		let addressWarningCh = document.getElementById("addressChange");
		let countryWarningCh = document.getElementById("countryChange");
		let countyWarningCh = document.getElementById("countyChange");
		
		if(firstNameInput == "")
		{
			firstNameWarningCh.innerHTML = nameWarning;
		}//if firstName input is empty
		else if(firstNameInput != "")
		{
			firstNameWarningCh.innerHTML = "";
			firstNameValid = true;
		}//if first name is valid
		
		if(lastNameInput == "")
		{
			lastNameWarningCh.innerHTML = nameWarning;
		}//if last name is empty
		else if(lastNameInput != "")
		{
			lastNameWarningCh.innerHTML = "";
			surnameValid = true;
		}//if last name is valid
		
		if(!(emailInput.includes("@")) || emailInput == "")
		{
			emailWarningCh.innerHTML = emailWarning;
		}//if email doesnt include @ symbol or is left empty
		else if(emailInput.includes("@") && emailInput != "")
		{
			emailWarningCh.innerHTML = "";
			emailValid = true;
		}//if valid email
		
		if(addressInput == "")
		{
			addressWarningCh.innerHTML = addressWarning;
		}//if address invalid
		else if(addressInput != "")
		{
			addressWarningCh.innerHTML = "";
			addressValid = true;
		}//if address valid
		
		if(countryInput == "")
		{
			countryWarningCh.innerHTML = countryWarning;
		}//if country invalid
		else if(countryInput != "")
		{
			countryWarningCh.innerHTML = "";
			countryValid = true;
		}//if country valid
		
		if(countyInput == "")
		{
			countyWarningCh.innerHTML = countyWarning;
		}//if county invalid
		else if(countyInput != "")
		{
			countyWarningCh.innerHTML = "";
			countyValid = true;
		}//if county valid

		if(firstNameValid == true && surnameValid == true && emailValid == true && addressValid == true && countryValid == true && countyValid == true)
		{
			canSubmit = true;
		}//if all fields are valid

		
		if(canSubmit == true)
		{
			alert("Order Recieved! Thank you for shopping with us.");
			emptyCart();
		}
	}//if items in cart - can proceed with checkout
}//function to validate input details and check out order

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
	
	location.reload();//reloads page to refresh cart
	
}//empties cart - removes previously stored quantities and sets them back to 0

