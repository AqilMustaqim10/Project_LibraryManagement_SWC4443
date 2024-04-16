import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllstudent();


  }

  //get delete id
  deleteId(Id:any){
    console.log(Id,'deleteid==>');
    this.service.deletestudent(Id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete student profile successful!";
      this.getAllstudent();

    });

  }

  //get student
  getAllstudent(){

    this.service.getAllstudent().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}
