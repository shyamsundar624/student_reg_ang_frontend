import { Component, OnInit } from '@angular/core';
import { Student } from '../../entities/student';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  message:any='';

  students: Student[]=[];
  constructor(private service:StudentService,private router:Router){}

  ngOnInit() {
   this.getAllStudents();
  }

getAllStudents(){
  this.service.getAllStudents().subscribe({
    next:(data)=>this.students=data,
    error: (err)=> console.log(err),
    complete: ()=> console.info("complete data fetching"),
    
  })
}

deleteStudent(id:number){
  this.service.deleteStudent(id).subscribe({
next: (data)=>{
  console.log(data);
  this.message=data;
  this.getAllStudents();
},
error: (err)=> console.log(err),
complete: ()=> console.info("Student Deleted")
  });
}

editStudent(id:number){
this.router.navigate(['/edit',id]);
}
}
