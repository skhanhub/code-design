import { Plan, Plans } from "./plan";
import { CustomerSubscription } from "./customerSubscription";

export default class CostExplorer {
    plans: Plans;
    customerSubscription: CustomerSubscription;

    constructor(plans: Plans, customerSubscription: CustomerSubscription) {
        this.plans = plans;
        this.customerSubscription = customerSubscription;
    }

    private daysInMonth(year: number, month: number) {
        return new Date(year, month + 1, 0).getDate();
    }

    private getDailyCost(planFreq: string, plan: Plan) {
        switch (planFreq) {
            case "MONTHLY": return parseFloat(plan.monthlyCost) / 30;
            case "YEARLY": return parseFloat(plan.yearlyCost) / 365;
            default: throw new Error("Invalud Freq");
        }
    }

    monthlyCost() {
        const monthlyCost = new Array(12).fill(0);

        for (let month = 0; month < 12; month++) {
            for (const product of this.customerSubscription.products) {
                const subscription = product.getSubscription();
                const startDate = new Date(subscription.startDate);

                const plan = this.plans.getPlan(subscription.planId);
                if (!plan) throw new Error("cant find plan");

                const dailyCost = this.getDailyCost(subscription.planFreq, plan);
                const numDayInMonth = this.daysInMonth(startDate.getFullYear(), month);

                if (month >= startDate.getMonth()) monthlyCost[month] += dailyCost * numDayInMonth;

            }
        }
        return monthlyCost;
    }

    annualCost() {
        return this.monthlyCost().reduce((cur, prev) => cur + prev, 0);
    }
}