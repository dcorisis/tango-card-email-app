import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { EmailModel } from '../../models/email-model';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.css']
})
export class NewMailComponent implements OnInit {
  busy: Subscription;
  public newEmailForm: FormGroup;
  public feedbackMessageTimer: Subscription;
  public feedbackMessage: string;
  public showFeedback: boolean;
  public invalidEmail: boolean;
  public invalidContent: boolean;

  constructor(private _fb: FormBuilder, private _homeService: HomeService) { }

  ngOnInit() {
    this.createNewEmailForm();
  }

  private createNewEmailForm() {
		this.newEmailForm = this._fb.group({
			toEmail: [''],
      content: ['']
		}, { validator: this.emailValidator });
  }

  private emailValidator(g: FormGroup) {
    if(g.get('toEmail').value === null){
      return null;
    }
    // RFC 2822 compliant regex
    if (g.get('toEmail').value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) || g.get('toEmail').pristine) {
        return null;
    } else {
        return { 'invalidEmailAddress': true };
    }
  }

	private sendEmail({ value, valid }: { value: EmailModel, valid: boolean }) {
    this.invalidEmail = this.newEmailForm.hasError('invalidEmailAddress') || value.toEmail === '';
    this.invalidContent = value.content === '';
    if (!this.invalidEmail && !this.invalidContent) {
      this.busy = this._homeService.sendMail(value).subscribe(
        emailResult => {
          let email:EmailModel = emailResult;
          if(emailResult){
            this.newEmailForm.reset();
            this.setFeedbackMessage("Email sent");
          }
          else{
            this.setFeedbackMessage("Email failed to send. See history for error code.");
          }
        }, onFailure => console.log('failure', onFailure));
		}
  }

  public setFeedbackMessage(message:string){
    this.feedbackMessage = message;
    this.showFeedback = true;
    let timer = Observable.timer(7000,6000);
    this.feedbackMessageTimer = timer.subscribe(() => {
      this.feedbackMessageTimer.unsubscribe();
      this.showFeedback = false;
    });
  }
  
  public getFeedbackColor():string{
    if(this.feedbackMessage === "Email sent"){
      return '#00ff00';
    }
    else{
      return '#ff0000';
    }
  }
}
