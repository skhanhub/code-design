import { PlanID } from "./plan.ts"

export enum ProductName {
    Jira = "JIRA",
    Standard = "STANDARD",
    Premium = "PREMIUM"
}

export class Subscription {
    planId: string
    startDate: string
    planFeq: string
}

export class Product {
    name: string
    subscription: Subscription
}

export class CustomerSubscription {
    customerId: string
    products: Array<Product>
}



export default class CustomerSubscriptionMap {
    CustomerSubscriptions: Record<string, CustomerSubscription>
    getCustomerSubscriptions(customerId: string): CustomerSubscription {
        return this.CustomerSubscriptions[customerId]
    }
}