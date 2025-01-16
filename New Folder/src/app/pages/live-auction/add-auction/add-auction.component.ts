
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-auction',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    NgIf,
    MatNativeDateModule,
  ],
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss'],
})
export class AddAuctionComponent implements OnInit {
  auctionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAuctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.auctionForm = this.fb.group({
      product_id: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      starting_price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      status: ['active', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.auctionForm.patchValue(this.data);
    }
  }

  submit(): void {
    if (this.auctionForm.valid) {
      this.dialogRef.close(this.auctionForm.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
