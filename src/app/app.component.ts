import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  clicks: any[] = [];
  name = "Angular";
  onclick($event) {
    var i = this.clicks.push({
      x: (
        $event.clientX - $event.target.getBoundingClientRect().left
      ).toString(),
      y: ($event.clientY - $event.target.getBoundingClientRect().top).toString()
    });
    setTimeout(() => {
      console.log(i);
      this.clicks.splice(0, 1);
    }, 10000);
  }
  onclickOfSpan($event, c) {
    $event.stopPropagation();
    var i = this.clicks.push(c);
    setTimeout(() => {
      console.log(i);
      this.clicks.splice(0, 1);
    }, 10000);
  }
}
