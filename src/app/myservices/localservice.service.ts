import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class localserviceService {

  sweets = ['rosogolla', 'gulabjamun','jalebi']
  constructor() { }

  getLocalSweets(){
    return "these are local sweets"
  }
}
