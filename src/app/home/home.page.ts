import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat/services/firebase.service';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tabs = this.getTabs();
  constructor(private chatService: ChatService, private router: Router) {}


  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
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
