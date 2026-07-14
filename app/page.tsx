const featuredWalls = [
  {
    src: "/images/sunny-bedroom-gallery.jpg",
    alt: "Dormitorio luminoso con pared de cuadros coloridos",
    label: "Muros felices",
  },
  {
    src: "/images/living-room-gallery.jpg",
    alt: "Living con sofa claro y galeria de cuadros aesthetic",
    label: "Sets para living",
  },
  {
    src: "/images/gallery-wall-cocktails.jpg",
    alt: "Pared blanca con posters retro de cocteles y frutas",
    label: "Prints retro",
  },
];

const objects = [
  {
    src: "/images/wavy-vases.jpg",
    alt: "Floreros geometricos azul, amarillo y terracota",
    title: "Objetos con forma",
  },
  {
    src: "/images/geometric-vases.jpg",
    alt: "Vasos y floreros decorativos geometricos de colores",
    title: "Color statement",
  },
  {
    src: "/images/line-ceramics.jpg",
    alt: "Conjunto de ceramicas blancas con lineas finas azules",
    title: "Ceramica calma",
  },
  {
    src: "/images/lamp-vase-blue.jpg",
    alt: "Lampara azul con esfera iluminada y florero blanco",
    title: "Piezas suaves",
  },
];

const collection = [
  "/images/eclectic-wall.jpg",
  "/images/manifest-blue.jpg",
  "/images/bauhaus-corner.jpg",
  "/images/pink-quote-frame.jpg",
  "/images/blue-white-vases.jpg",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Navegacion principal">
        <a className="brand-mark" href="#inicio" aria-label="Nikola inicio">
          Nikola
        </a>
        <nav>
          <a href="#cuadros">Cuadros</a>
          <a href="#objetos">Objetos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="kicker">San Isidro, Buenos Aires</p>
          <h1>Objetos y cuadros aesthetic para casas con humor.</h1>
          <p>
            Nikola curaduriza prints, cuadros y piezas deco con energia retro:
            rojo bikini, azul cielo e interiores que piden una segunda mirada.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#cuadros">
              Ver portfolio
            </a>
            <a className="button secondary" href="#contacto">
              Pedir catalogo
            </a>
          </div>
        </div>
        <div className="hero-stage" aria-label="Muestra visual de Nikola">
          <img
            className="hero-image hero-main"
            src="/images/sunny-bedroom-gallery.jpg"
            alt="Habitacion soleada con galeria de cuadros coloridos"
          />
          <img
            className="hero-image hero-float"
            src="/images/wavy-vases.jpg"
            alt="Floreros modernos de colores vivos"
          />
          <div className="badge">new drops</div>
        </div>
      </section>

      <section className="marquee" aria-label="Categorias Nikola">
        <span>prints</span>
        <span>cuadros</span>
        <span>floreros</span>
        <span>objetos</span>
        <span>sets</span>
      </section>

      <section className="section split" id="cuadros">
        <div>
          <p className="kicker">Portfolio de paredes</p>
          <h2>Galerias que hacen que una pared deje de ser fondo.</h2>
        </div>
        <p>
          Combinaciones listas para dormitorios, livings y rincones de trabajo.
          Mezclamos grafica Bauhaus, frases con actitud, frutas, flores y color
          bien elegido.
        </p>
      </section>

      <section className="wall-grid">
        {featuredWalls.map((item, index) => (
          <article className="wall-tile" key={item.src}>
            <img src={item.src} alt={item.alt} />
            <div>
              <span>0{index + 1}</span>
              <h3>{item.label}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="section color-band">
        <div>
          <span>Aegean Sky</span>
          <strong>#1A6FBF</strong>
        </div>
        <div>
          <span>Sandy Linen</span>
          <strong>#F5F0E8</strong>
        </div>
        <div>
          <span>Scarlet Bikini</span>
          <strong>#D91A2A</strong>
        </div>
      </section>

      <section className="section objects" id="objetos">
        <div className="objects-copy">
          <p className="kicker">Objetos deco</p>
          <h2>Formas raras, colores ricos, cero solemnidad.</h2>
          <p>
            Piezas para levantar bibliotecas, mesas bajas y rincones que estaban
            esperando algo con personalidad.
          </p>
        </div>
        <div className="object-grid">
          {objects.map((item) => (
            <article className="object-card" key={item.src}>
              <img src={item.src} alt={item.alt} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="lookbook" aria-label="Lookbook Nikola">
        {collection.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Imagen de lookbook Nikola ${index + 1}`}
          />
        ))}
      </section>

      <section className="section contact" id="contacto">
        <div>
          <p className="kicker">Visitas y encargos</p>
          <h2>Armamos tu pared, tu rincon o tu regalo raro.</h2>
        </div>
        <div className="contact-panel">
          <p>
            Escribinos para ver stock, pedir una combinacion por ambiente o
            coordinar retiro en San Isidro.
          </p>
          <a className="button primary" href="mailto:hola@nikoladeco.com">
            hola@nikoladeco.com
          </a>
        </div>
      </section>
    </main>
  );
}
