import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnebook(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.bookForm.patchValue({
        bookId:res.data[0].bookId,
        bookTitle:res.data[0].bookTitle,
        bookAuthor:res.data[0].bookAuthor,
        bookStatus:res.data[0].bookStatus,

      });
    });
  }
  }

  bookForm = new FormGroup({
    'bookId':new FormControl('',Validators.required),
    'bookTitle':new FormControl('',Validators.required),
    'bookAuthor':new FormControl('',Validators.required),
    'bookStatus':new FormControl('',Validators.required)


  });

  //to create a new book
  bookSubmit(){
    if(this.bookForm.valid){
      console.log(this.bookForm.value);
      this.service.createbook( this.bookForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.bookForm.reset();
        this.successmsg = 'Add Book Successful';
      });

    }
    else{
      this.errormsg = 'Add Book Unsuccessful';
    }

  }
//to update a book
bookUpdate()
{
  console.log(this.bookForm.value,'updatedform');

  if(this.bookForm.valid)
  {
    this.service.updatebook(this.bookForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}
}
