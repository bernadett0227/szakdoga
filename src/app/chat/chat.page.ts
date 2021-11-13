import {Component, OnInit, ViewChild} from '@angular/core';
import firebase from "firebase";
import {IonContent} from "@ionic/angular";
import {UserService} from "../shared/user.service";
import {Users} from "../shared/Users";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {ChatService, Message} from "../shared/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

messages: Observable<Message[]>;
newMsg = '';
@ViewChild(IonContent) content: IonContent;

constructor( private chatService: ChatService, private router: Router) {
}

  ngOnInit() {
    this.messages = this.chatService.getChatMessegas();

  }


  sendMessage() {
  this.chatService.addChatMessage(this.newMsg).then(() => {
    this.newMsg = '';
    this.content.scrollToBottom();
    });
  }

  signOut() {
  this.chatService.signOut().then(() => {
    this.router.navigateByUrl('/', {replaceUrl: true});
  });
  }

}
