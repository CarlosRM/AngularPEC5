import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {

  constructor(private http: HttpClient) { 
  }
  getAllCharacters(): Observable<Character[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer f_2CLHcMvANj7AMZNJ2N`
    });

    return this.http.get<any>('https://the-one-api.dev/v2/character/', { headers: headers}).pipe(
      map(response => response.docs)
    );
  }

  getCharacterById(id: String): Observable<Character> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer f_2CLHcMvANj7AMZNJ2N`
    })
    return this.http.get<any>('https://the-one-api.dev/v2/character/' + id, { headers: headers}).pipe(
      map(response => response.docs[0])
    );
  }
}
