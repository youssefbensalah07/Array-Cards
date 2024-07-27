import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {
 messagesCard:Array<any>=[];
  constructor() {
    this.init();
   }


  init(){
    this.insert({
      name:'Youssef',
      email:'youssef@gmail.com',
      message:'Hello world'
    });
    this.insert({
      name:'omi',
      email:'youssef@gmail.com',
      message:'Hello world'
    });
    this.insert({
      name:'med',
      email:'youssef@gmail.com',
      message:'Hello world'
    });
    
  }

  insert(message: { name: string; email: string; message: string; }) {
    this.messagesCard.push(message);
  }

  getAllMessagesCards(){
    return this.messagesCard;
  }

  deleteMessage(index: number): void {
    this.messagesCard.splice(index, 1);
  }
}
