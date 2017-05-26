import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-dragdrop',
    templateUrl: './dragdrop.component.html',
    styleUrls: ['./dragdrop.component.css']
})

export class DragdropComponent implements OnInit {
    availableProducts: Product[] = [];
    shoppingBasket: Product[] = [];

    constructor() {
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }

    ngOnInit() {
    }

    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
    }

    allowDropProduct(product: Product): any {
        return (dragData: any) => {
            return product.name === dragData.name;
        }
    }

    updateAvailableProducts($event: any) {
        _.forEach(this.availableProducts, (product) => {
            if (product.name === $event.name) {
                product.quantity++;
            }
        });
        _.forEach(this.shoppingBasket, (product) => {
            if (product.name === $event.name) {
                product.quantity--;
            }
        });

        _.remove(this.shoppingBasket, (product) => {
            return product.quantity === 0;
        });
        this.totalCost();
    }

    addToBasket(event: any) {
        let newProduct: Product = event.dragData;
        for (let index in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[index];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket.sort((a: Product, b: Product) => {
            return a.name.localeCompare(b.name);
        })
    }

    totalCost(): number {
        let cost: number = 0;
        for (let index in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[index];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }
}

class Product {
    constructor(public name: string, public quantity: number, public cost: number) {
    }
}
