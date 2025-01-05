import { Component, Input } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent , RouterModule , CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() navlinks : {label : string , path : string}[] = []

}
