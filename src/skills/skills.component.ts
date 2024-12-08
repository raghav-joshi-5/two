import { Component } from "@angular/core";

@Component({
    selector:"app-skills",
    templateUrl:"./skills.component.html",
    styleUrls:['skills.component.scss']
})
export class SkillsComponent{
    skillArr:Array<string>=["html","css","javascript"]

    stdArr=[
        {
          fname:"jhon",
          lname:"doe",
          email:"jd@gmail.com",
          contact:1234567890
        },
        {
          fname:"may",
          lname:"doe",
          email:"md@gmail.com",
          contact:1234567890
        },
        {
          fname:"june",
          lname:"doe",
          email:"jd@gmail.com",
          contact:9876543210
        },
        {
          fname:"july",
          lname:"doe",
          email:"jd@gmail.com",
          contact:45484858451
        },
        {
          fname:"dfdf",
          lname:"doe",
          email:"jd@gmail.com",
          contact:1234567890
        },
      ]
}