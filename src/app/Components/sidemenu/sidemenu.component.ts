import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'] 
})

/*Un string que almacena el nombre del usuario.
Un string que determina el color de fondo del menú.
Un string que especifica el ancho del menú.
Un booleano que controla si el menú es visible o no.*/

export class SidemenuComponent {
  userName: string = "Ricardo Uzhca";
  theme: string = " "; 
  widthMenu: number = 22;
  visibleMenu: boolean = true; 

  
  setVisibilityMenu(): void {
    this.visibleMenu = !this.visibleMenu;
  }

  
  themeColors = ['#b6c683', '#bea3c6', '#a3c1c6', '#eddeb3'];
  currentColorIndex = 0;

  setThemeColor(color: string):void{
  this.currentColorIndex = (this.currentColorIndex + 1) % this.themeColors.length;
  this.theme = this.themeColors[this.currentColorIndex];
  }

  
  setSizeMenu(): void {
    this.widthMenu += 10;
    if (this.widthMenu > 100) {
      this.widthMenu = 22;
    }
  }
}






