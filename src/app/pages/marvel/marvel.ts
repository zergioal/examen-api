import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelService, MarvelCharacter } from '../../services/marvel';

@Component({
  selector: 'app-marvel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marvel.html',
  styleUrl: './marvel.css',
})
export class Marvel implements OnInit {
  characters: MarvelCharacter[] = [];
  loading = true;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe((res) => {
      this.characters = res.data.results;
      this.loading = false;
    });
  }
}
