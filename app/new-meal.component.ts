import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './Meal.model';

@Component({
    selector: 'new-meal',
    template: `
    <div class="row" *ngIf="newMeal">
            <div class="col-sm-6 col-centered">
                <div class="panel panel-default">
                    <div class="panel-heading" >
                        <h3>New Meal</h3>
                    </div>
                <form>
                <div class="panel-body">
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user blue"></i></span>
                            <input #name type="text" name="InputName" placeholder="Date" class="form-control" autofocus="autofocus" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope blue"></i></span>
                            <input #meal type="text" name="InputEmail" placeholder="Meal" class="form-control" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-phone blue"></i></span>
                            <input #calories type="number" name="InputCno" placeholder="Calories" class="form-control" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-comment blue"></i></span>
                            <textarea #details name="InputMessage" rows="6" class="form-control" placeholder="Meal Details" type="text" required></textarea>
                        </div>
                    </div>
                    <div class="">
                    <button (click)="submitForm(name.value, meal.value, details.value, calories.value); name.value=''; meal.value=''; calories.value=''; details.value='';"class="btn btn-info pull-right">Add <span class="glyphicon glyphicon-send"></span></button>
                        <button type="reset" value="Reset" name="reset" class="btn">Reset <span class="glyphicon glyphicon-refresh"></span></button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    `
})

export class NewMealComponent {
    @Input() newMeal: boolean;
    @Output() newMealSender = new EventEmitter();

    submitForm(date: string, name: string, details: string, calories: number) {
        var newMeal: Meal = new Meal(date, name, details, calories);
        this.newMealSender.emit(newMeal);
    }
}
