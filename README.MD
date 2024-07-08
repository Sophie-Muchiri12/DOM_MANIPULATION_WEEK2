# Shopping List
This is a simple shopping list application built using Document Object Model Manipulation ,HTML and CSS.

The application allows users to add items to a shopping list,mark items as purchased and delete items from the list.Users can also clear the entire shopping list with a single click

## HOW IT WORKS
### HTML STRUCTURE
1.The HTML file includes an input field for adding new items, an Add button to add items to the shopping list, a ClearList button to clear the entire list and an unordered list to display the shopping items

2.Basic CSS has been applied to style the shopping list

3. javascript has been applied for the functionality of the shopping list
## JAVASCRIPT : DOM MANIPULATION
The javascript code manages the shopping list

### addshopping() function
The addshopping function updates the displayed shopping list based on the current state of the shoppingArray

-shopList.innerHTML = ''  clears all the HTML content

-shoppingArray.forEach iterates through the array creating 'li' element(list item), 'itemName'a span for the name of the item, 'deleteButton' and 'purchased button'

#### -adds event listeners to deleteButton and purchased button:

##### purchasedButton.addEventListener
1.allows users to mark an item as purchased 

2.click event on purchasedButton,when purchasedButton is clicked the callback function executes :

functionality:
  shoppingArray[index].purchased = !shoppingArray[index].purchased
toggles the purchased status of the item at index in shoppingArray

    addshopping() - updates the shopping list display after modifying the 'purchased' status

##### deleteButton.addEvenListener
1.allows users to delete an item from the shopping list

2.click event on deleteButton,when
deleteButton is clicked the callback function executes :

functionality:
shoppingArray.splice(index,1)
removes the item from shoppingArray

    addshopping() - updates the shopping list display after removing the item


### additems() function :
This function adds a new item to shoppingArray when the user clicks the addButton

1.It retrieves the from shop input
     const inputValue = shopInput.value.trim()

2.if the input is not  empty it creates a new object with name as the input value and purchased initially set to false

3.clears the input field after adding an item

### clearList() function :
clears all the items in the shopping list

1.sets shoppingArray to an empty string

2.calls addshopping() to update the displayed list

#### Event Listeners
1.addButton when clicked it triggers additems() to add new item

2.clearButton when clicked it triggers clearList() to clear entire shopping list