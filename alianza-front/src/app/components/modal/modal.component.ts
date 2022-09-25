import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  userForm!: FormGroup;
  user!: User;
  isValidFormSubmitted = false;
  isError: boolean = false;
  view: boolean = true;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      nameUser: [null, [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      phoneUser: [null, [Validators.required, Validators.pattern("[0-9]*")]],
      mailUser: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      dateUser: [null, [Validators.required]]
    });
  }

  onFormSubmit() {

    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);

    this.user = {
      name: this.userForm.get('nameUser')?.value,
      phone: this.userForm.get('phoneUser')?.value,
      mail: this.userForm.get('mailUser')?.value,
      dateSave: this.userForm.get('dateUser')?.value,
    }

    this.apiService.saveUser(this.user).subscribe({

      next: (user) => {
        this.user = user

        this.view = false

        this.newItemEvent.emit();

        this.router.navigate(
          ['/main']
        )

      }
      ,
      error: (error) => {
        console.log(error);
        this.isError = true;
      },
      complete: () => console.info('complete')
    });

  }

  get f() {
    return this.userForm.controls;
  }

}
