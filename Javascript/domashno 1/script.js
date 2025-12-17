// deklaracija
const phonePrice = 119.95;
const quantity = 30;
const taxRate = 0.05; // 5% danok

// cena na telefoni
const subtotal = phonePrice * quantity;

// vkupen iznos na danok
const taxAmount = subtotal * taxRate;

// vkupna cena so danok
const totalPrice = subtotal + taxAmount;

// ispis na rezultatite
console.log("Phone Price: $" + phonePrice);
console.log("Quantity: " + quantity);
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Tax (5%): $" + taxAmount.toFixed(2));
console.log("Total Price: $" + totalPrice.toFixed(2));