import { NoteService } from './../note.service';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  nottesArry: any[] = [];

  addNote: FormGroup = new FormGroup({
    'title': new FormControl(null),
    'desc': new FormControl(null),

  })

  editNote: FormGroup = new FormGroup({
    'title': new FormControl(null),
    'desc': new FormControl(null),

  })
  dataservise: any
  token: any = localStorage.getItem("usertoken")
  citizenID = ``
  globleIdNote = ``
  globleDelId = ``
  constructor(private _AuthService: AuthService, private _NoteService: NoteService) {


  }
  ngOnInit(): void {
    this.dataservise = this._AuthService.userlogin.getValue()
    this.getfunction()
  }
  addFunction(data: any) {
    console.log(data.value)
    // add note
    let addOject = {
      title: data.value.title,
      desc: data.value.desc,
      citizenID: this.dataservise._id,
      token: this.token,

    }
    this._NoteService.addNote(addOject).subscribe((res) => {
      if (res.message == "success") {
        this.getfunction();
        (document.querySelector(".btn-primary") as HTMLElement).click();
      }
    })
  }

  getIdNote(data: any) {
    this.globleIdNote = data
  }
  // edit fun 
  editFunction(data: any) {
    console.log(data.value)
    // add note
    let editOject = {
      token: this.token,
      title: data.value.title,
      desc: data.value.desc,
      NoteID: this.globleIdNote,

    }
    this._NoteService.updateNote(editOject).subscribe((res) => {
      if (res.message = 'updated') {
        (document.querySelector(".closEditeBtn") as HTMLElement).click();
        this.getfunction();
      }
    })
  }
  // get note 
  getfunction() {
    let getNote = {

      token: this.token,
      userID: this.dataservise._id,

    }
    this._NoteService.getNote(getNote).subscribe((res) => {
      console.log(res.tilte)
      this.nottesArry = res.Notes
    })

  }
  // delte
delid(id:any){
this.globleDelId=id
}
   delete() {
    let deleteObj={
      NoteID: this.globleDelId,
      token:this.token,
      

    }
    this._NoteService.deleteNote(deleteObj).subscribe((res)=>{
      if (res.message=='deleted') {
        this.getfunction();
        (document.querySelector(".btnClose") as HTMLElement).click();

      }
    })
    
  }


}
