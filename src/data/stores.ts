export interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  whatsapp: string;
  phone?: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: 'Loja 1',
    address: 'Rua Pedro Pereira, 218',
    city: 'Fortaleza — CE',
    whatsapp: '5585992407116',
    phone: '5585992407116',
  },
  {
    id: 2,
    name: 'Loja 2',
    address: 'Rua Pedro Pereira, 299',
    city: 'Fortaleza — CE',
    whatsapp: '5585994505245',
  },
  {
    id: 3,
    name: 'Loja 3',
    address: 'Rua Pedro Pereira, 194',
    city: 'Fortaleza — CE',
    whatsapp: '5585991445896',
    phone: '5585991445896',
  },
];

export function whatsappLink(whatsapp: string, store: string): string {
  const msg = encodeURIComponent(
    `Olá! Vim pelo Google e gostaria de mais informações sobre a Óticas Monte Hebrom (${store}). 😊`
  );
  return `https://wa.me/${whatsapp}?text=${msg}`;
}
