import { RickAndMortyService } from './../rickandmorty.service';
import { Component } from '@angular/core';
import { Characters } from '../models/rickandmorty.model';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent implements OnInit {

  id: any;
  character: Characters = {
    name: '',
    gender: '',
    species: '',
    origin: '',
    image: ''
  };
  submitted = false;

  constructor(private RickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
  }

  saveCharacters(): void {
    const data = {
      name: this.character.name,
      gender: this.character.gender,
      species: this.character.species,
      origin: this.character.origin,
      image: this.character.image
  };

    this.RickAndMortyService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });
  }

  newCharacter(): void{
    this.submitted = false;
    this.character = {
      name: '',
      gender: '',
      species: '',
      origin: '',
      image: ''
    }
  }
}
