import { Component } from '@angular/core';
import { OndernemingComponent } from './onderneming/onderneming.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  // openDialog(enterAnimationDuration:string, exitAnimationDuration:string):void {
  //   const dialogRef = this.dialog.open(OndernemingComponent)

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`)
  //   })
  // }

  openDialogOnderneming(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OndernemingComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  title = 'Handelsregister-light';
}
