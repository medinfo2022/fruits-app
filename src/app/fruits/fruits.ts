import { Categories } from "../categories/categorie";

export interface Fruits {
    id: number;
    name: string;
    quantity: number;
    price: number;
    category: Categories;
  }
