import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';
  products:any[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:44389/api/products').subscribe((response:any)=>{
      this.products=response.data;
    },error=>{
      console.log(error);
    })
  }

}
