import CostExplorer from "../../src/CostExplorer";
import { CustomerSubscription, Product } from "../../src/customerSubscription";
import { Plans } from "../../src/plan";



describe("test ratelimmiter class", () => {
    test('should return true', () => {
        const expected = [
            0, 0, 0,
            0, 0, 9.99,
            10.323, 10.323, 9.99,
            10.323, 9.99, 10.323
        ];

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

        expect(costExplorer.monthlyCost()).toEqual(expected);
    });



});