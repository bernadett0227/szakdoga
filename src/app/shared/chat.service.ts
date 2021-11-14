import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import firebase from "firebase";

export interface User {
  uid: string;
  email: string;
}

export interface Message {
  createdAt: any;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class ChatService{

  currentUser: User = null;

  constructor(private af: AngularFireAuth, private afs: AngularFirestore ){

    this.af.onAuthStateChanged(user => {
      console.log('Changed: ', user);
      this.currentUser = user;
    })

  }

  async signUp({email, password}) {
    const credential = await this.af.signInWithEmailAndPassword(email, password);
    console.log('result: ', credential);
    const uid = credential.user.uid;

    return this.afs.doc(
      `users/${uid}`
    ).set({
      uid,
      email: credential.user.email,
    })
  }


  signIn({email, password}) {
    return this.af.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    return this.af.signOut();
  }

  addChatMessage(msg) {
    return this.afs.collection('messages').add({
      msg: msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  getUser() {
    return this.afs.collection('users').valueChanges({idField: 'uid'}) as Observable<User[]>;
  }

  getUserForMsg(msgFromId, users: User[]): string{
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted' ;
  }

  getChatMessegas() {
    let users = [];
    return this.getUser().pipe(
      switchMap(res => {
        users = res;
        console.log('all users: ', users);
        return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id'}) as Observable<Message[]>
      }),
      map(messages => {
        for (let m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }
        console.log('all messages: ', messages);
        return messages;
      })
    )
  }

}
