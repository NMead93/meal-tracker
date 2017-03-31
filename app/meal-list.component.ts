import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './Meal.model';

@Component({
    selector: 'meal-list',
    template: `
    <table class="table table-striped">
    <thead>
         <tr class="info">
             <th>Date</th>
             <th>Meal</th>
             <th>Details</th>
             <th>Calories</th>
         </tr>
     </thead>
     <tbody>
     <tr *ngFor="let currentMeal of childMealList">
        <td>{{currentMeal.date}}</td>
        <td>{{currentMeal.name}}</td>
        <td>{{currentMeal.details}}</td>
        <td>{{currentMeal.calories}}</td>
        <td><button class='btn btn-info' (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </tr>
         <tr>
     <!--first example-->
         <td>07/28/2016</td>
         <td>Expenses</td>
         <td>LLC</td>
         <td>129756</td>
         </tr>

     </tbody>
 </table>
    `
})

export class MealListComponent {
    @Input() childMealList: Meal[];
    @Output() clickSender = new EventEmitter();

    editButtonHasBeenClicked(mealToEdit: Meal) {
        this.clickSender.emit(mealToEdit);
    }
}
