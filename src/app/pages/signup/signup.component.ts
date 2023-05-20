import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snak: MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:''

  }

  ngOnInit(): void {
  }

  formSubmit()
{
  if(this.user.username=='' || this.user.username==null){
    this.snak.open('Username is required !!','ok',{
      duration : 3000,
    })
  }

  //addUser: userService
  this.userService.addUser(this.user).subscribe(
    (data: any)=>{
      //success
      console.log(data);
      Swal.fire('Success', 'User is register id:'+data.id, 'success');
    },
    (error)=>{
      //error
      console.log("error");
      alert("error");

    }
  )
 
}

}
