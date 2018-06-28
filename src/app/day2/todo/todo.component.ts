import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task = ["Learn Angular6", "Read about Eureka", "Have fun", "Good day"]
  oneTask = ""
  money = 50

  myDate = new Date()
  scores = [10,2,5,60,22]

  addTask = function(){
    this.task.push(this.oneTask)
  }
  deleteTask = function(ct){
    this.task.splice(ct,1)
  }
  constructor() { }

  ngOnInit() {
  }

}
