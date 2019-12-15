import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class SnackbarService {
  constructor(public snackBar: MatSnackBar) { }

  public open(message: string, action = "close", className, timeDuration = 10000) {
    // //console.log("hi from snackbar");
    this.snackBar.open(message, action, {
      duration: timeDuration,
      // panelClass: 'green-snackbar'
      panelClass: className
    });
  }
}
