export interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  whatsapp: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: 'Loja 1',
    address: 'Rua Pedro Pereira, 218',
    city: 'Fortaleza — CE',
    whatsapp: '5585992407116',
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
  },
  {
    id: 4,
    name: 'Loja Natal',
    address: 'Rua Ulisses Caldas, 177',
    city: 'Natal — Cidade Alta',
    whatsapp: '5584932012505',
  },
];

export function whatsappLink(whatsapp: string, store: string): string {
  const msg = encodeURIComponent(
    `Olá! Vi o site da Óticas Monte Hebrom e gostaria de mais informações. Estou interessado na ${store}. 😊`
  );
  return `https://wa.me/${whatsapp}?text=${msg}`;
}
