import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {
  statenam:any={}
  showError:any;
  errorMessage: any;
  stateIdMd:any;
  roleName: string | null;
  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
  {
    console.log("Constructor");
    this.roleName=authService.getRole;
  }
  ngOnInit(): void {
    console.log("ngOnInit");
    this.dashboardView();
  }

  dashboardView()
  {
     //complete this function
    }
     
    
  }

