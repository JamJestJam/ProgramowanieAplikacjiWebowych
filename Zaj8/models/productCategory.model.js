const uuidv4 = require('../uuidv4');

module.exports = class ProductCategory {
    constructor(name, description, price) {
        this.id = uuidv4();
        this.name = name;
    }
}