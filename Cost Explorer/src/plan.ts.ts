
export enum PlanID {
    Basic = "BASIC",
    Standard = "STANDARD",
    Premium = "PREMIUM"
}

export class Plan {
    planId: string
    monthlyCost: string
    yearlyCost?: string
}


export class Plans {
    plans: Array<Plan>

    constructor(plans: Array<Plan>) {
        this.plans = plans
    }

    getPlan(planId: string) {
        return this.plans.find(plan => plan.planId == planId)
    }
}

