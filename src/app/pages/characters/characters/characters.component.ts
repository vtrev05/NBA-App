import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/model/shared';
import { CharacterService } from '../services/character.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
characterList: Character[] = [];
  constructor(private requestExample: CharacterService) { }

  ngOnInit(): void {
    this.requestExample.getPokemon().subscribe((data: any) => {
      const result: Character[] = data.data;

      const mappedResult = result.map(({id, name, full_name, division, abbreviation, conference}) => ({
        id,
        name,
        full_name,
        division,
        abbreviation,
        conference
      }));
      this.characterList = mappedResult;
    })
  }

}
