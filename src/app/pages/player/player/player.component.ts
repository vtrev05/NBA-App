import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/model/shared';
import { PlayerService } from '../services/player.service';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
playerList: Player[] = [];
  constructor(private requestExample: PlayerService) { }

  ngOnInit(): void {
    this.requestExample.getPlayer().subscribe((data: any) => {
      const result: Player[] = data.data.players;

      const mappedResult = result.map(({name, image, position, height}) => ({
        name,
        position,
        height,
        image
      }));
      this.playerList = mappedResult;
    })
  }

}
