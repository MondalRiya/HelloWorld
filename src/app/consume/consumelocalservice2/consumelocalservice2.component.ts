import { Component, OnInit } from '@angular/core';
import{localserviceService} from "../../myservices/localservice.service";
import { UserInfo } from '../../interface/user-info'

@Component({
  selector: 'app-consumelocalservice2',
  templateUrl: './consumelocalservice2.component.html',
  styleUrls: ['./consumelocalservice2.component.css']
})
export class Consumelocalservice2Component implements OnInit {


  constructor(private localservice:localserviceService) {
    console.log(localservice.sweets)
    console.log(localservice.getLocalSweets)
   }

  ngOnInit() {
  }

}
