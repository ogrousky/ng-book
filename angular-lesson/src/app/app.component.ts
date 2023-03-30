import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Article } from "./article/article.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-lesson";
  checkoutForm = this.formBuilder.group({
    title: "",
    link: "",
  });
  articles: Article[];
  constructor(private formBuilder: FormBuilder) {

    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ]
  }
  onSubmit(): void {
    // Process checkout data here
    console.log("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
