import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  hobbyForm;
  constructor() { }

  ngOnInit() {

    this.hobbyForm = new FormGroup({
        fn:new FormControl("",
        Validators.compose([Validators.required, 
        Validators.minLength(4), 
        Validators.pattern('^[a-zA-Z]+$')])
        ),
        ln:new FormControl("", this.myCustomeMinLength),
        hobby:new FormControl()
    })

  }

  myCustomeMinLength(control){
    if(control.value.length<3)
      return {'ln':true}
  }
  submitUserHobby = function(user){
    console.log(user)
  }

}
