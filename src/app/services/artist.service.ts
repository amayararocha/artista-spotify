import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtistDetails, TopSong, PopularAlbum } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getArtistDetails(): Observable<ArtistDetails> {
    return this.http.get<ArtistDetails>(`${this.apiUrl}/artist-details`);
  }

  getTopSongs(): Observable<TopSong[]> {
    return this.http.get<TopSong[]>(`${this.apiUrl}/top-songs`);
  }

  getPopularAlbums(): Observable<PopularAlbum[]> {
    return this.http.get<PopularAlbum[]>(`${this.apiUrl}/popular-albums`);
  }
}
