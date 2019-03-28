import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(number: number): void {
    console.log('opening');
    const dialogRef = this.dialog.open(FeedbackModalComponent, {
      width: '80%',
      minWidth: '60%',
      maxHeight: '150vw',
      height: 'fitheight',
      minHeight: '60%',
      data: number,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  ngOnInit() {
  }

}
