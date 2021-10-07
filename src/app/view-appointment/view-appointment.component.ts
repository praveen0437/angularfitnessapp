import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service'

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  data=[];

  constructor(private dataService:UserService) { }

  

  ngOnInit() {
    this.dataService.getfitnessdata().subscribe((data:any[])=>{
      this.data = data;
    })

    
  }
  
  getfitness() {
    
  }

  deleteAppointment(){}

  editAppointment(){}
}
