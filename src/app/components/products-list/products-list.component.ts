import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper';
SwiperCore.use([EffectFlip, Pagination, Navigation]);

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsListComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  myProduct: Product[] = [];
  showProductDetail = false;
  // Creo el estado para el productChoosen
  productChosen: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    description: '',
    category: {
      id: '',
      name: '',
    },
  };

  // Pipes para el manejo de fechas
  today = new Date();
  date = new Date(2022, 3, 12);

  // **Creamos una inyección de dependencias dentro del controlador
  // ** para usar los servicios que que necesite en este caso stroreService y productsService
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    // Aqui obtengo la lista actual de elementos que estan en el carrito de compras
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    // aqui obtengo los datos de la API
    this.productsService.getAllProducts().subscribe((data) => {
      this.myProduct = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  // función toggle para activar y desactivar el detalle del producto
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id).subscribe((data) => {
      this.toggleProductDetail();
      this.productChosen = data;
    });
  }
}
