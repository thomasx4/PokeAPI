import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, switchMap } from 'rxjs';
import { Observable, catchError, of } from 'rxjs';

import {
  PokemonListResponse,
  PokemonListItem,
  PokemonDetail,
  Pokemon,
} from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    return this.http
      .get<PokemonListResponse>(
        `${this.apiUrl}?limit=${limit}&offset=${offset}`
      )
      .pipe(
        switchMap((response) => {
          const requests: Observable<PokemonDetail>[] = response.results.map(
            (pokemon: PokemonListItem) =>
              this.http.get<PokemonDetail>(pokemon.url)
          );

          return forkJoin(requests);
        }),
        map((details: PokemonDetail[]) =>
          details.map((pokemon) => this.transformPokemon(pokemon))
        ),
        catchError((error) => {
          console.error('Error loading pokemons', error);
          return of([]);
        })
      );
  }

  private transformPokemon(pokemon: PokemonDetail): Pokemon {
    return {
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      height: pokemon.height,
      weight: pokemon.weight,
      baseExperience: pokemon.base_experience,
      types: pokemon.types.map((t) => t.type.name),
      stats: pokemon.stats.map((s) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
    };
  }
}