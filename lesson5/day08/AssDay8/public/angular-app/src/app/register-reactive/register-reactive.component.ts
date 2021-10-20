import { Component, OnInit } from '@angular/core';
// import { FormControl , FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';


@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {
registrationForm!:FormGroup;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm=this._formBuilder.group({
      name:["Jack",Validators.required],
      username:["jack123", [Validators.required, Validators.minLength(6)]],
      password:["123",Validators.required],
      passwordRepeat:["123",Validators.required]
    })
    // this.registrationForm = new FormGroup({
    //   name: new FormControl("Jack"),
    //   username: new FormControl("jack123"),
    //   password: new FormControl(123),
    //   passwordRepeat: new FormControl(123)
    // })
  }
onSubmit():void{
  console.log("Form submitted");
console.log("Form username",this.registrationForm.value.username);
console.log("Form values",this.registrationForm.value);


}
}
