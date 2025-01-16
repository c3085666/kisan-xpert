import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/authservice';

@Component({
  selector: 'app-live-auction',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    TablerIconsModule,
    RouterModule,
  ],
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss'],
})
export class LiveAuctionComponent implements OnInit {
  displayedColumns: string[] = [
    'product_id',
    'start_time',
    'end_time',
    'starting_price',
    'status',
    'action',
  ];
  dataSource: any[] = [];
  totalRecords = 0;
  loading = false;
  userDetails:any;
  constructor(private authService: AuthService,private dialog: MatDialog, private changeDetection: ChangeDetectorRef) {}

  auctionsData = [
    {
      id: 1,
      product_id: 201,
      start_time: '2025-01-20T10:00:00',
      end_time: '2025-01-20T18:00:00',
      starting_price: 500.0,
      status: 'active',
    },
    {
      id: 2,
      product_id: 202,
      start_time: '2025-01-21T09:00:00',
      end_time: '2025-01-21T17:00:00',
      starting_price: 750.0,
      status: 'completed',
    },
    {
      id: 3,
      product_id: 203,
      start_time: '2025-01-22T08:30:00',
      end_time: '2025-01-22T16:30:00',
      starting_price: 300.0,
      status: 'active',
    },
  ];

  ngOnInit(): void {
    this.fetchTableData();
    this.userDetails=this.authService.currentUserValue;
  }

  fetchTableData(): void {
    this.loading = true;
    setTimeout(() => {
      this.dataSource = this.auctionsData;
      this.totalRecords = this.auctionsData.length;
      this.loading = false;
    }, 1000);
  }

  AddAuction() {
    const dialogRef = this.dialog.open(AddAuctionComponent, {
      width: '680px',
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log('Auction added:', val);
        }
      },
    });
  }

  EditAuction(data: any) {
    const dialogRef = this.dialog.open(AddAuctionComponent, {
      data: data,
      width: '680px',
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log('Auction edited:', val);
        }
      },
    });
  }

  // DetailAuction(data: any) {
  //   const confirmation = confirm('Are you sure you want to delete?');
  //   if (confirmation) {
  //     console.log('Deletion confirmed:', data);
  //   } else {
  //     console.log('Deletion canceled');
  //   }
  // }
  qrCode(data: any){

  }
}
