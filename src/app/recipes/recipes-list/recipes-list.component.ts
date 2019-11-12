import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [new Recipe
    ('Berry', 'Berry', 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/04/shutterstock_393753934.jpg?w=1024&h=682'),
    new Recipe('Orange', 'Orange', 'https://cdn.fstoppers.com/styles/full/s3/media/2017/09/11/autumn_food_photography_0.jpg'),
    new Recipe('Eggs', 'Eggs', 'https://i.pinimg.com/originals/b8/15/b0/b815b00b9a10bcc88a58d88ab49734a2.jpg')
  ];
  
  constructor() { }

  showRecipeDetail(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
