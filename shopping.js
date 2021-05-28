const shoppingList = [
    {
        id: 1,
        name: "Mango juice",
        price: 5
    },
    {
        id: 2,
        name: "Kimchi",
        price: 8.50
    },
    {
        id: 3,
        name: "Jasmine Rice",
        price: 25
    },
    {
        id: 4,
        name: "Beef",
        price: 10
    },
    {
        id: 5,
        name: "Chocolate",
        price: 3
    },
    {
        id: 6,
        name: "Chips",
        price: 4
    },
    {
        id: 7,
        name: "Ice Cream",
        price: 7.50
    }
];

// console.log(shoppingList);

//Writing a function that adds a new grocery item to my shoppingList array and automates an id for each grocery object added and adds  date created

const addToShoppingList = (groceryObject) => {
    const lastIndex = shoppingList.length -1;
    const currentLastGroceryObj = shoppingList[lastIndex];
    const maxId = currentLastGroceryObj.id;
    const newGroceryObjId = maxId + 1;
    groceryObject.id = newGroceryObjId;
    shoppingList.push(groceryObject);
    groceryObject.dateCreated = new Date().toLocaleString();

};

const noodles = {
    name: "Noodles",
    price: 5
};

const oatMilk = {
    name: "Oat Milk",
    price: 4.50
};

const chicken = {
    name: "Chicken",
    price: 8
};

const strawberries = {
    name: "Strawberries",
    price: 5.50
};

const tortillas = {
    name: "Tortillas",
    price: 6.50
};

addToShoppingList(noodles);
addToShoppingList(oatMilk);
addToShoppingList(chicken);
addToShoppingList(strawberries);
addToShoppingList(tortillas);

//Filtering Grocery List exercise to display on the the items whose price is greater than $8

for (const groceryItem of shoppingList) {
    if (groceryItem.price > 8 ) {
        console.log("items that cost more than $8:", groceryItem);
    }
};

console.log(shoppingList);