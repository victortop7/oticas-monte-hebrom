export interface Brand {
  id: string
  name: string
  logo: string
  tag: string
  cover: string   // foto de capa da marca
  photos: string[] // catálogo de fotos
  waMessage: string
}

// 72 fotos divididas entre 7 marcas
const f = (n: number) => `/f${String(n).padStart(2, '0')}.jpg`
const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => f(a + i))

export const brands: Brand[] = [
  {
    id: 'rayban',
    name: 'Ray-Ban',
    logo: '/logo-rayban.png',
    tag: 'Clássico & Sol',
    cover: f(1),
    photos: range(1, 10),
    waMessage: 'Olá! Quero ver as armações Ray-Ban disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'anahickmann',
    name: 'Ana Hickmann',
    logo: '/logo-anahickmann.png',
    tag: 'Feminino',
    cover: f(11),
    photos: range(11, 20),
    waMessage: 'Olá! Quero ver as armações Ana Hickmann disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'xtreme',
    name: 'X-Treme',
    logo: '/logo-xtreme.png',
    tag: 'Esportivo',
    cover: f(21),
    photos: range(21, 30),
    waMessage: 'Olá! Quero ver as armações X-Treme disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'morenarosa',
    name: 'Morena Rosa',
    logo: '/logo-morenarosa.png',
    tag: 'Tendência',
    cover: f(31),
    photos: range(31, 42),
    waMessage: 'Olá! Quero ver as armações Morena Rosa disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'santalolla',
    name: 'Santa Lolla',
    logo: '/logo-santalolla.png',
    tag: 'Premium',
    cover: f(43),
    photos: range(43, 54),
    waMessage: 'Olá! Quero ver as armações Santa Lolla disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'jreyewear',
    name: 'JR Eyewear',
    logo: '/logo-jreyewear.png',
    tag: 'Free Form',
    cover: f(55),
    photos: range(55, 63),
    waMessage: 'Olá! Quero ver as armações JR Eyewear disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'marchal',
    name: 'Marchal',
    logo: '',
    tag: 'Light Easy HD',
    cover: f(64),
    photos: range(64, 72),
    waMessage: 'Olá! Quero ver as armações Marchal disponíveis na Óticas Monte Hebrom 😊',
  },
]
