import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { TranslateService } from '@ngx-translate/core';
import { ModalModel } from '../modal/model/modal.model';

@Component({
  selector: 'app-about',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.scss']
})
export class AboutComponent implements OnInit {
  data: ModalModel;
  solsticeTranslations: ModalModel;
  iatasaTranslations: ModalModel;

  constructor(public dialog: MatDialog, private translateService: TranslateService) {
    this.data = new ModalModel();
  }

  ngOnInit() {
    this.getSolsticeTranslations();
    this.getIatasaTranslations();
  }

  openDialog(company: string, ): void {
    switch (company) {
      case 'Solstice': {
        this.data = this.solsticeTranslations;
        break;
      }
      case 'Iatasa': {
        this.data = this.iatasaTranslations;
        break;
      }
    }

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '60%',
      minWidth: '60%',
      height: '60%',
      minHeight: '60%',
      data: this.data
    });
    console.log(dialogRef);

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  getSolsticeVariables() {
    return [
      'ABOUT_SECTION.SOLSTICE.SOLSTICE',
      'ABOUT_SECTION.SOLSTICE.BIO',
      'ABOUT_SECTION.SOLSTICE.POSITION',
      'ABOUT_SECTION.SOLSTICE.CURRENT',
      'ABOUT_SECTION.SOLSTICE.OTHER',
      'ABOUT_SECTION.SOLSTICE.MORE',
      'ABOUT_SECTION.SOLSTICE.MORE_URL',
      'ABOUT_SECTION.SOLSTICE.MORE_PART2',
      'ABOUT_SECTION.SOLSTICE.URL',
      'ABOUT_SECTION.SOLSTICE.IMAGE_URL'
    ];
  }

  getIatasaVariables() {
    return [
      'ABOUT_SECTION.IATASA.IATASA',
      'ABOUT_SECTION.IATASA.POSITION',
      'ABOUT_SECTION.IATASA.BIO',
      'ABOUT_SECTION.IATASA.CURRENT',
      'ABOUT_SECTION.IATASA.OTHER',
      'ABOUT_SECTION.IATASA.URL',
      'ABOUT_SECTION.IATASA.IMAGE_URL'
    ];
  }
   getSolsticeTranslations() {
    const translateVariables = this.getSolsticeVariables();
    const translations = new ModalModel;
     this.translateService.get(translateVariables).subscribe(res => {
      translations.companyName = res['ABOUT_SECTION.SOLSTICE.SOLSTICE'];
      translations.companyPosition = res['ABOUT_SECTION.SOLSTICE.POSITION'];
      translations.companyBio = res['ABOUT_SECTION.SOLSTICE.BIO'];
      translations.current = res['ABOUT_SECTION.SOLSTICE.CURRENT'];
      translations.other = res['ABOUT_SECTION.SOLSTICE.OTHER'];
      translations.more = res['ABOUT_SECTION.SOLSTICE.MORE'];
      translations.moreUrl = res['ABOUT_SECTION.SOLSTICE.MORE_URL'];
      translations.more2 = res['ABOUT_SECTION.SOLSTICE.MORE_PART2'];
      translations.url = res['ABOUT_SECTION.SOLSTICE.URL'];
      translations.image_url = res['ABOUT_SECTION.SOLSTICE.IMAGE_URL'];
      this.solsticeTranslations = translations;
    });
  }

   getIatasaTranslations() {
    const translateVariables = this.getIatasaVariables();
    const translations = new ModalModel;
     this.translateService.get(translateVariables).subscribe(res => {
      translations.companyName = res['ABOUT_SECTION.IATASA.IATASA'];
      translations.companyPosition = res['ABOUT_SECTION.IATASA.POSITION'];
      translations.companyBio = res['ABOUT_SECTION.IATASA.BIO'];
      translations.current = res['ABOUT_SECTION.IATASA.CURRENT'];
      translations.other = res['ABOUT_SECTION.IATASA.OTHER'];
      translations.url = res['ABOUT_SECTION.IATASA.URL'];
      translations.image_url = res['ABOUT_SECTION.IATASA.IMAGE_URL'];
      this.iatasaTranslations = translations;
    });
  }
}
