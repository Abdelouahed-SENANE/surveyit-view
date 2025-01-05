import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Edition } from '../../../core/models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements OnInit{
  @Input() editions! : Edition[]
  @Output() sendEditionId = new EventEmitter<string>();
  selectedId! : string
  onSendEditionId(id : string) : void {
    this.sendEditionId.emit(id)
  }
  ngOnInit(): void {
    this.selectedId = this.editions[0].id
  }
}
