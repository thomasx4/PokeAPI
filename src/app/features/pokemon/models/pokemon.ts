export interface PokemonListResponse {
    results: PokemonListItem[];
}

export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;

    sprites: {
        front_default: string;
    };

    types: {
        slot: number;
        type: {
            name: string;
        };
    }[];

    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}

export interface Pokemon {
    name: string;
    image: string;
    height: number;
    weight: number;
    baseExperience: number;
    types: string[];
    stats: {
        name: string;
        value: number;
    }[];
}