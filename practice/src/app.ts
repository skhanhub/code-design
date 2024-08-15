import { CustomerSubscription, Product } from "./customerSubscription";
import { Plans } from "./plan";
import CostExplorer from "./CostExplorer";

const plans: Plans = new Plans([{
    "planId": "BASIC",
    "monthlyCost": "9.99",
    "yearlyCost": "100"
}, {
    "planId": "STANDARD",
    "monthlyCost": "49.99",
    "yearlyCost": "100"
}, {
    "planId": "PREMIUM",
    "monthlyCost": "249.99",
    "yearlyCost": "100"
}]);

const customerSubscription: CustomerSubscription = {
    "customerId": "c1",
    "products": [new Product("Jira", {
        "planId": "BASIC",
        "startDate": "2021-06-01",  //  YYYY-MM-DD format
        "planFreq": "MONTHLY"
    })]
};


const costExplorer = new CostExplorer(plans, customerSubscription);

console.log(costExplorer.monthlyCost());
