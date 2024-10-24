import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../entities/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {

  student:Student=new Student(0,'','','','');
  message:string='';
  constructor(private service:StudentService){}
  
  createStudent(){
    this.service.createStudent(this.student).subscribe({
      next: (data)=>{
        this.message=data;
        this.student=new Student(0,'','','','');
      },
      error: (err) =>{
        console.log(err);
      },
      complete: ()=> console.log("Studnt created")
    })
  }
  
}
