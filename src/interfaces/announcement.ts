import { Decimal } from '@prisma/client/runtime';

export interface IAnnouncementRequest {
  is_sale: boolean;
  title: string;
  year: string;
  mileage: string;
  price: Decimal;
  description: string;
  is_car: boolean;
  is_published: boolean;
  images: IImageRequest;
}

export interface IImageRequest {
  image_url: string;
}

export interface IAnnouncementUpdate {
  is_sale?: boolean;
  title?: string;
  year?: string;
  mileage?: string;
  price?: Decimal;
  description?: string;
  is_car?: boolean;
  is_published?: boolean;
  images?: IImageUpdate[];
}

export interface IImageUpdate {
  id: string;
  image_url: string;
}
