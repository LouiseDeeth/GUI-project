//JS file for GUI Group project by Rebecca Nolan, Louise Deeth, and Sarah O'Connor
//2023

//aboutus.js by Louise Deeth

//----------------------------------- About Us -----------------------------------

// Get the current date and time
const now = new Date();
const dayOfWeek = now.getDay();
const hour = now.getHours();

// Check if the store is currently open
let isOpen = false;
if (dayOfWeek >= 1 && dayOfWeek <= 3 && hour >= 9 && hour < 17) 
{
  isOpen = true;
} 
else if (dayOfWeek === 4 && hour >= 9 && hour < 20) 
{
	isOpen = true;
}
 else if (dayOfWeek === 5 && hour >= 9 && hour < 18) 
{
	isOpen = true;
} 
else if (dayOfWeek === 6 && hour >= 10 && hour < 16) 
{
	isOpen = true;
}

const storeStatus = document.getElementById("hours");
if (isOpen) 
{
	storeStatus.innerHTML = "We are open!";
	storeStatus.style.color = "red"; // Set the color to red
} 
else 
{
	storeStatus.innerHTML = "Sorry, we're closed.";
	storeStatus.style.color = ""; // Reset the color to default
}

// Set the color of the relevant <li> tag to red if the store is open
const listItems = document.querySelectorAll("#hours ul li");
if (isOpen) 
{
	switch (dayOfWeek) 
	{
		case 1: listItems[0].style.color = "red"; break;
		case 2: listItems[1].style.color = "red"; break;
		case 3: listItems[2].style.color = "red"; break;
		case 4: listItems[3].style.color = "red"; break;
		case 5: listItems[4].style.color = "red"; break;
		case 6: listItems[5].style.color = "red"; break;
	}
}
