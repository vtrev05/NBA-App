import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const basicUrl = `https://www.balldontlie.io/api/v1/teams`;


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private request: HttpClient) { }
  getPokemon() {
    return this.request.get(basicUrl)
  }
}
