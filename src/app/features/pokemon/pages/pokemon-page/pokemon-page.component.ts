import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
})
export class PokemonPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];

  loading = true;
  error = false;
  notFound = false;

  currentPage = 0;
  limit = 20;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.loading = true;
    this.error = false;
    this.notFound = false;

    this.pokemonService
      .getPokemons(this.limit, this.currentPage * this.limit)
      .subscribe({
        next: (data: Pokemon[]) => {
          this.pokemons = data;
          this.filteredPokemons = data;
          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        },
      });
  }

  searchPokemon(event: Event): void {
    const value = (event.target as HTMLInputElement)
      .value
      .toLowerCase()
      .trim();

    this.filteredPokemons = this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );

    this.notFound =
      value.length > 0 &&
      this.filteredPokemons.length === 0;
  }

  nextPage(): void {
    this.currentPage++;
    this.loadPokemons();
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPokemons();
    }
  }
}