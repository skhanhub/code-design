import { CustomerSubscription } from "./customerSubscriptions";
import { Plan, Plans } from "./plan.ts";


export default class CostExplorer {
    plans: Plans;
    customerSubscription: CustomerSubscription;
    private numberOfMonth = 12;
    private averageDaysInMonth = 30;
    averageDaysInYear = 365;
    constructor(plans: Plans, customerSubscription: CustomerSubscription) {
        this.plans = plans;
        this.customerSubscription = customerSubscription;
    }

    private daysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    getCostPerDay(planFeq: string, plan: Plan): number {
        switch (planFeq) {
            case "MONTHLY": return parseFloat(plan.monthlyCost) / this.averageDaysInMonth;
            case "YEARLY": return parseFloat(plan.yearlyCost) / this.averageDaysInYear;
        }
    }

    monthlyCostList(): Array<number> {
        const customerSubscriptions = this.customerSubscription;

        if (!customerSubscriptions) throw new Error("Missing Customer");


        const monthlyCost = new Array(this.numberOfMonth).fill(0);


        for (let month = 0; month < this.numberOfMonth; month++) {
            for (const product of customerSubscriptions.products) {
                const plan = this.plans.getPlan(product.subscription.planId);
                if (!plan) throw new Error("Invalid Plan");

                const costPerDay = this.getCostPerDay(product.subscription.planFeq, plan);

                const startDate = new Date(product.subscription.startDate);

                if (month >= startDate.getMonth()) monthlyCost[month] += costPerDay * this.daysInMonth(startDate.getFullYear(), month);
            }
        }
        return monthlyCost;
    }

    annualCost(): number {
        return this.monthlyCostList().reduce((prev, cur) => prev + cur);
    }
}

//https://leetcode.com/discuss/interview-question/1976694/atlassian-onsite-api-to-get-monthlyannual-subscription-charges

