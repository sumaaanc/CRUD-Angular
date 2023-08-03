import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private fb: FormBuilder){}

  simpleForm = this.fb.group({
    name:['', Validators.required],
    favourites: this.fb.array([this.createFavourites()])
  })

  createFavourites(): FormGroup {
    return this.fb.group({
      movies: this.fb.array([this.fb.control('')]),
      sports: this.fb.array([this.fb.control('')]),
      persons: this.fb.array([this.fb.control('')])
    });
  }
  addFavourites(){
    const getFavArray = this.simpleForm.get('favourites') as FormArray;
    getFavArray.push(this.createFavourites())
  }
  addMovies(){
    const getMovieArray = this.createFavourites().get('movies') as FormArray;
    getMovieArray.push(this.fb.control(''));
  }
  addSports(){
    const getSportArray = this.createFavourites().get('sports') as FormArray;
    getSportArray.push(this.fb.control(''));
  }
  addPersons(){
    const getPersonArray = this.createFavourites().get('persons') as FormArray;
    getPersonArray.push(this.fb.control(''));
  }
  get name(){
    return this.simpleForm.get('name')
  }
  get favourites(){
    return this.simpleForm.get('favourites') as FormArray
  }
  get movies(){
    return this.simpleForm.get('favourites.0.movies') as FormArray;
  }
  get sports(){
    return this.simpleForm.get('favourites.0.sports') as FormArray;
  }
  get persons(){
    return this.simpleForm.get('favourites.0.persons') as FormArray;
  }
}
