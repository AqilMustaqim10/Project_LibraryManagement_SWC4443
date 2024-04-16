import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllbook();


  }

  //get delete id
  deleteId(bookId:any){
    console.log(bookId,'deleteid==>');
    this.service.deletebook(bookId).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete book successful!";
      this.getAllbook();

    });

  }

  //get book
  getAllbook(){

    this.service.getAllbook().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}
