import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './Meal.model';

@Pipe({
    name: "calories",
    pure: false
})

export class CaloriesPipe implements PipeTransform {
    transform(input: Meal[], searchCriteria) {
        if (searchCriteria === "low") {
            input.sort(function(a,b) {
                return a.calories - b.calories;
            });
        } else if (searchCriteria === "high") {
            input.sort(function(a,b) {
                return b.calories - a.calories;
            });
        }
        return input;
    }
}
