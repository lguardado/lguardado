import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutModalComponent } from '../about-modal/about-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.scss']
})
export class AboutComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog(company: string): void {

    const dialogRef = this.dialog.open(AboutModalComponent, {
      width: '80%',
      minWidth: '60%',
      maxHeight: '150vw',
      height: 'fitheight',
      minHeight: '60%',
      data: company,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
