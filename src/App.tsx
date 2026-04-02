import { Popup } from './components/Popup'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Brands } from './components/Brands'
import { Lojas } from './components/Lojas'
import { Empresa } from './components/Empresa'
import { Lentes } from './components/Lentes'
import { Tecnologia } from './components/Tecnologia'
import { Video } from './components/Video'
import { CTAFinal } from './components/CTAFinal'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Popup />
      <Header />
      <main>
        <Hero />
        <Features />
        <Brands />
        <Lojas />
        <Empresa />
        <Lentes />
        <Tecnologia />
        <Video />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
