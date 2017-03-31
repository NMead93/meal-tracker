import {Component} from '@angular/core';
import {Meal} from './Meal.model';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
    <h2>Epicodus Meal Tracker</h2>
    <!--dropdown menu-->
    <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sort By
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#"><span class="glyphicon glyphicon-plus-sign"></span>New Entry</a></li>
            <li role="seperator" class="divider"></li>
            <li><a href="#">category 1</a></li>
            <li><a href="#">category 2</a></li>
        </ul>
    </div>
    <br><br>
    <!--table-->
   <meal-list [childMealList]="masterMealList"></meal-list>
   <new-meal></new-meal>
</div>
    `
})

export class AppComponent {
    masterMealList: Meal[] = [
        new Meal("3-21", "Burger", "It was greasy.", 554),
        new Meal("3-21", "Sandwich", "Yum", 432),
        new Meal("3-22", "Cereal", "Rice Krispies Brand", 343)
    ];
}
