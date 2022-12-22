import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
 @Input() name : string ='';
 @Input() item = '';

 childName = 'John';

 items11 = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items11.push(newItem);
  }

}
