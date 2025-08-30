import { Component } from '@angular/core';
import { SandvikInfoCard } from '../sandvik-info-card/sandvik-info-card';
import { SandvikInfoCardService } from '../sandvik-info-card/sandvik-info-card-service';

@Component({
  selector: 'app-sandvik-info-cards-section',
  imports: [SandvikInfoCard],
  templateUrl: './sandvik-info-cards-section.html',
  styles: ``,
})
export class SandvikInfoCardsSection {
  infoCardsSectionService!: SandvikInfoCardService;
  constructor(infoCardsSectionService: SandvikInfoCardService) {
    this.infoCardsSectionService = infoCardsSectionService;
  }
}
