import CostExplorer from "./costExplorer";
import CustomerSubscriptionMap, { CustomerSubscription } from "./customerSubscriptions";
import { Plans } from "./plan.ts";

const plans: Plans = new Plans([{
    "planId": "BASIC",
    "monthlyCost": "9.99",
    "yearlyCost": "100"
}, {
    "planId": "STANDARD",
    "monthlyCost": "49.99"
}, {
    "planId": "PREMIUM",
    "monthlyCost": "249.99"
}])

const customerSubscription: CustomerSubscription = {
    "customerId": "c1",
    "products": [{
        "name": "Jira",
        "subscription": {
            "planId": "BASIC",
            "startDate": "2021-06-01",  //  YYYY-MM-DD format
            "planFeq": "MONTHLY"
        }
    }]
}

// , {
//     "name": "Confluence",
//     "subscription": {
//         "planId": "PREMIUM",
//         "startDate": "2021-06-01"  //  YYYY-MM-DD format
//     }
// }

const costExplorer = new CostExplorer(plans, customerSubscription)

console.log(costExplorer.annualCost());
