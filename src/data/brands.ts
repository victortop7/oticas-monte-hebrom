export interface Brand {
  id: string
  name: string
  logo: string
  tag: string
  cover: string
  photos: string[]
  waMessage: string
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const logo = (name: string) => name ? `${base}/${name}` : ''

function folder(dir: string, start: number, end: number, ext: string = 'png'): string[] {
  return Array.from({ length: end - start + 1 }, (_, i) => `${base}/fotos/${dir}/${start + i}.${ext}`)
}

export const brands: Brand[] = [
  {
    id: 'rayban',
    name: 'Ray-Ban',
    logo: logo('logo-rayban.png'),
    tag: 'Clássico & Sol',
    cover: `${base}/fotos/rayban/1.png`,
    photos: folder('rayban', 1, 41),
    waMessage: 'Olá! Quero ver as armações Ray-Ban disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'vogue',
    name: 'Vogue',
    logo: '',
    tag: 'Feminino',
    cover: `${base}/fotos/vogue/1.jpeg`,
    photos: folder('vogue', 1, 8, 'jpeg'),
    waMessage: 'Olá! Quero ver as armações Vogue disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'jr-verao',
    name: 'JR Eyewear Verão',
    logo: logo('logo-jreyewear.png'),
    tag: 'Coleção Verão',
    cover: `${base}/fotos/jr-verao/2.png`,
    photos: folder('jr-verao', 2, 19),
    waMessage: 'Olá! Quero ver a Coleção Verão JR Eyewear disponível na Óticas Monte Hebrom 😊',
  },
  {
    id: 'jr-masculino',
    name: 'JR Eyewear Masculino',
    logo: logo('logo-jreyewear.png'),
    tag: 'Masculino',
    cover: `${base}/fotos/jr-masculino/2.png`,
    photos: folder('jr-masculino', 2, 21),
    waMessage: 'Olá! Quero ver as armações masculinas JR Eyewear disponíveis na Óticas Monte Hebrom 😊',
  },
  {
    id: 'jr-esporte',
    name: 'JR Eyewear Esporte',
    logo: logo('logo-jreyewear.png'),
    tag: 'Esportivo',
    cover: `${base}/fotos/jr-esporte/2.png`,
    photos: folder('jr-esporte', 2, 16),
    waMessage: 'Olá! Quero ver os óculos esporte JR Eyewear disponíveis na Óticas Monte Hebrom 😊',
  },
]
