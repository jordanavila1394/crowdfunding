import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss'],
})
export class DashHomeComponent implements OnInit {

  public searchCampaigns : FormGroup;


  constructor(
    private fb: FormBuilder,
    ) {
      this.searchCampaigns = this.fb.group({
        search: ['', Validators.required],
      });

    }

  ngOnInit() {}

  onSubmitSearch() {

  }
}
