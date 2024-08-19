export interface ArtistDetails {
  name: string;
  bio: string;
  image: string;
  followers: number;
  popularity: number;
}

export interface TopSong {
  title: string;
  plays: number;
}

export interface PopularAlbum {
  title: string;
  releaseYear: number;
}

export interface Artist {
  artistDetails: ArtistDetails[]; 
  topSongs: TopSong[];
  popularAlbums: PopularAlbum[];
}
