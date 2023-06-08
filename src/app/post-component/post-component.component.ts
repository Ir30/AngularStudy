import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  constructor(){
  }
  @Input() parentMessage:any;

  childMessage='Message from child_viewChild'


  ngOnInit():void{

  }

  // passing child conponents variable to parent component using event emitter
  outputEmitMessage:string= "message from child through event emitter"
  @Output() childEvent=new EventEmitter<string>();

  childEmitter=()=>{
    // console.log("childEmiter working")
    this.childEvent.emit(this.outputEmitMessage)
  }
}
