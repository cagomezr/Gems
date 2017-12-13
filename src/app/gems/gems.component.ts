import { Component, OnInit } from '@angular/core';

import { GemsService } from '../gems.service';
import {Gem} from '../gem'

@Component({
  selector: 'app-gems',
  templateUrl: './gems.component.html',
  styleUrls: ['./gems.component.css']
})
export class GemsComponent implements OnInit {

 public gems: Gem[];    
  constructor(private gemsService: GemsService) { }

  ngOnInit() {
      this.gemsService.getGems().then(response => {
		 this.gems = response["data"];		 
	  });
  }

}
