export interface IAddressRequest {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complemento: string;
}

export interface IAddress extends IAddressRequest {
  id: string;
}
