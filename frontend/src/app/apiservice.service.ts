import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

//for student
const basestudentUrl = "http://localhost:8080/student"
const createstudentUrl = "http://localhost:8080/student/add"
const delstudentUrl = "http://localhost:8080/student/del"
const putstudentUrl = "http://localhost:8080/student/put"

//for book
const basebookUrl = "http://localhost:8080/book"
const createbookUrl = "http://localhost:8080/book/add"
const delbookUrl = "http://localhost:8080/book/del"
const putbookUrl = "http://localhost:8080/book/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }

// FOR STTUDENT
//get all 
getAllstudent():Observable<any>{
  const url = "http://localhost:8080/allstudent"
  return this._http.get<any>(url)
}

 // create
 createstudent(student: any):Observable<any>{
  console.log(student,'createapi=>');
  return this._http.post(createstudentUrl, student)
}

//deleting 

deletestudent(Id: any): Observable<any> {
  return this._http.delete(`${delstudentUrl}/${Id}`);

}

//update 
updatestudent(Id: any, student: any): Observable<any> {
  return this._http.put(`${putstudentUrl}/${Id}`, student);

}

//get one 
getOnestudent(Id:any):Observable<any>{
  return this._http.get(`${basestudentUrl}/${Id}`);
}


//FOR BOOK
//get all 
getAllbook():Observable<any>{
  const url = "http://localhost:8080/allbook"
  return this._http.get<any>(url)
}

 // create
 createbook(book: any):Observable<any>{
  console.log(book,'createapi=>');
  return this._http.post(createbookUrl, book)
}

//deleting 

deletebook(bookId: any): Observable<any> {
  return this._http.delete(`${delbookUrl}/${bookId}`);

}

//update 
updatebook(bookId: any, book: any): Observable<any> {
  return this._http.put(`${putbookUrl}/${bookId}`, book);

}

//get one 
getOnebook(bookId:any):Observable<any>{
  return this._http.get(`${basebookUrl}/${bookId}`);
}
}
