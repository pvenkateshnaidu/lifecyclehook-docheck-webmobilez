import { Component, DoCheck, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements DoCheck {
  name: string = "Angular DoCheck";
  isCheckedBoolean: boolean = false;
  message: string;
  i: number = 0;

  ngDoCheck() {
    let msg =
      "ngDoCheck " +
      this.i +
      " : value of the checkboxed is " +
      this.isCheckedBoolean +
      " and   @input Name : " +
      this.name;
   
    this.showMessage(msg);
     console.log(msg);
    this.i++;
  }
  buttonClick() {
    console.log("button clicked");
  }
  showMessage(message: string) {
    this.message = message;
  }
}
