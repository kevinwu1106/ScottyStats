import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  players: Array<{number: string, component: any}>;
  kpis: Array<{kpi: string, component: any}>;
  myForm: FormGroup

  constructor(public fb: FormBuilder, public menuCtrl: MenuController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

	this.players = [
      { number: '00', component: HomePage },
      { number: '0', component: HomePage }
	];

	this.kpis = [
      { kpi: 'Complete Pass', component: HomePage },
      { kpi: 'Incomplete Pass', component: HomePage },
      { kpi: 'Shot on Target', component: HomePage },
      { kpi: 'Shot off Target', component: HomePage },
      { kpi: 'Touch', component: HomePage },
      { kpi: 'A', component: HomePage },
      { kpi: 'B', component: HomePage },
      { kpi: 'C', component: HomePage },
      { kpi: 'D', component: HomePage },
      { kpi: 'E', component: HomePage }
	];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log("hi");
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      listOptions: [''],
      listOptions2: ['']
    })
  }

  kpiChanged(event) {
    console.log(this);
  }

  resetpls(event) {
    this.myForm.controls.listOptions.reset();
    this.myForm.controls.listOptions2.reset();
  }
}
