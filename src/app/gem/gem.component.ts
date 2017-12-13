import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'

import { GemsService } from '../gems.service';
import {Gem} from '../gem'


@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  public gem: Gem;    
  constructor(private activatedRoute:ActivatedRoute ,private gemsService: GemsService) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe((params:Params)=>{
		  this.gemsService.getGems().then(response => {
		   const gems= response["data"];		 		
		  		 for(let key in  gems){
					 if(gems[key]['id'].toString() === params['id']){this.gem = gems[key]}
				 }
	  		});														
		});
  }

}
