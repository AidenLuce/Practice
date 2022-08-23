let groceryListPrices = [['bread', 4.99], ['eggs', 3.99], ['milk', 4.49], ['tomatoes', 3.49], ['pasta', .99], ['ice cream', 4.99], ['tortillas', 2.99]]
let selectItems = prompt('please select ONE of the following items \nbread, eggs, milk, tomatoes, pasta, ice cream, tortillas')
while (selectItems !== "stop"){
    selectItems = prompt("Enter the price of your next item:");
    if (selectItems === "stop"){
        alert('Your final total is: ')
    }
}