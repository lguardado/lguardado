import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss']
})
export class FeedbackModalComponent {

  constructor(
    public dialogRef: MatDialogRef<FeedbackModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

