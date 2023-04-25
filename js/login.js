//----------------------------------- login -----------------------------------

//strings to display if invalid fields
let strInvalidEmail = "Email must contain '@'";
let strInvalidPass = "Enter a valid password";
let strIncorrectEmail = "Incorrect Email";
let strIncorrectPass = "Incorrect Password";


function checkValid()
{
	//initialise variables to hold email + password
	let validEmail;
	let validPass;
	
	//retrieve input from user
	let emailInput = document.getElementById("emailField").value;
	let passwordInput = document.getElementById("passwordField").value;
	
	//retrieve correct details from local storage
	let correctEmail = localStorage.getItem("Email");
	let correctPass = localStorage.getItem("Password");
	let name = localStorage.getItem("FirstName");
	
	
	if(correctEmail == "" || correctPass == "")
	{
		alert("Please Create an Account");
	}//if no account created yet - no details stored
	
	else
	{
		if(emailInput == "" && passwordInput == "")
		{
			alert("Please enter valid email and password.");
		}//if email and password are empty
		
		if(!(emailInput.includes("@")))
		{
			let changeEmailWarning = document.getElementById("invalidFeedbackEmail");
			changeEmailWarning.innerHTML = strInvalidEmail;
			
		}//if email does not include @ 
		else if(emailInput.includes("@"))
		{
			let changeEmailWarning = document.getElementById("invalidFeedbackEmail");
			changeEmailWarning.innerHTML = "";
		}// if email includes @
		
		if(emailInput != correctEmail)
		{
			let changeEmailWarning = document.getElementById("invalidFeedbackEmail");
			changeEmailWarning.innerHTML = strIncorrectEmail;
		}//if incorrect email
		
		if(passwordInput == "" || passwordInput != correctPass)
		{
			if(passwordInput == "")
			{
				let changePassWarning = document.getElementById("invalidFeedbackPass");
				changePassWarning.innerHTML = strInvalidPass;
			}//if password is empty
			else if(passwordInput != correctPass)
			{
				let changePassWarning = document.getElementById("invalidFeedbackPass");
				changePassWarning.innerHTML = strIncorrectPass;
			}//if password is incorrect
		}//if password is empty or wrong
		
		if(emailInput == correctEmail)
		{
			let changeEmailWarning = document.getElementById("invalidFeedbackEmail");
			changeEmailWarning.innerHTML = "";
			validEmail = true;
		}//if email is correct
		
		if(passwordInput == correctPass)
		{
			let changePassWarning = document.getElementById("invalidFeedbackPass");
			changePassWarning.innerHTML = "";
			validPass = true;
		}//if password is correct
		
		if(validEmail == true && validPass == true)
		{
			alert("welcome, " + name + "!");
			Redirect1();
		}//if login successful - redirect to home page!
	}//else account has been created
}//function checkValid()

function Redirect1()
{	
	let url = "Home.html";
	location.assign(url);
}//redirects to home page

function deleteAccount()
{
	//--- remove details from local storage ---
	localStorage.setItem("FirstName", "");
	localStorage.setItem("LastName", "");
	localStorage.setItem("Password", "");
	localStorage.setItem("Email", "");
	
	alert("Your account has been deleted");
}//deletes user's given info - name, email, password