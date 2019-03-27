import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() isTopScroll = false;
  en = true;
  url = '';
  url_en = '/assets/i18n/en.png';
  url_es = '/assets/i18n/es.png';
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.url = this.url_es;
  }
  imageClick() {

    if (this.en) {
      this.url = this.url_es;
      this.translate.use('en');
    } else {
      this.url = this.url_en;
      this.translate.use('es');
    }
    this.en = !this.en;
  }
}
