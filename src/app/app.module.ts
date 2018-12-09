import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutUsPage } from '../pages/about-us/about-us';

import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from './credentials';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LugaresProvider } from '../providers/lugares.provider';

import { AuthenticationProvider } from '../providers/authentication.provider';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutUsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'GeoCaching'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutUsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresProvider,
    AuthenticationProvider
  ]
})
export class AppModule {}
