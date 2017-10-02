import { HomeService } from '../../services/home.service';
import { Subject } from 'rxjs/Rx';
import { EmailModel } from '../../models/email-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-history',
  templateUrl: './mail-history.component.html',
  styleUrls: ['./mail-history.component.css']
})
export class MailHistoryComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private emailsPerPage: number;
  public totalPages: number;
  public currentPage: number;
  private pastEmails: EmailModel[];
  public currentPagedEmails: EmailModel[];

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.emailsPerPage = 5;
    this.currentPage = 1;
    this.getPastEmails();
  }

  private getPastEmails(){
		this._homeService.getMail()
			.takeUntil(this.ngUnsubscribe)
			.subscribe((emails: EmailModel[]) => {
        this.pastEmails = emails;
        this.totalPages = ((this.pastEmails.length - (this.pastEmails.length % this.emailsPerPage)) / this.emailsPerPage) + (this.pastEmails.length % this.emailsPerPage > 0 ? 1 : 0);
        this.setCurrentPagedEmails();
			});
  }

  public prevPage(){
    this.currentPage--;
    this.setCurrentPagedEmails();
  }

  public nextPage(){
    this.currentPage++;
    this.setCurrentPagedEmails();
  }

  public updatePage(newValue){
    let newPage = (+newValue.target.value) - 1;
    if(newPage < 1){
      newPage = 1;
    }
    if(newPage > this.totalPages){
      newPage = this.totalPages;
    }
    this.currentPage = newPage;
    newValue.target.value = this.currentPage;
    this.setCurrentPagedEmails();
  }

  public setCurrentPagedEmails(){
    this.currentPagedEmails = [];
    for(let i = 0; i < this.emailsPerPage; i++){
      if(i + ((this.currentPage - 1) * this.emailsPerPage) >= this.pastEmails.length){
        break;
      }
      this.currentPagedEmails.push(this.pastEmails[i + ((this.currentPage - 1) * this.emailsPerPage)]);
    }
  }

  public openEmailDetails(emailId){
    document.getElementById("openModalButton").click();
  }

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

}
