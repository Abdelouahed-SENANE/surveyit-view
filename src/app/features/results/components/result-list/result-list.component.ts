import {Component, inject, OnInit} from '@angular/core';
import {ResultsService} from '../../results.service';
import {Edition} from '../../../../core/models';
import {LoaderComponent} from '../../../../common/components/loader/loader.component';
import {ResultCardComponent} from '../result-card/result-card.component';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-result-list',
  imports: [
    LoaderComponent,
    ResultCardComponent,
  ],
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.css'
})
export class ResultListComponent implements  OnInit {
  private readonly service: ResultsService = inject(ResultsService)
  isLoading : boolean = true;
  editions! : Edition[]
  ngOnInit() {
    this.loadEditions()
  }

  loadEditions() {
    this.service.getEditions().subscribe({
      next : (res) => {
        this.editions = res.data.editions
      },
      error : (err) => {
        console.error(err)
      },
      complete : () => {
        setTimeout(() => {
          this.isLoading = false
        },400)
      }
    })
  }

}
