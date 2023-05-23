import { RickAndMortyService } from './../rickandmorty.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor(private RickAndMortyService: RickAndMortyService) { }

  ngOnInit() {
    this.RickAndMortyService.retornar()
      .subscribe( result => this.characters = result)
  }
}
