import { Component, OnInit } from '@angular/core';
import { faBars, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submitted=false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({email:["",[Validators.email,Validators.required]],
      password:["",[Validators.required,Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}")]]
    })
    console.log("logged==>",this.loginForm);
  }
get formControl(){
  return this.loginForm.controls;
}
onLogin(){
this.submitted=true;
if(this.loginForm.valid){
  console.log("user-login===>",this.loginForm.valid);
  localStorage.setItem("user-data", JSON.stringify(this.loginForm.value));
  this.router.navigate(['./']);
}
}
}
