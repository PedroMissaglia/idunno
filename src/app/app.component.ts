import { Component } from '@angular/core';
import { DataService, Message } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public tabs = this.getTabs();
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
  getTabs(){
    return [
      {name: 'chat', icon: 'chatbubbles', label: 'chat'},
      {name: 'speakers', icon: 'person-circle', label: 'Speakers'},
      {name: 'map', icon: 'map', label: 'Map'},
      {name: 'about', icon: 'information-circle', label: 'info'},
    ];
  }
}
