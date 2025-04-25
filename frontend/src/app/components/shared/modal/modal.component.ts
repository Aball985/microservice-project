import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapXLg } from '@ng-icons/bootstrap-icons';

@Component({
    selector: 'app-jw-modal',
    imports: [NgIconComponent],
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss'],
    encapsulation: ViewEncapsulation.None,
    viewProviders: [provideIcons({ bootstrapXLg })]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input({ required: true }) id: string = '';
  isOpen = false;
  private element: HTMLElement;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.modalService.add(this);
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (event: Event) => {
      if ((event.target as HTMLElement).className === 'jw-modal') {
        this.closeModal();
      }
    });
  }

  ngOnDestroy() {
    this.modalService.remove(this);
    this.element.remove();
  }

  openModal() {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
    this.isOpen = true;
  }

  closeModal() {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
    this.isOpen = false;
  }
}
