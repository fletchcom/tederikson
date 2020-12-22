import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import { PostService } from './../../shared/post.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Language {
  name: string;
}

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})

export class EditPostComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  editPostForm: FormGroup;

  ngOnInit() {
    this.updatePostForm();
  }

  constructor(
    public fb: FormBuilder,    
    private location: Location,
    private postApi: PostService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.postApi.GetPost(id).valueChanges().subscribe(data => {
      console.log=(data);
      this.editPostForm.setValue(data);
    })
  }

  /* Update form */
  updatePostForm(){
    this.editPostForm = this.fb.group({
      title: ['', [Validators.required]],
      question: ['', [Validators.required]],
      question_author: ['', [Validators.required]],
      answer: ['', [Validators.required]],
      signature: ['', [Validators.required]],
      publication_date: ['', [Validators.required]]
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.editPostForm.controls[controlName].hasError(errorName);
  }

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.editPostForm.get('publication_date').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Go to previous page */
  goBack(){
    this.location.back();
  }

  /* Submit book */
  updatePost() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    if(window.confirm('Are you sure you want to update?')){
        this.postApi.UpdatePost(id, this.editPostForm.value);
      this.router.navigate(['posts-list']);
    }
  }
}