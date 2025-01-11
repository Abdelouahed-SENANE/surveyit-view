import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResultSidebarComponent } from '../result-sidebar/result-sidebar.component';
import { StatisCardComponent } from '../statis-card/statis-card.component';
import { EditionService } from '../../../editions/services/editions.service';
import { ActivatedRoute } from '@angular/router';
import { Chapter, Edition } from '../../../../core/models';
import { LoaderComponent } from '../../../../common/components/loader/loader.component';

@Component({
  selector: 'app-result-item',
  imports: [ResultSidebarComponent, StatisCardComponent, LoaderComponent],
  templateUrl: './result-item.component.html',
  styleUrl: './result-item.component.css',
})
export class ResultItemComponent implements OnInit , OnChanges {
  private editionService: EditionService = inject(EditionService);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  isLoading: boolean = true;
  edition!: Edition;
  chaptersList : Chapter[] = [];

  ngOnInit(): void {
    this.loadEdition();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chapterList']) {
      console.log(changes['chapterList'].currentValue);
      
    }
  }

  loadEdition(): void {
    this.activeRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id) {
        this.editionService.getEdition(id).subscribe({
          next: (res) => {
            this.edition = res.data.edition;
            this.filterChapter(this.edition.chapters)            
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          },
        });
      }
    });
  }

  public filterChapter(chapters: Chapter[]) : void {
    for (const chapter of chapters) {
      if (chapter.questions && chapter.questions.length > 0) {
        this.chaptersList.push(chapter)
      } else {
        if (chapter.subchapters && chapter.subchapters.length > 0) {
          this.filterChapter(chapter.subchapters);
        }
      }
    }    
    
  }

}
