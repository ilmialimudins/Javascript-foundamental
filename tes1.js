let currency = new Map();

currency.set("USD", 14000);
currency.set("JPY", 131);
currency.set("SGD", 11000);
currency.set("MYR", 3500);

let priceInJPY = 100;
let priceInIDR = priceInJPY * currency.get("JPY");