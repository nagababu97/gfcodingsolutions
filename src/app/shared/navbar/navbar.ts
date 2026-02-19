import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "../../../../node_modules/@angular/common";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  isServiceOpen= false;
  isProductOpen=false;
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleServices(){
    this.isServiceOpen = !this.isServiceOpen;
    
  }
  toggleProducts(){
    this.isProductOpen = !this.isProductOpen;
  }
}
