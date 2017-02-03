import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Wedding } from "./wed-obj";
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";

@Injectable()
export class WeddingService {
  weddingChanged = new EventEmitter<Wedding[]>();
  isAuthenticated = false;

  private weddings: Wedding[] = [];
  //  new Cruise('Family Picture', 'This was taken on Second Night of the Cruise.  We all got dressed up and went to dinner.', 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/15801922_392847301058964_4507137950277959680_n.jpg?ig_cache_key=MTQxOTI5MzUxNjAyMjc4OTgzMg%3D%3D.2'),
  //  new Cruise('Swimming with the Dolphins', 'Everyone had a blast swimming with the dolphins.  Especially Summer and Eden!', 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/15803090_386813848333416_4477694154167549952_n.jpg?ig_cache_key=MTQxOTI1MTc3Mjg2NjU2MjUxNw%3D%3D.2')
  //];

  constructor(private http: Http,private authService: AuthService ) {
    this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  getWeddings() {
    return this.weddings;
  }

  getWedding(id: number) {
    return this.weddings[id];
  }

  deleteWedding(wedding: Wedding) {
    this.weddings.splice(this.weddings.indexOf(wedding), 1);
    this.storeData();
  }

  addWedding(wedding: Wedding) {
    this.weddings.push(wedding);
    this.http.put('https://projects-6a8af.firebaseio.com/events/b-a-wedding/'+ this.weddings.indexOf(wedding).toString() +'.json',JSON.stringify(wedding)).toPromise();
  }

  editWedding(oldWedding: Wedding, newWedding: Wedding){
    this.http.patch('https://projects-6a8af.firebaseio.com/events/b-a-wedding/'+this.weddings.indexOf(oldWedding)+'/.json',JSON.stringify(newWedding)).toPromise();
    this.weddings[this.weddings.indexOf(oldWedding)] = newWedding;
  }

  storeData() {
    const body = JSON.stringify(this.weddings);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://projects-6a8af.firebaseio.com/events/b-a-wedding.json', body, {headers: headers}).toPromise();
  }

  fetchData() {
    return this.http.get('https://projects-6a8af.firebaseio.com/events/b-a-wedding.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Wedding[]) => {
          if(!!data){
            this.weddings = data;
          }
          this.weddingChanged.emit(this.weddings);
        }
      );
  }
  isAuth() {
    return this.isAuthenticated;
  }

}
