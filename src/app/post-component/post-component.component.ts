import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  constructor(){
  }
  @Input() parentMessage:any;

  childMessage='Message from child'

  ngOnInit():void{

  }

}
