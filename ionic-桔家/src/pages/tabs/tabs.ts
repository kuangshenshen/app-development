import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular';
import { CPage } from '../c/c';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = 'BPage';

  constructor(public modalCtrl:ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
    let profileModal = this.modalCtrl.create(CPage)
    profileModal.present();
    },false)
    
  }
}
