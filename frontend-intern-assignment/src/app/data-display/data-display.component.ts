import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  data: any[] = [];
  sortedData: any[] = [];
  errorMessage: string | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data;
        this.sortedData = this.sortData(this.data);
      },
      (error) => (this.errorMessage = error)
    );
  }

  sortData(data: any[]): any[] {
    return data.sort((a, b) => a.title.localeCompare(b.title));
  }
}
