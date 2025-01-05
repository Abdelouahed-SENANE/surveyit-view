import { Component } from '@angular/core';
import { LogoComponent } from '../../../common/components/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'panel-sidebar',
  imports: [RouterModule , LogoComponent],
  templateUrl: './panel-sidebar.component.html'
})
export class SidebarComponent {}
