import { RickAndMortyService } from './../rickandmorty.service';
import { Component, OnInit } from '@angular/core';
import { Characters } from '../models/rickandmorty.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters?: Characters[];

  constructor(private rickandmortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickandmortyService.getAll().subscribe( result => {
      this.characters = result;
    },
    error => {
      console.log("Errores");
    });
  }
}
