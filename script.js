function calculateSubtotal(order, quantity) {
    let price;
    switch (order) {
        case "Chicken meal":
            price = 75;
            break;
        case "Pork meal":
            price = 85;
            break;
        case "Beef meal":
            price = 105;
            break;
        default:
            return "Invalid order";}
    return price * quantity;}
function calculateDiscount(total, custType) {
    if (custType === "Student") {
        return total * 0.20;} 
    else {
        return 0;}}
function printReceipt() {
    let name = document.getElementById("fullName").value;
    let gradeSection = document.getElementById("gradeSection").value;
    let meal = document.getElementById("meal").value;
    let qty = document.getElementById("qty").value;
    let custType = document.getElementById("custType").value;
    let subtotal = calculateSubtotal(meal, qty);
    let discount = calculateDiscount(subtotal, custType);
    let total = subtotal - discount;
    document.getElementById("receipt").innerHTML =
        "Name: " + name + 
        "<br>Grade & Section: " + gradeSection + 
        "<br>Order: " + meal + 
        "<br>Quantity: " + qty + 
        "<br>Customer Type: " + custType + 
        "<br>Subtotal: PHP " + subtotal + 
        "<br>Discount: PHP " + discount + 
        "<br>Total: PHP " + total + 
        "<br><br>Thank you for your patronage!";
    return false;}