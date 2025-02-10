import { Component, Input } from '@angular/core';
import { ErrorComponent } from "../error/error.component";
import { CommonModule } from '@angular/common';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-toast',
  imports: [ErrorComponent , CommonModule , SuccessComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input() message! : string
  @Input() isActive! : boolean
  @Input() isError! : boolean
  @Input() isSuccess! : boolean

}
