import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './Meal.model';

@Component({
    selector: 'edit-meal',
    template: `
    <div>
    <form class="form-horizontal">
    <fieldset>

    <!-- Form Name -->
    <legend>Edit Entry</legend>

    <!-- Textarea -->
    <div class="form-group">
    <label class="col-md-4 control-label" for="request-description">New Meal</label>
    <div class="col-md-4">
    <textarea [(ngModel)]="childSelectedMeal.name" class="form-control" id="request-description" name="request-description"></textarea>
    </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
    <label class="col-md-4 control-label" for="full_name">New Details</label>
    <div class="col-md-4">
    <input [(ngModel)]="childSelectedMeal.details" id="full_name" name="full_name" type="text" placeholder="" class="form-control input-md" required="">

    </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
    <label class="col-md-4 control-label" for="service-request">New Calories</label>
    <div class="col-md-4">
    <input [(ngModel)]="childSelectedMeal.calories" id="service-request" name="service-request" type="text" placeholder="" class="form-control input-md" required="">

    </div>
    </div>

    <!-- Button -->
    <div class="form-group">
    <div class="col-md-4">
    <button id="singlebutton" (click)="doneButtonClicked()" name="singlebutton" class="btn btn-primary">Done Changes</button>
    </div>
    </div>

    </fieldset>
    </form>
    </div>
    `
})

export class EditMealComponent {
    @Input() childSelectedMeal: Meal;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
        this.doneButtonClickedSender.emit();
    }
}
