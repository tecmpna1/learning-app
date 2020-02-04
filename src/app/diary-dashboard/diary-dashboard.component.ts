import { Component, OnInit } from '@angular/core';
import { ThemeService } from "src/app/theme/theme.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-diary-dashboard',
  templateUrl: './diary-dashboard.component.html',
  styleUrls: ['./diary-dashboard.component.css']
})
export class DiaryDashboardComponent implements OnInit {
notesdsc:any;
NotesREPO:any=[];
notes:any={
  information:"",
  infoId:0

}
  constructor(private themeService: ThemeService
    ) { 
      console.log(this.notesdsc);
  }

  ngOnInit() {
   // localStorage.getItem("mynotes");
    console.log(localStorage.getItem("mynotes"))
    this.NotesREPO=JSON.parse(localStorage.getItem("mynotes"));  
  }


  addItem(noteitem){
  this.notes.information=noteitem;
  this.notes.infoId= Math.floor(Math.random() * (999999 - 100000)) + 100000;
  console.log(this.notes.infoId);
 
  this.NotesREPO.push(this.notes);
  console.log(this.NotesREPO);
  this.notes={};
  this.notesdsc="";
  localStorage.setItem("mynotes", JSON.stringify(this.NotesREPO));

  }

  deleteItem(noteitem){
    //this.NotesREPO.pop(noteitem);
    this.NotesREPO.splice(noteitem,1);
    localStorage.setItem("mynotes",JSON.stringify(this.NotesREPO))
    console.log(this.NotesREPO);
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    //this.setLightbulb();
  }

  PriorityCheck(event){
    console.log(event)
  }
}
