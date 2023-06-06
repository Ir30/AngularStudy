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
