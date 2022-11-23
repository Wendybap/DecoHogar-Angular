import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from 'src/app/models/product.models';
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

  // Funcion que usa el servicio para crear productos en la API
  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      description: 'bla bla bla',
      categoryId: 2,
    };
    this.productsService.create(product).subscribe((data) => {
      this.myProduct.unshift(data);
    });
  }

  // Función que usa el servicio para Actualizar el product
  // podría crear un nuevo array donde indique los cambios que quier hacer
  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'change title',
    };
    const id = this.productChosen.id;
    this.productsService.update(id, changes).subscribe((data) => {
      const productIndex = this.myProduct.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.myProduct[productIndex] = data;
      this.productChosen = data;
    });
  }

  // Función que usa el servicio products.service para eliminar registro
  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id).subscribe(() => {
      const productIndex = this.myProduct.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.myProduct.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }
}
