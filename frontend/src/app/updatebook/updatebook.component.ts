import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})

export class UpdatebookComponent implements OnInit {

  bookForm = new FormGroup({
    'bookId':new FormControl('',Validators.required),
    'bookTitle':new FormControl('',Validators.required),
    'bookAuthor':new FormControl('',Validators.required),
    'bookStatus':new FormControl('',Validators.required),


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnebook(this.router.snapshot.params['bookId']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.bookForm.patchValue({
            bookId:res.data[0].bookId,
            bookTitle:res.data[0].bookTitle,
            bookAuthor:res.data[0].bookAuthor,
            bookStatus:res.data[0].bookStatus

        });
      });
  }
//to update a book
bookUpdate() {
  console.log(this.bookForm.value);
  this.service.updatebook(this.router.snapshot.params['bookId'], {
    ...this.bookForm.value,
    bookStatus: this.bookForm.value.bookStatus.toLowerCase(),
  }).subscribe((result: any) => {
    this.bookForm.reset();
    this.successmsg = 'Book successfully updated';
    this.message = true;

  });
}
removeMessage(){
  this.message = false;
}
}
