import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { SurveyRequestDTO } from '../../../../common/response/api-request.module';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { UserResponseDTO } from '../../../../common/response/api-response.module';


@Component({
  selector: 'app-survey-form',
  standalone : false,
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export class SurveyFormComponent implements OnInit{
  private readonly authService : AuthService = inject(AuthService)
  @Input() isActive! : boolean
   authenticated! : any 
  @Input() survey : SurveyRequestDTO = {id : '', title : '' , description : '' , ownerId : ''}

  @Output() toggleForm : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submit : EventEmitter<SurveyRequestDTO> = new EventEmitter<SurveyRequestDTO>();

  ngOnInit(): void {
    this.loadAuthenticated()
  }

  loadAuthenticated() : void {
     this.authService.loadUser().subscribe({
      next : (res) => {
        this.authenticated = res.data
      },
      error : (err) => {
        console.error(err);
        
      }
    })
  }

  setIsActive() : void {
    this.isActive = !this.isActive
    this.toggleForm.emit(this.isActive)
  }

  onSubmit() : void {
    this.survey.ownerId = this.authenticated.id
    this.submit.emit(this.survey)
    this.resetForm()
    this.isActive = false
  }

  resetForm() : void {
    this.survey = {id : '',title : '' , description : '' , ownerId : ''}
  }

  }


