function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.brand + ", kolor to " + this.color + ", a cena to " + this.price + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", 2500, "czarny");
var iphone6s = new Phone("Apple", 2800, "zloty");
var oneplus = new Phone("Oneplus", 1400, "czarny");

samsungGalaxyS6.printInfo();
iphone6s.printInfo();
oneplus.printInfo();