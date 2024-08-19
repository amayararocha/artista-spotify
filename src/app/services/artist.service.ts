import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArtistDetails, TopSong, PopularAlbum } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getArtistDetails(): Observable<ArtistDetails[]> {
    return this.http.get<ArtistDetails[]>(`${this.apiUrl}/artist-details`);
  }

  getTopSongs(): Observable<TopSong[]> {
    return this.http.get<TopSong[]>(`${this.apiUrl}/top-songs`);
  }

  getPopularAlbums(): Observable<PopularAlbum[]> {
    return this.http.get<PopularAlbum[]>(`${this.apiUrl}/popular-albums`);
  }

  addArtistDetail(artistDetail: ArtistDetails): Observable<ArtistDetails> {
    return this.http.post<ArtistDetails>(`${this.apiUrl}/artist-details`, artistDetail);
  }

  addTopSong(topSong: TopSong): Observable<TopSong> {
    return this.http.post<TopSong>(`${this.apiUrl}/top-songs`, topSong);
  }

  addPopularAlbum(popularAlbum: PopularAlbum): Observable<PopularAlbum> {
    return this.http.post<PopularAlbum>(`${this.apiUrl}/popular-albums`, popularAlbum);
  }
}
