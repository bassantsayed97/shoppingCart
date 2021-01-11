import { Component, OnInit } from '@angular/core';
import{FormControl , FormGroup , Validators} from '@angular/forms';@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  registerForm:FormGroup = new FormGroup(
    {
      useremail:new FormControl(null ,[ Validators.required , Validators.email]),
      address:new FormControl(null ,[ Validators.required  ]),
      password:new FormControl(null ,[ Validators.required ]),
    }
  )
  constructor() { }

  ngOnInit(): void {
  }
  getFormData(data){

  }
  delete(){
    localStorage.clear();

  }
}
