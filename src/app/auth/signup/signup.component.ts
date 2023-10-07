import { Component } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ToastrService}from'ngx-toastr';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private builder:FormBuilder, private toastr:ToastrService,
    private service:ServiceService, private router: Router){

  }
  signupform=this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required,Validators.minLength(5) ])),
    name:this.builder.control('', Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%?&].{8,}')])),
    email:this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender:this.builder.control('male'),
    role:this.builder.control(''),
    isactive:this.builder.control(true)
  });


  procedsignup(){
    if(this.signupform.valid){
      this.service.procedsignupup(this.signupform.value).subscribe(res=>{
        this.toastr.success('Please contact admin for enable access','Registered succesfully')
        this.router.navigate(['signin']);
      });
    }
    else{
      this.toastr.warning('Please enter valid data');
    }
}



}

