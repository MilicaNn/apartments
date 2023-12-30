import { Component, OnInit, ViewChild } from '@angular/core';
// import{ BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
// import { CalendarOptions } from '@fullcalendar/core'; 
// import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // modalRef?:BsModalRef;
  // title:any;

  // presentDays:number=0;
  // absentDays:number=0;

  // //add some events
  // events: any=[
  //   { title: 'present', date: '2023-12-08' , color:'#0000FF'},
  //   { title: 'absent', date: '2023-12-09' , color:'#0000FF'},
  //   { title: 'present', date: '2023-12-10' , color:'#ff0000'},
  // ]

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   plugins: [dayGridPlugin],
  //   events:this.events,
  //   eventClick:this.handleDateClick.bind(this),
  // };


  // config={
  //   animated:true
  // };

  // @ViewChild('template') template!:string;
  // start:any;

  // constructor( private modalService:BsModalService){}

  // ngOnInit(): void {
  //   this.events.forEach((e: {[x:string]:string;})=> {
  //     if(e["title"]=='Present'){
  //       this.presentDays++;
  //     }else{
  //       this.absentDays++;
  //     }
  //   });
  //   console.log(this.presentDays);
  //   console.log(this.absentDays);
  // }

  // handleDateClick(arg:any){
  //   console.log(arg);
  //   console.log(arg.event._def.title);
  //   this.title=arg.event._def.title;
  //   this.start=arg.event.start;
  //   this.modalRef=this.modalService.show(this.template, this.config);
  // }











}
