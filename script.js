const shopInput = document.getElementById('shopInput')  // creating a variable that references to the id 
const clearButton = document.getElementsByClassName('clearList') [0]// creating a variable that references to the clas
 const shopList = document.getElementById('shopList') // creating a variable that references to the id 
 const addButton = document.getElementsByClassName('addButton')[0] // creating a variable that references to the class
 





let shoppingArray = [] //creates an empty array where items will be pushed/added to the lists 

function addshopping(){
   shopList.innerHTML = '' //sets the shopping list to be initially empty

   shoppingArray.forEach( // iterates through each object in the shopping array with every iteration creates li element,
     function(item,index){// 'itemName'a span for the name of the item, 'deleteButton' and 'purchased button'

        const li = document.createElement('li')
        const itemName = document.createElement('span')
        const deleteButton = document.createElement('button')
        const purchasedButton = document.createElement('button')
        


       
itemName.textContent = item.name // text content to be stored in name object
deleteButton.textContent = 'delete'
deleteButton.className = 'deleteButton'
purchasedButton.textContent = item.purchased ? 'purchased' : 'mark purchased'//checks whether item.purchased is true if it is true
//then text will be purchased otherwise it will remain mark purchased
purchasedButton.className = 'purchased'
deleteButton.style.marginLeft = '350px'

if(item.purchased){          //checks whether item.purchased is true if it is true
                            //then text will be purchased otherwise it will remain mark purchased
    li.classList.add('purchased')
}


// append to DOM
li.appendChild(itemName)
li.appendChild(deleteButton)
li.appendChild(purchasedButton)
shopList.appendChild(li)




// PURCHASED BUTTON EVENT LISTENER
purchasedButton.addEventListener('click',function(){
    
    shoppingArray[index].purchased = !shoppingArray[index].purchased
    

    addshopping()
})

// DELETE EVENT LISTENER
deleteButton.addEventListener('click',function(){
    shoppingArray.splice(index,1)
    addshopping()
})

     }
   )
}



function additems(){
    const inputValue = shopInput.value.trim()
    if(inputValue === ''){
        return
    }

    shoppingArray.push({ // any input value stored in name object is pushed to the shoppingArray
       name:inputValue, 
       purchased:false   // purchased is initially set to false
    })
    shopInput.value = '' // after adding an item the input section becomes empty once more
    addshopping()
    
}

function clearList(){
    shoppingArray = [] // clears the entire list hence an epty brackets is set
    addshopping()
}

addButton.addEventListener('click',additems) // when clicked it triggers additems() to add new item
clearButton.addEventListener('click',clearList)  //when clicked it triggers clearList() to clear entire shopping list