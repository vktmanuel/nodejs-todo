const db = require('../util/database');

module.exports = class Product {
    constructor(id,title) {
        this.id = id;
        this.title = title;
    }

    save() {
        return db.execute(
            'INSERT INTO todo (title) VALUES ( ?)',
            [this.title]
        );
    }

    static deleteById(id) {}

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
}