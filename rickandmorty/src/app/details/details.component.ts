import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from './../rickandmorty.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  characters:any = null;

  id:any = this.route.snapshot.paramMap.get('id');
  constructor(private RickAndMortyService: RickAndMortyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.RickAndMortyService.getById(this.id)
      .subscribe( result => this.characters = result)
  }
}


