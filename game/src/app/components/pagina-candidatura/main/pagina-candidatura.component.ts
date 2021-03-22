import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninUserService } from 'src/app/services/signin-user.service';

@Component({
  selector: 'app-pagina-candidatura',
  templateUrl: './pagina-candidatura.component.html',
  styleUrls: ['./pagina-candidatura.component.scss']
})
export class PaginaCandidaturaComponent implements OnInit {

  constructor(private fb : FormBuilder, private signinUserService : SigninUserService, private router: Router) { }

  formSignin : FormGroup

  ngOnInit(): void {

      this.formSignin = this.fb.group({
        nome: [''],
        cognome: [''],
        email: [''],
        password: ['']
      })

  }

  submitForm() {
    this.signinUserService.create(this.formSignin.value).subscribe(res => 
      {
        console.log('User created!')
        this.router.navigateByUrl('/home')
      
      })
  }

}
