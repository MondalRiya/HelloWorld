import { Component, OnInit } from '@angular/core';
import { RemoteserviceService } from '../../myservices/remoteservice.service';

@Component({
  selector: 'app-consume-remote-service',
  templateUrl: './consume-remote-service.component.html',
  styleUrls: ['./consume-remote-service.component.css']
})
export class ConsumeRemoteServiceComponent implements OnInit {

  constructor(private remoteService : RemoteserviceService) {
    console.log(remoteService.getRemoteData)
   }

  ngOnInit() {
  }

}
