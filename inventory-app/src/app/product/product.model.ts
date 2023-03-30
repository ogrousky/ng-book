export class Product {

    sku: string;
    name: string;
    imageURL: string;
    department: string[];
    price: number;

    constructor(sku: string, name: string, imageURL: string, department: string[], price: number) {
        this.sku = sku;
        this.name = name;
        this.imageURL = imageURL;
        this.department = department;
        this.price = price;
    }
}