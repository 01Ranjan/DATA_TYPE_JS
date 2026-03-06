const orders = [
  { dish: "pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caewsar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffles Risotto", price: 18, spicy: false, qty: 1 },
];

const myData = orders.forEach(
  (element, ind) => `#${ind + 1} : ${element.qty}X ${element.dish}`,
); // return undefine type

// console.log(myData);

const mapReturn = orders.map(
  (order) => `${order.dish} : $${order.price * order.qty}`,
); // required call back
//.. return the array
// console.log(mapReturn);

const filterReturn = orders.filter((o) => o.spicy); // required condition as a callback
// return the arrsys of element if condition is met

// console.log(filterReturn);

const sum = orders.reduce((sum, order) => {
  return sum + order.price * order.qty;
}, 0);
// console.log(sum);

const dishCatogry = orders.reduce(
  (acc, order) => {
    const catogry = order.spicy ? "spicy" : "mild";
    acc[catogry].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);

// console.log(dishCatogry);

const ticketNumber = [100, 25, 34, 22, 16, 68];
const shorted = [...ticketNumber].sort((a, b) => a - b); // compare callBack

const kitchenOrder = [
  { dish: "pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caewsar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffles Risotto", price: 18, spicy: false, qty: 1 },
  { dish: "Ghost Peeper soup", price: 15, spicy: false, qty: 1 },
];

const mildReport= kitchenOrder
  .filter(order=>!order.spicy)
  .map((order)=>({
    'dish':order.dish,
    'total':order.price*order.qty
  }))

  console.log(mildReport);
  