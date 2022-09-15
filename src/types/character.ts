export interface ICharacter {
    card: {
        id: number;
        name: string;
        gender: string;
        image: string;
        species?: string;
        type?: string;
    }
}

export interface IFavorites {
    favorite: ICharacter[]
}

export interface IFavoriteState {
    favorite: {
        favorite: ICharacter[]
    }
}