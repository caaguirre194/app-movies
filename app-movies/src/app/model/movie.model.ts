import { BelongsToCollection } from './belongs-collection.model';
import { Genre } from './genre.model';
import { Lenguage } from './lenguage.model';
import { ProductionCompany } from './production-company.model';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  belongs_to_collection?: BelongsToCollection;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  imdb_id?: string;
  production_companies?: ProductionCompany[];
  production_countries?: [];
  revenue?: number;
  runtime?: number;
  spoken_languages?: Lenguage[];
  status?: string;
  tagline?: string;
}

export interface MovieList {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
