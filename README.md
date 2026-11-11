# Luminarum ✦ La Universidad Etérea

Landing page de **Luminarum**, escuela de magia y brujería por suscripción.
Construida con **React + Vite**. Estética inspirada en MindValley con un modelo
de negocio tipo universidad (al estilo Universidad Etérea), sobre la identidad
visual nórdico-arcana de la marca.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview  # sirve el build de producción
```

## Estructura

```
public/assets/        Logos (blanco/negro) y banner de la marca
src/
  index.css           Sistema de diseño (paleta, tipografía, componentes)
  App.jsx             Composición de la página
  data/content.js     Todo el contenido editable (disciplinas, planes, FAQ...)
  components/         Navbar, Hero, Disciplines, Path, Library, Mentors,
                      Pricing, Testimonials, FAQ, CTA, Footer
```

## Personalización rápida

- **Textos, cursos, precios, maestros, FAQ** → `src/data/content.js`
- **Colores y tipografía** → variables `:root` en `src/index.css`
- **Imágenes** → `public/assets/`

## Paleta

Índigo nocturno `#0b0717` · Violeta arcano `#3a2168` · Oro rúnico `#e3c178`
Tipografía: *Cinzel* (títulos), *Cormorant Garamond* (texto), *Inter* (UI).
