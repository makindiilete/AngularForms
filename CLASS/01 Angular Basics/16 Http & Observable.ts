/*
HTTP AND OBSERVABLE
1)  We make http requests from our services and the web server return http response in form on observable
2)  We cast this observable to a model we defined in our app inform of an interface
3)  Any component that needs to make use of this observable will need to subscribe to it, the subscription will return the response asyncronously

FETCHING DATA USING HTTP
We use the HttpClient Module to fetch data from web server in angular 5+

1)  Inject the HttpClientModule in the imports[] of your module
2)  Declare the httpClientModule as a dependency in the constructor of the service where it will be used
3)  Create the http method in the service
4)  Inject the service as a dependency in the component that needs it and subscribe to it
*/

//employee.ts
export interface IEmployee {
  id: number;
  name: string;
  email: string;
}


//post.ts
export interface IPost {
  title: string;
  body: string;
  id: number;
}


//httpServie.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  getUrl = 'https://jsonplaceholder.typicode.com/users';
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  updateUrl = 'https://jsonplaceholder.typicode.com/posts/11';
  constructor(private http: HttpClient) {}

  // GET
  // ds method returns an observable of type IEmployee (model) Array
  getUsers(): Observable<IEmployee[]> {
    // we cast d response/observable from http get request to our IEmployee model
    return this.http.get<IEmployee[]>(this.getUrl);
  }

  // GET BY ID
  getUser(id: number): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.getUrl + '/' + id);
  }

  // POST
  createPost(postDetails: IPost): Observable<any> {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.post(this.postUrl, postDetails, { headers });
  }

  // PUT
  editPost(postDetails: IPost): Observable<any> {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.put(this.updateUrl, postDetails, { headers });
  }
  // DELETE
  deletePost(): Observable<any> {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.delete(this.updateUrl, { headers });
  }
}


//second-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpService } from '../Http & Observable/http.service';
import { IEmployee } from '../Http & Observable/employee';
import { IPost } from '../Http & Observable/post';

@Component({
  selector: 'app-second-detail',
  template: `
    <h1>Employee Details</h1>
    <ul>
      <li *ngFor="let emp of employee">
        {{ emp.id }} - {{ emp.name }} - {{ emp.age }}
      </li>
    </ul>
    <h1>User details</h1>
    <ul>
      <li *ngFor="let user of users">
        {{ user.id }} - {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <button (click)="addPost()">Add Post</button>
    <button (click)="updatePost()">Edit Post</button>
    <button (click)="deletePost()">Delete Post</button>
  `,
  styleUrls: ['./second-detail.component.css'],
})
export class SecondDetailComponent implements OnInit {
  employee;
  users: IEmployee[];
  singleUser: IEmployee[];
  post: IPost = {
    title: 'Forex Trading',
    body: 'How To Trade The Market',
    id: 11,
  };
  postEdit: IPost = {
    title: 'Forex Trading',
    body: 'How To Trade The Market Part 2',
    id: 11,
  };
  constructor(
    private employeeService: EmployeeService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployees();
    this.fetchPosts();
    this.fetchUsers();
  }

  // GET
  fetchUsers() {
    this.httpService.getUser(5).subscribe((data) => {
      this.singleUser = data;
      console.log('User = ', data);
    });
  }

  // GET
  fetchPosts() {
    this.httpService.getUsers().subscribe((data) => {
      console.log('Emp data = ', data);
      this.users = data;
    });
  }

  // POST
  addPost() {
    this.httpService
      .createPost(this.post)
      .subscribe((data) => console.log(data));
  }

  // PUT
  updatePost() {
    this.httpService
      .editPost(this.postEdit)
      .subscribe((data) => console.log(data));
  }

  // DELETE
  deletePost() {
    this.httpService.deletePost().subscribe((data) => console.log(data));
  }
}
