import { Component,ViewChild ,AfterViewInit} from '@angular/core';
import { PostComponentComponent } from './post-component/post-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  message:any;
  @ViewChild(PostComponentComponent) postChild:any;
  parentMessage:String= 'Message from parent';

  constructor(){
  }
  ngAfterViewInit(): void {
      console.log(this.postChild)
      this.message=this.postChild.childMessage
  }

  //this function trigered after emiting the event from child
  reciveChildMessage:string='befor emiting'
  listenChildEvent=($event: any)=>{
    // console.log('hi');  
    console.log($event)
    this.reciveChildMessage=$event
  }
}
