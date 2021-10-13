import {Component} from '@angular/core';
import {Platform} from "@ionic/angular";
import {SplashScreen} from '@ionic-native/splash-screen/ngx'
import {StatusBar} from '@ionic-native/status-bar/ngx'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Kezdőlap', url: '/home', icon: 'home' },
    { title: 'Regisztráció', url: '/registration'},
    { title: 'Üzenetek', url: '/chat', icon: 'mail' },
    { title: 'Fórum', url: '/list-forums', icon: 'paper-plane' },
    { title: 'Programok', url: '/list-programs', icon: 'calendar-number' },
    { title: 'Értékelések', url: '/reviews', icon: 'star-half' },
    { title: 'Hírek', url: '/news', icon: 'newspaper' },
    { title: 'Rólunk', url: '/about', icon: 'flower' },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ){
  this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }
}




