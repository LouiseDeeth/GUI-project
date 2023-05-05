//JS file for GUI Group project by Rebecca Nolan, Louise Deeth, and Sarah O'Connor
//2023

//index.js by Rebecca Nolan

//----------------------------------- create account -----------------------------------

function validateDetails()
{	
	
	//validity checker booleans
	let validFirstName;
	let validSurname;
	let validEmail;
	let validPassword;
	
	let existingAccount;
	let validDetails;
	
	//warning messages stored in strings
	let emptyField = "Field cannot be empty";
	let emailInvalid = "Email must contain '@'";
	let passwordInvalid = "Password must be at least 6 characters long";
	
	//warning fields to change
	let firstNameWarning = document.getElementById("firstNameWarningField");
	let surnameWarning = document.getElementById("SurnameWarningField");
	let emailWarning = document.getElementById("emailWarningField");
	let passwordWarning = document.getElementById("passwordWarningField");
	
	//input variables
	let firstNameIn = document.getElementById("FirstName").value;
	let surnameIn = document.getElementById("Surname").value;
	let emailIn = document.getElementById("EmailInput").value;
	let passwordIn = document.getElementById("PasswordInput").value;
	
	if(localStorage.FirstName != "")
	{
		alert("An account already exists.\nPlease Log In, or Delete Existing Account before signing up");
	}
	else
	{
		//save input to local storage
		localStorage.FirstName = firstNameIn;
		localStorage.LastName = surnameIn;
		localStorage.Email = emailIn;
		localStorage.Password = passwordIn;
		
		//------ invalid input options ------
		if(firstNameIn == "")
		{
			firstNameWarning.innerHTML = emptyField;
		}//if first name field is empty
		
		if(surnameIn == "")
		{
			surnameWarning.innerHTML = emptyField;
		}//if surname field is empty
		
		if(emailIn == "" || (!(emailIn.includes("@"))))
		{
			if(emailIn == "")
			{
				emailWarning.innerHTML = emptyField;
			}//if email field is empty
			else if(!(emailIn.includes("@")))
			{
				emailWarning.innerHTML = emailInvalid;
			}//if email does not include '@'			
		}//if email is empty or invalid
		
		if(passwordIn == "" || (passwordIn.length < 6))
		{
			if(passwordIn == "")
			{
				passwordWarning.innerHTML = emptyField;
			}//if password field is empty
			else if(passwordIn.length < 6)
			{
				passwordWarning.innerHTML = passwordInvalid;
			}//if password is less than 6 characters
		}//if password is empty or less than 6 characters
		
		//------ valid input options ------
		if(firstNameIn != "")
		{
			firstNameWarning.innerHTML = "";
			validFirstName = true;
		}//if first name field is not empty - valid input
		
		if(surnameIn != "")
		{
			surnameWarning.innerHTML = "";
			validSurname = true;
		}//if surname field is not empty - valid input
		
		if(emailIn.includes("@"))
		{
			emailWarning.innerHTML = "";
			validEmail = true;
		}//if email does include '@' - valid input			
		
		if(passwordIn.length > 6)
		{
			passwordWarning.innerHTML = "";
			validPassword = true;
		}//if password is more than 6 characters - valid input
		
		if(validFirstName == true && validSurname == true && validEmail == true && validPassword == true)
		{
			validDetails = true;
		}// if all fields are valid 
		
		if(validDetails == true)
		{
			
			alert("Account Created. \nPlease Login");
			Redirect2();
		}//if valid details - redirect to login page
	}//else
}//validate details function

function Redirect2()
{
	let url = "Login.html";
	location.assign(url);
}//redirect to login




//----------------------------------- home page -----------------------------------

let item1 = 0, item2 = 0, item3 = 0, item4 = 0, item5 = 0, item6 = 0, item7 = 0, item8 = 0, item9 = 0; //initialise each quantity to 0

//-- set prices of all 9 items and save in local storage --
localStorage.setItem("price1", 899.99);
localStorage.setItem("price2", 1899.99);
localStorage.setItem("price3", 1939.99);
localStorage.setItem("price4", 249.99);
localStorage.setItem("price5", 999.99);
localStorage.setItem("price6", 1274.99);
localStorage.setItem("price7", 599.99);
localStorage.setItem("price8", 634.99);
localStorage.setItem("price9", 4299.99);

// ------------- items --------------
function guitar1()
{
	alert("Added to cart");
	item1++;
	localStorage.setItem("item1Quantity", item1);
	
}//adds item 1 to cart - saving quanity to local storage
function guitar2()
{
	alert("Added to cart");
	item2++;
	localStorage.setItem("item2Quantity", item2);
}//adds item 2 to cart - saving quanity to local storage
function guitar3()
{
	alert("Added to cart");
	item3++;
	localStorage.setItem("item3Quantity", item3);
}//adds item 3 to cart - saving quanity to local storage

function keys1()
{
	alert("Added to cart");
	item4++;
	localStorage.setItem("item4Quantity", item4);
}//adds item 4 to cart - saving quanity to local storage
function keys2()
{
	alert("Added to cart");
	item5++;
	localStorage.setItem("item5Quantity", item5);
}//adds item 5 to cart - saving quanity to local storage
function keys3()
{
	alert("Added to cart");
	item6++;
	localStorage.setItem("item6Quantity", item6);
}//adds item 6 to cart - saving quanity to local storage

function drums1()
{
	alert("Added to cart");
	item7++;
	localStorage.setItem("item7Quantity", item7);
}//adds item 7 to cart - saving quanity to local storage
function drums2()
{
	alert("Added to cart");
	item8++;
	localStorage.setItem("item8Quantity", item8);
}//adds item 8 to cart - saving quanity to local storage
function drums3()
{
	alert("Added to cart");
	item9++;
	localStorage.setItem("item9Quantity", item9);
}//adds item 9 to cart - saving quanity to local storage


