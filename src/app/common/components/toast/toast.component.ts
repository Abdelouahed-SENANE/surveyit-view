import { Component, Input } from '@angular/core';
import { ErrorComponent } from "../error/error.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [ErrorComponent , CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input() errorMessage! : string
  @Input() isToast! : boolean
}
