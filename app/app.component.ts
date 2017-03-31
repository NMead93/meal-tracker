import {Component} from '@angular/core';
import {Meal} from './Meal.model';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
    <h2>Epicodus Meal Tracker</h2>
    <!--dropdown menu-->
    <div class="dropdown">
        <select (change)="onChange($event.target.value)">
        <option value=""> Default Order </option>
            <option value="low"> Lowest Calories </option>
            <option value="high"> Highest Calories </option>
        </select>
    </div>
    <br><br>
    <!--table-->
   <meal-list [childMealList]="masterMealList | calories:searchCriteria"></meal-list>
   <button (click)="showNewMealForm()">Add Meal</button>
   <new-meal [newMeal]="newMeal" (newMealSender)="addMeal($event)"></new-meal>

</div>
    `
})

export class AppComponent {
    newMeal = false;
    searchCriteria: string = "";

    masterMealList: Meal[] = [
        new Meal("3-21", "Burger", "It was greasy.", 554),
        new Meal("3-21", "Sandwich", "Yum", 432),
        new Meal("3-22", "Cereal", "Rice Krispies Brand", 343)
    ];

    addMeal(newMealFromChild: Meal) {
        this.masterMealList.push(newMealFromChild);
        this.newMeal = false;
    }

    showNewMealForm() {
        this.newMeal = true;
    }

    onChange(criteria) {
        this.searchCriteria = criteria;
    }
}
