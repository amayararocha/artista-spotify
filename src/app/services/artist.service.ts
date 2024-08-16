import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getArtistDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/artist`);
  }

  getTopSongs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/songs`);
  }

  getPopularAlbums(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/albums`);
  }
}
