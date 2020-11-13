import { MockPriceService } from './price-service.mock';
import { Product } from "./product.model";

describe('Product', () => {
    let product;
    beforeEach(() => { 
        const service = new MockPriceService();
        product = new Product(service, 11); 
    });
    describe('price', ()=> 
    it('is calculated based on baseprice and state',
        ()=>expect(product.totalPrice('FL')).toBe(22.66)))
});