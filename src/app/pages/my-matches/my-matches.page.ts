import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.page.html',
  styleUrls: ['./my-matches.page.scss'],
})
export class MyMatchesPage implements OnInit {

  public profiles = [];

  sliderConfig = {
    centeredSlides: true
  };

  constructor(
    private router: Router,
    private storage: StorageService,
    private toast: ToastService,
  ) { }

  async ngOnInit() {
    this.profiles = await this.storage.getProfileData();
  }

  toProfile(profileId: number) {
    const params: NavigationExtras = {
      queryParams: { profileId }
    };
    this.router.navigate(['/profile'], params);
  }
  toasterMsg() {
    this.profileStatus();
  }

  profileStatus() {
   this.toast.errorToast('Not Interested');
  }

}
