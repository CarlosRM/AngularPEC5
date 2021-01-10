import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Character;

  constructor(
    private imagesService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    this.imagesService.getCharacterById(identifier).subscribe((character) => {
      if(!character) {
        return this.router.navigateByUrl('/');
      }

      this.character = character;
    })
  }

}
