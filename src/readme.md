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
**********************************
sharing data using event emitter and @output decorator
**************************************************

The @Output() decorator in a child component or directive lets data flow from the child to the parent.
@Output() marks a property in a child component as a doorway through which data can travel from the child to the parent.

The child component uses the @Output() property to raise an event to notify the parent of the change. To raise an event, an @Output() must have the type of EventEmitter, which is a class in @angular/core that you use to emit custom events.

The following example shows how to set up an @Output() in a child component that pushes data from an HTML <input> to an array in the parent component.

To use @Output(), you must configure the parent and child.

Configuring the child component
--------------------------------
The following example features an <input> where a user can enter a value and click a <button> that raises an event. The EventEmitter then relays the data to the parent component.

1.Import Output and EventEmitter in the child component class:
import { Output, EventEmitter } from '@angular/core';

2.In the component class, decorate a property with @Output(). The following example newItemEvent @Output() has a type of EventEmitter, which means it's an event.
@Output() newItemEvent = new EventEmitter<string>();

3.Create an addNewItem() method in the same component class:
  export class ItemOutputComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}

The addNewItem() function uses the @Output(), newItemEvent, to raise an event with the value the user types into the <input>.

Configuring the child's template
-------------------------------
The child's template has two controls. The first is an HTML <input> with a template reference variable, #newItem, where the user types in an item name. The value property of the #newItem variable stores what the user types into the <input>.

<label for="item-input">Add an item:</label>
<input type="text" id="item-input" #newItem>
<button type="button" (click)="addNewItem(newItem.value)">Add to parent's list</button>

The second element is a <button> with a click event binding.

The (click) event is bound to the addNewItem() method in the child component class. The addNewItem() method takes as its argument the value of the #newItem.value property.


Configuring the parent component
---------------------------------
The AppComponent in this example features a list of items in an array and a method for adding more items to the array.

export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

