import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Injectable } from "@angular/core";

@Injectable()

export class AuthenticationProvider {
  constructor(
    public afAuth: AngularFireAuth,
    public afDB: AngularFireDatabase) { }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
