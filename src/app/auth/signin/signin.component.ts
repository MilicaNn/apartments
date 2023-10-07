import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService,
    private service: ServiceService, private router: Router) {
    sessionStorage.clear();
  }
  userdata: any;

  signinform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  procedsignin() {
     if(this.signinform.valid){
    //    this.service.procedsignupup(this.signinform.value).subscribe(res=>{
    //      this.toastr.success('Please contact admin for enable access','Registered succesfully')
    //      this.router.navigate(['home']);
    //    });
    //  }
    //  else{
    //    this.toastr.warning('Please enter valid data');
    //  }
 // 
      this.service.Getbycode(this.signinform.value.username).subscribe(res=>{
        this.userdata=res;
        console.log(this.userdata);
        if(this.userdata.password===this.signinform.value.password){
          if(this.userdata.isactive){
            sessionStorage.setItem('username',this.userdata.id);
            sessionStorage.setItem('userrole',this.userdata.role);
            this.router.navigate(['']);

          }else{
            this.toastr.error('Please contact admin','in Active User');
          }
        }else{
          this.toastr.error('Invalid credentials');
        }
      });
   }
     }
}
