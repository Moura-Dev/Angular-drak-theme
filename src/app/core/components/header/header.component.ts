import { Component } from '@angular/core';

// Enums
import { Etheme } from '../../enums/Etheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon: string = Etheme.ICON_MON;
  public textTheme: string = Etheme.TEXT_MON;

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = Etheme.TEXT_SUM;
      return (this.icon = Etheme.ICON_SUM);
    }
    this.textTheme = Etheme.TEXT_MON;
    return (this.icon = Etheme.ICON_MON);
  }
}
