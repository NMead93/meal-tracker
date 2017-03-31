export class Meal {
    showEditForm: boolean = false
    constructor(public date: string, public name: string, public details: string, public calories: number) {}
}
