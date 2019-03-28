import { Component, OnInit, OnDestroy, ElementRef, Output, EventEmitter, AfterViewInit, AfterContentChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollHelperService } from './services/scroll-helper.service';
import { takeWhile } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ScrollHelperService]
})
export class AppComponent implements OnInit, OnDestroy, AfterContentChecked {
  isTopScroll: boolean;
  private alive = true;
  private _el: ElementRef;
  public spiedTags = ['education', 'skills', 'experience', 'feedback', 'contact', 'download'];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(translate: TranslateService, private router: Router, private scrollHelperService: ScrollHelperService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
  title = 'ng-portfolio';
  scroll() {
    this.isTopScroll = !(window.pageYOffset > 0);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  ngAfterContentChecked(): void {
    this.router.events
    .pipe(takeWhile(() => this.alive))
    .subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        if (this.router.routerState.snapshot.root.fragment !== '') {
          setTimeout(() => {
            this.scrollHelperService.scrollTo(this.router.routerState.snapshot.root.fragment);
          }, 100);
      }
      }
    });
  }
}
