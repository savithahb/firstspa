import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   appname:string="First Angular APP"
   programmer:string="Krishna"
   technologies:string[]=["Java","C","C++","CSS","TS","Angular"]

   titles:string[]=["Softwares","System Needs", "Vendors"]
   information:string[][]=[
    ["Oracle DB","IntelliJ IDE","My Sql","Chrome"],["16gb RAM","120 GB Disk Space"],
    ["Oracle","Google"]
   ]

   item:string="nothing"

   process(data){
      this.item=data;
   }

}
