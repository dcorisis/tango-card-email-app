import { Component, OnInit } from '@angular/core';
import { EmailModel } from '../../models/email-model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public PastEmails: EmailModel[];
	public newEmailForm: FormGroup;

  constructor(private _fb: FormBuilder, private _homeService: HomeService) { }

  ngOnInit() {
    this.createNewEmailForm();
  }

	private createNewEmailForm() {
		this.newEmailForm = this._fb.group({
			RecipientEmail: ['', []],
			EmailBody: ['', []]
		}, { validator: this.emailFormValidatorNoRecipient });
  }
  
	private emailFormValidatorNoRecipient(g: FormGroup) {
    //console.log(g.get('RecipientEmail'));
    return g.get('RecipientEmail').value !== ''// || g.get('RecipientEmail').pristine
			     ? null : { 'noRecipient': true };
	}

	private sendEmail({ value, valid }: { value: EmailModel, valid: boolean }) {
    if (valid) {
      console.log(value);
      this._homeService.sendMail("").subscribe(
        user => {
          console.log(user);
        }, onFailure => console.log('failure', onFailure));
		}
	}

}
