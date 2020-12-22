import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import { PostService } from './../../shared/post.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetPostForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  postForm: FormGroup;

  ngOnInit() { 
    this.postApi.GetPostList();
    this.submitPostForm();
  }

  constructor(
    public fb: FormBuilder,
    private postApi: PostService
  ) { }


  /* Reactive post form */
  submitPostForm() {
    this.postForm = this.fb.group({
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
    return this.postForm.controls[controlName].hasError(errorName);
  }
  
  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.postForm.get('publication_date').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Reset form */
  resetForm() {
    this.postForm.reset();
    Object.keys(this.postForm.controls).forEach(key => {
      this.postForm.controls[key].setErrors(null)
    });
  }

  /* Submit post */
  submitPost() {
    if (this.postForm.valid){
      this.postApi.AddPost(this.postForm.value)
      this.resetForm();
    }
  }

}