import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Postre } from '../../interfaces/postre';
import { PostreService } from '../../services/postre.service';
@Component({
  selector: 'app-postre',
  imports: [CommonModule],
  templateUrl: './postre.component.html',
  styleUrl: './postre.component.css'
})

export class PostreComponent {
  postres: Postre[] = [];
  constructor(private postreService: PostreService) {
    postreService.getPostres().subscribe((data: any) => {
      this.postres = data.postres;
    });
  }
}



