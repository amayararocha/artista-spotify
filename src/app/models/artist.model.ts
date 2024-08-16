export interface ArtistDetails {
  id: number;
  name: string;
  bio: string;
  image: string;
  followers: number;
  popularity: number;
}

export interface TopSong {
  id: number;
  title: string;
  plays: number;
}

export interface PopularAlbum {
  id: number;
  title: string;
  releaseYear: number;
}

export interface Artist {
  'artist-details': ArtistDetails;
  'top-songs': TopSong[];
  'popular-albums': PopularAlbum[];
}
