
export class Subscription {
    planId: string;
    startDate: string;
    planFreq: string;
}


export class Product {
    name: string;
    subscription: Subscription;

    constructor(name: string, subscription: Subscription) {
        this.name = name;
        this.subscription = subscription;
    }

    getSubscription() {
        return this.subscription;
    }
}

export class CustomerSubscription {
    customerId: string;
    products: Array<Product>;
}