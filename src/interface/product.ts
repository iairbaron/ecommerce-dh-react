
export interface Product {
    amiiboSeries: string;
    character:    string;
    gameSeries:   string;
    head:         string;
    image:        string;
    name:         string;
    release:      Release;
    tail:         string;
    type:         string;
    price:        number;
    id:           number;
}

export interface Release {
    au: string;
    eu: string;
    jp: string;
    na: string;
}

export interface CartProduct {
    id: number,
    name: string,
    image: string,
    quantity: number,
    price: number
  }
