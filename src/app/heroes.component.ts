import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})


export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  title = 'Tour of Heroes';
  current: Hero;
  heroes: Hero[];
  onSelect(hero: Hero): void {
    this.current = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}



