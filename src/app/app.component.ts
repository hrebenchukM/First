import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';//Ипортировали хедер компонент
import { LogoComponent } from './logo/logo.component';//Ипортировали  logo 

import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@Component({//декоратор компонент @ для AppComponent,динамически добавляем поведение к обьекту
  selector: 'app-root',//как его подключить в разметке ,корневой єлемент,селктор определяет тег для подключения компонента
  standalone: true,//если правда то компонент является автономнім 
  imports: [RouterOutlet,HeaderComponent,LogoComponent,FooterComponent,ContentComponent],//какие другие файлі он использует ,все его модели что он будет использовать 
  templateUrl: './app.component.html',//разметка штмл
  styleUrl: './app.component.css'//стилизация
})
export class AppComponent {
  title = 'First';
}

//По сути компонент єто кусок разметки со своей стелизацией и так далее.