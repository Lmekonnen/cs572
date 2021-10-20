import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.css']
})
export class RegisterTemplateComponent implements OnInit {
  @ViewChild('registrationForm')
  registrationForm!: NgForm
  user!: User;
  constructor(private router: Router,private gamesDataService:GamesDataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      name: "",
      username: "",
      password: "",
      passwordRepeat: ""
    }
    setTimeout(() => { this.registrationForm.setValue(this.user) })
    

  }

  onSubmit() {
    const newUser=this.registrationForm.value
    this.gamesDataService.addUser(newUser).then(response => this.user=response)
    this.router.navigateByUrl('');
    console.log("submitted");
    console.log("values are", this.registrationForm.value);
    console.log("User", this.user);


  }
  onClear() {
    this.registrationForm.resetForm()
    // form.resetForm;
    this.user = {
      name: "",
      username: "",
      password: "",
      passwordRepeat: ""

    }
  }
}
export class User {
  name!: string;
  username!: string;
  password!: string;
  passwordRepeat!: string;

}
