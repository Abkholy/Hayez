import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore/public_api';
import { Injectable } from '@angular/core';
import { Halls } from '../interfaces/halls';
@Injectable()
export class HallsService {
  hallsDocument: AngularFirestoreDocument<Halls>;
  hallsCollection: AngularFirestoreCollection<Halls>;
  halls: Observable<Halls[]>;
  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  getHalls() {
    this.hallsCollection = this.afs.collection('halls');
    this.halls = this.afs
      .collection('halls')
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Halls;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.halls;
  }
  addHall(hall: Halls) {
    this.hallsCollection = this.afs.collection('halls');
    this.halls = this.afs
      .collection('halls')
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Halls;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    this.hallsCollection.doc(`${hall.hallName}`).set(hall);
  }
}
