import { Component, OnInit } from '@angular/core';
import { Student } from '../../entities/student';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})
export class StudentEditComponent implements OnInit{
  student:Student=new Student(0,'','','','');
  message:string='';

  constructor(private service:StudentService,
    private activatedRoute:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id'];
    this.loadStudent(id);
  }

  loadStudent(id:number){
    this.service.getOneStudent(id).subscribe({
next: (data)=> this.student=data,
error: (err) =>console.error(err),
complete: ()=> console.info("Student get Successfully"),
    });
  }

  updateStudent(){
    this.service.updateStudent(this.student).subscribe({
next: (data)=>{
  this.message=data;
  this.router.navigate(['/all'])
},
error: (err)=> console.log(err),
complete: ()=> console.info('student update successfully')

    });
  }
}
