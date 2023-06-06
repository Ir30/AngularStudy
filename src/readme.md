creating angular commponent mannually

step 1- create
'''''''''''''''
1.create navbar component ts file as navbar.component.ts
2.import component like import { Component } from "@angular/core";
3.set up @Component decorator and set selecter, template, and styles or templateUrl and styleUrls
  eg: @Component({
    selector: 'app-navbar',
    template:'<h1>Navbar component</h1>'
})

Step 2-Register on module.ts
............................
1. import the navabar component class with location
  import { NavbarComponent } from './navbar/navbar.component'
2. declare the  component
   declarations: [
    AppComponent,
    NavbarComponent
  ],

****************************
DATA SHARING BETWEEN COMPONENTS
******************************

1.from parent to child (@input decorator)
2.from child to parent:
  we can see the all child variable from parent using @viewChild decorator
  1.create a variable on child component
  2.create a variable 'message' on parent component
  3.import Viewchild,AfterViewInit
    import { Component,ViewChild ,AfterViewInit} from '@angular/core';
  4.impliment the class on AfterViewInit
  5.declare the child object
    @ViewChild(PostComponentComponent) postChild:any;
  6.override the ngAfterViewInit() and assign the value to the meesage

        ngAfterViewInit(): void {
          console.log(this.postChild)
          this.message=this.postChild.childMessage
      }
  7.use the child variable on parents component using string  string interpolation