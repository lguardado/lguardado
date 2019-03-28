import { Injectable } from '@angular/core';

const desktopMargin = 25;

@Injectable()
export class ScrollHelperService {

  constructor() {
  }

  scrollTo(elementId: string, containerId: string = null, offsetTop: number = 0) {
    if (!containerId) {
      this.windowScroll(elementId, offsetTop);
    } else {
      this.containerScroll(elementId, containerId, offsetTop);
    }
  }

  private windowScroll(elementId: string, offsetTop: number) {
    const bodyRect = document.body.getBoundingClientRect(),
      elem = document.getElementById(elementId);

    if (!elem) {
      return;
    }

    const elemRect = elem.getBoundingClientRect();
    let offset = elemRect.top - bodyRect.top;
    offset -= this.getSidebarHeight() + (offsetTop ? offsetTop : desktopMargin);

    if (this.isSmoothScrollSupported) {
      window.scroll({
        top: offset,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scroll(0, offset);
    }
  }

  private containerScroll(elementId: string, containerId: string, offsetTop: number) {
    const container = document.getElementById(containerId);
    const offset = document.getElementById(elementId).getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop - (offsetTop ? offsetTop : desktopMargin);

    try {
      container.scroll({
        top: offset,
        left: 0,
        behavior: 'smooth'
      });
    } catch (er) {
      container.scrollTop = offset;
    }
  }

  private get isSmoothScrollSupported(): boolean {
    return 'scrollBehavior' in document.documentElement.style;
  }

  private getSidebarHeight(): number {
    const sidebar = document.getElementById('header-mobile');
    const height = sidebar ? sidebar.offsetHeight : 0;

    return height;
  }
}
