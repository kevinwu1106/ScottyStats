import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  myForm: FormGroup

  constructor(public fb: FormBuilder, public menuCtrl: MenuController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
}


  kpiChanged(event) {
    console.log("world");
  }
}
