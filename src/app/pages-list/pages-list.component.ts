import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Component({
  selector: 'pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent implements OnInit {
  title = 'tederikson';
  pagesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.pagesObservable = this.getPages('/pages');

  }
  getPages(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}