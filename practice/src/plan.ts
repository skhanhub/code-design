

export class Plan {
    planId: string;
    monthlyCost: string;
    yearlyCost: string;
}

export class Plans {
    plans: Plan[];
    constructor(plans: Array<Plan>) {
        this.plans = plans;
    }

    getPlan(planId: string): Plan {
        return this.plans.find(plan => plan.planId === planId);
    }
}