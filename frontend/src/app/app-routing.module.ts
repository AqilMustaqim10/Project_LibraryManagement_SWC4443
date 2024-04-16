import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent} from './viewstudent/viewstudent.component';
import { UpdatestudentComponent} from './updatestudent/updatestudent.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent},
   { path: 'aboutus', component: AboutusComponent},
   { path: 'faq', component: FaqComponent},
   { path: 'addstudent', component: AddstudentComponent},
   { path: 'viewstudent', component: ViewstudentComponent},
   { path: 'updatestudent/:Id', component: UpdatestudentComponent},
   { path: 'addbook', component: AddbookComponent},
   { path: 'viewbook', component: ViewbookComponent},
   { path: 'updatebook/:bookId', component: UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
