import { Component, OnInit } from '@angular/core';
import{localserviceService} from "../../myservices/localservice.service";

@Component({
  selector: 'app-consumelocalservice',
  templateUrl: './consumelocalservice.component.html',
  styleUrls: ['./consumelocalservice.component.css']
})
export class ConsumelocalserviceComponent implements OnInit {

  constructor(private localservice:localserviceService) { 
    console.log(localservice.sweets)
    console.log(localservice.getLocalSweets)
    console.log(localservice.sweets.push('rubri'))
    console.log(localservice.getLocalSweets)

  }
  
  
  ngOnInit() {
  }

}
