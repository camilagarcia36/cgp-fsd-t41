import { ActivatedRoute, Router } from '@angular/router';
import { RickAndMortyService } from './../rickandmorty.service';
import { Component, OnInit } from '@angular/core';
import { Characters } from '../models/rickandmorty.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any;
  character: Characters = {
    name: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }

  constructor (private RickAndMortyService: RickAndMortyService, private _route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

    this.RickAndMortyService.get(this.id).subscribe(result => {
      this.character = result;
    },
    error => {
      console.log("Errores");
    });
  }

  updateStatus(status: boolean): void {
    const data = {
      name: this.character.name,
      gender: this.character.gender,
      species: this.character.species,
      origin: this.character.origin,
      image: this.character.image,
      status: status
    };

    this.RickAndMortyService.update(this.character.id, data).subscribe (response => {
      this.character.status = status;
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  deleteCharacter(): void {
    this.RickAndMortyService.delete(this.character.id).subscribe (response => {
      console.log(response);
      this.router.navigate(['/characters']);
    },
    error => {
      console.log(error);
    });
  }
}


