import { IPriceService } from './price-service.interface';

export class MockPriceService implements IPriceService{
    calculateTotalPrice(basePrice:number, state:string){
        let totalPrice: number = basePrice;
        if (state = 'FL'){
            totalPrice = basePrice + 0.66;
        }
        return totalPrice;
    }
}