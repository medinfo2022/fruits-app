import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

import { Categorieservice } from 'src/app/categories/categorie.service';
import { Categories } from 'src/app/categories/categorie';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  allCategories: Categories[] = [];
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category: {
      id: 0,
      name: '',
      description: '',
    },
  };

  constructor(
    private fruitService:FruitsService,
    private categorieservice: Categorieservice,
    private router:Router ) {}

    ngOnInit(): void {

      this.getCategories();
    }

    getCategories() {
      this.categorieservice.get().subscribe((data) => {
        this.allCategories = data;
      });
    }

    create(){
      this.fruitService.create(this.fruitForm)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/fruits/home"])
        },
        error:(err) => {
          console.log(err);
        }
      })
    }

}
