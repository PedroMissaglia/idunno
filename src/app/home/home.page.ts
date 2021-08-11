import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
