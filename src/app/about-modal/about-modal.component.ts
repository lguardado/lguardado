import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.scss']
})
export class AboutModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AboutModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

