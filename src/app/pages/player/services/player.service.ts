import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const basicUrl = `http://localhost:4500/`;

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private request: HttpClient) { }
  getPlayer() {
    return this.request.get(basicUrl)
  }
}
