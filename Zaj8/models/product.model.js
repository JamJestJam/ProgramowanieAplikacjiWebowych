const uuidv4 = require('../uuidv4');


module.exports = class Product {
    constructor(name, description, price) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
