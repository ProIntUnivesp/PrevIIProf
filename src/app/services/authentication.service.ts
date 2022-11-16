import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { getAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
<<<<<<< HEAD
  constructor(private auth: Auth) {}
=======
  [x: string]: any;

  constructor(
    private auth: Auth,
    

    ) {}
>>>>>>> resultado

  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }

<<<<<<< HEAD
  logout() {
    return signOut(this.auth);
  }
=======
    getAuth() {
      return this.getAuth;
    }

>>>>>>> resultado
}
