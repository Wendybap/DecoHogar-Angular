import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from '../models/product.models';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = `${environment.API_URL}/api/products`;

  // Hago una inyección de dependencia que inyecta a otro servicio
  constructor(private httpClient: HttpClient) {}

  // *Metodo que devuelve todos los productos haciendo la petición get a una URL
  // *Debo tipar mi petición para indicarle que es del tipo array de productos<Products[]>

  getAllProducts(limit?: number, offset?: number): Observable<Product[]> {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.httpClient
      .get<Product[]>(this.apiUrl, { params })
      .pipe(retry(3));
  }

  // Metodo para obtener el detalle del producto
  getProduct(id: string) {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          throw Error('falla en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          throw Error('el producto no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          throw Error('no estas autorizado');
        }
        throw Error('algo salio mal');
      })
    );
  }

  // Método para la paginación de los productos
  getProductsByPage(limit: number, offset: number) {
    return this.httpClient.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset },
    });
  }

  // Metodo para crear un producto en la API, la informacion se envia por el body
  //  Para que la API la regoja y la cree en la base de datos, que es lo que
  //  recibe como parametro mi función data
  // dto = objeto de transferencia de datos(data transfer object)
  create(dto: CreateProductDTO) {
    return this.httpClient.post<Product>(this.apiUrl, dto);
  }
  // Metodo para ACTUALIZAR
  update(id: string, dto: UpdateProductDTO) {
    return this.httpClient.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  // Metodo para eliminación de registro DELETE
  delete(id: string) {
    return this.httpClient.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
