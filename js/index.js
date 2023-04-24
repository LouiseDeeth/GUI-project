//JS file for GUI Group project by Rebecca Nolan, Louise Deeth, and Sarah O'Connor
//2023

//sarah

//----------------------------------- create account -----------------------------------

function Submitted()
{
	if(form.checkValidity())
	{
		Name = document.getElementById("name").value;
		Surname = document.getElementById("surname").value;
		Email = document.getElementById("email").value;
		Pass = document.getElementById("password").value;
		
		//add details to local storage
		
		localStorage.FirstName = Name;
		localStorage.LastName = Surname;
		localStorage.Email = Email;
		localStorage.Password = Pass;
				
		
		alert(Surname);
	}//if form is validated
}
//----------------------------------- login -----------------------------------
function Redirect1()
{	
	if(form.checkValidity())
	{
		let url = "Home.html";
		location.assign(url);
	}//if
}//redirects to home page if input is valid


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


