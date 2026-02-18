import { ApiLink } from './../../../../core/environments/api-link.environment';
import { Ibrand } from '../../../../core/interfaces/brandInterface/ibrand.interface';
import { Iglobal } from '../../../../shared/interfaces/globalInterface/iglobal.interface';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { BrandServicesServices } from '../../../../core/services/brandServices/brand-services.services';

@Component({
  selector: 'app-home-branding',
  imports: [CarouselModule],
  templateUrl: './home-branding.component.html',
  styleUrl: './home-branding.component.css',
})
export class HomeBrandingComponent {
  private readonly brandServicesServices = inject(BrandServicesServices);
  private readonly toastr = inject(ToastrService);
  apiLink = ApiLink;

  brands: WritableSignal<Ibrand[]> = signal([]);

  ngOnInit(): void {
    this.getBrands();
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    rtl: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };

  getBrands(): void {
    this.brandServicesServices.getAllBrands().subscribe({
      next: (res: Iglobal<Ibrand[]>) => {
        this.brands.set(res.data);
      },
      error: (err) => {
        this.toastr.error(`${err.error.message}`, `${err.error.success}`, {
          progressBar: true,
          progressAnimation: 'decreasing',
          timeOut: 3000,
        });
      },
    });
  }
}
