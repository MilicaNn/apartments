import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import{ BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
// import { CalendarOptions } from '@fullcalendar/core'; 
// import dayGridPlugin from '@fullcalendar/daygrid';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
}

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements AfterViewInit{

  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
// lista terapije
  terapije: string[] = [
    'Hydrotherapy',
    'Electrotherapy',
    'Physical - Kinesis Therapy',
    'Peloid Therapy',
    'Inhalations'
  ];
//panel za terapije
  panelOpenState = false;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Spine and back problems', symbol: '(sciatica, lumbago, spondylosis)'},
  {position: 2, name: 'Several types of rheumatism', symbol: '(chronic, acute...)'},
  {position: 3, name: 'Other diseases of the musculoskeletal system', symbol: '(arthrosis, conditions after injuries...)'},
  {position: 4, name: 'Gynecological problems',symbol: '(sterility, inflammation)'},
  {position: 5, name: 'Diseases of the lungs and other respiratory organs', symbol: '(chronic bronchitis, bronchial asthma, laryngitis)'},
  {position: 6, name: 'Conjunctivitis', symbol: '(bacterial, viral, allergic, chemical)'},
  {position: 7, name: 'Diabetes', symbol: '(type 1, type 2 and gestational diabetes)'},
  {position: 8, name: 'Anemia', symbol: '(Iron-deficiency anemia,Vitamin-deficiency anemias)'},
  {position: 9, name: 'Some forms of neurosis and states of psychophysical exhaustion of the organism;', symbol: ''},
  {position: 10, name: 'Diseases of the kidneys and urinary tract', symbol: '(post-traumatic conditions after breaking or surgical removal of kidney stones, sand in the urinary tract, various inflammations of the urinary tract);'},
  {position: 11, name: 'Diseases of bile, bile ducts, pancreas and liver', symbol: ''},
  {position: 12, name: 'Diseases of the digestive tract', symbol: '(stomach ulcers, chronic gastritis)'},
  {position: 13, name: 'Skin diseases', symbol: '(eczema)'},


];
