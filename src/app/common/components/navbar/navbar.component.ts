import { Component, inject, Input } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../core/services/auth/storage.service';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent , RouterModule , CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() navlinks : {label : string , path : string}[] = []
  readonly storage : StorageService = inject(StorageService) 
  readonly router : Router = inject(Router) 

  logout() : void {
    this.storage.clear()
    window.location.reload()
  }
 
}
