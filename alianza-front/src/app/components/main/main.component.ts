import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ApiService } from '../../services/api.service';
import { CsvService } from '../../services/csv.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users!: User[];
  user!: User;
  isError: boolean = false;
  searchForm!: FormGroup;
  isSearch: boolean = false;
  sharedKey!: string;

  constructor(private apiService: ApiService,
    private csvService: CsvService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      sharedKey: [null, [Validators.required]],
    });

    this.load();
  }


  load() {
    this.apiService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users
      }
      ,
      error: (error) => {
        console.log(error);
        this.isError = true;
      },
      complete: () => console.info('complete')
    });
  }

  saveCsv() {
    this.csvService.downloadFile(this.users);
  }

}
