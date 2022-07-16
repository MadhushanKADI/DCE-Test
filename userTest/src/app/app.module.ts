import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input'
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UserService} from './user.service';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavigationComponent } from './navigation/navigation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateUserDialogComponent } from './update-user-dialog/update-user-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavigationComponent,
    UpdateUserDialogComponent,
    
  ],
  entryComponents: [UpdateUserDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass:ShowOnDirtyErrorStateMatcher},
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
