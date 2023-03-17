interface Address {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export type IUpdateAddress = Partial<Address>;

export interface ICreateUserRequest {
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
  password: string;
  is_buyer: boolean;
  address: Address;
}

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  cpf?: string;
  cell?: string;
  birthdate?: string;
  description?: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
  is_buyer: boolean;
  address: Address;
}
