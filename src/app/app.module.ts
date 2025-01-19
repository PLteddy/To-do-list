import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; // Import du composant TodoComponent

@NgModule({
  declarations: [ // Déclare les composants ici
    AppComponent,
    TodoComponent
  ],
  imports: [ // Modules Angular
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Démarre avec AppComponent
})
export class AppModule { }
