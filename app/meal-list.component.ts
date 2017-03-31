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
             <th>Actions</th>
         </tr>
     </thead>
     <tbody>
     <tr *ngFor="let currentMeal of childMealList">
        <td>{{currentMeal.date}}</td>
        <td>{{currentMeal.name}}</td>
        <td>{{currentMeal.details}}</td>
        <td>{{currentMeal.calories}}</td>
        <td><button class='btn btn-info' (click)="currentMeal.showEditForm = true">Edit</button>
        <td *ngIf="currentMeal.showEditForm"><edit-meal [childSelectedMeal]="currentMeal"></edit-meal></td>
    </tr>
    <tr>
        <td> Total Calories: {{totalCalories()}}</td>
    <tr>

     </tbody>
 </table>
    `
})

export class MealListComponent {
    @Input() childMealList: Meal[];
    @Output() clickSender = new EventEmitter();

    totalCalories() {
        let allCalories: number = 0;
        for (let i of this.childMealList) {
            allCalories += i.calories;
        }
        return allCalories;
    }
}
