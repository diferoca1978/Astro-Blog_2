---
title: CSS Animations - Una guía completa
date: 2023-11-07
description: Aprende a crear animaciones con CSS para mejorar la experiencia del usuario y añadir dinamismo a tus sitios web.
author: jane-doe
image: 'images-collection/post-06.png'
tags: [CSS, Animations, Frontend]
---

# CSS Animations: Una guía completa

CSS Animations te permite crear transiciones visuales suaves entre diferentes estados de estilo de un elemento. En esta guía, aprenderás cómo usar CSS para dar vida a tus sitios web con animaciones dinámicas.

## Introducción a las Animaciones CSS

CSS Animations se componen de dos partes principales: una **propiedad `animation`** para controlar la animación y **@keyframes**, que define los estados de estilo de la animación.

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 2s ease-in-out;
}
```

## CSS ofrece varias propiedades para controlar los detalles de la animación:

animation-duration: Duración de la animación.

animation-timing-function: Velocidad de la animación (como ease, linear, ease-in-out).

animation-delay: Tiempo antes de que inicie la animación.

animation-iteration-count: Número de veces que se repite la animación.

animation-direction: Dirección de la animación (por ejemplo, alternate para revertir en cada iteración).
