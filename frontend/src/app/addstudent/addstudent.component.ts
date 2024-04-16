import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnestudent(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.studentForm.patchValue({
        studentID:res.data[0].studentID,
        studentName:res.data[0].studentName,
        studentEmail:res.data[0].borrowDate,
        studentPhone:res.data[0].returnDate,

      });
    });
  }
  }

  studentForm = new FormGroup({
    'studentID':new FormControl('',Validators.required),
    'studentName':new FormControl('',Validators.required),
    'borrowDate':new FormControl('',Validators.required),
    'returnDate':new FormControl('',Validators.required)


  });

  //to create a new student
  studentSubmit(){
    if(this.studentForm.valid){
      console.log(this.studentForm.value);
      this.service.createstudent( this.studentForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.studentForm.reset();
        this.successmsg = 'Add Student Profile Successful';
      });

    }
    else{
      this.errormsg = 'Add Student Profile Unsuccessful';
    }

  }
//to update a student
studentUpdate()
{
  console.log(this.studentForm.value,'updatedform');

  if(this.studentForm.valid)
  {
    this.service.updatestudent(this.studentForm.value,this.getparamid).subscribe((res)=>{
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
