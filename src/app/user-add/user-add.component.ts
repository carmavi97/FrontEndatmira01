import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  [x: string]: any;

  angForm: FormGroup;
  constructor(private router: Router,
    private fb: FormBuilder, private bs: UserService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      nombre: ['', Validators.required ],
      apellidos: ['', Validators.required ]
      
    });
  }

  addUser(nombre,apellidos, direccion, telefono) {
    this.bs.addUser(nombre, apellidos, direccion, telefono);
    this.router.navigate(['users']);
    alert("User added successfully");
  }

  ngOnInit() {
  }

}
