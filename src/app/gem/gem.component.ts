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

  constructor() { }

  ngOnInit() {
  }

}
