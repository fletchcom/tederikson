import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap  } from "@angular/router";
import { Location } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import { Post } from '../../shared/post';
import { PostService } from './../../shared/post.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
