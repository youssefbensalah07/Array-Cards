import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from '../message-details/message-details.component';
import { MyFirstServiceService } from '../services/my-first-service.service';


@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [FormsModule,CommonModule,MessageDetailsComponent],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {

  name :string ="";
  email :string = "";
  message :string = "";
  isSubmitted:boolean=false;
  groupMsgs:Array<any>=[];

  constructor(private service:MyFirstServiceService){
    this.groupMsgs =this.service.getAllMessagesCards();
    this.isSubmitted=this.groupMsgs.length > 0 ;
  }

  onSubmit(){
    this.isSubmitted=true;
    this.groupMsgs.push({
      'name':this.name,
      'email':this.email,
      'message':this.message
    })
  
  }
  deleteMessage(index:any){
    this.groupMsgs.splice(index,1);

  }
  
}
