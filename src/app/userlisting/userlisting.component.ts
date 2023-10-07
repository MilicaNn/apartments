import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  constructor(private service:ServiceService){

  }
  userlist: any;
  dataSource:any;
  Loaduser(){
    this.service.GetAll().subscribe(res=>{
      this.userlist=res;
      this.dataSource=new MatTableDataSource(this.userlist);
    });
  }
  displayedColumns: string[] = ['username', 'name', 'email','role', 'status', 'action'];
  
  UpdateUser(code:any){

  }
}
