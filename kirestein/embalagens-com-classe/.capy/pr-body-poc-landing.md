Resumo
- Entrega POC de landing one‑page (Home/Sobre/Contato) para validação rápida do conteúdo, visual e navegação, sem backend.
- Objetivo: habilitar revisão de stakeholders e teste do fluxo de contato (EmailJS) e WhatsApp preservando performance e acessibilidade.

Principais mudanças
- Stack: Angular 20 + Tailwind + Angular Material com tema custom (Source Sans 3), anchorScrolling habilitado e smooth scroll.
- Header fixo com logo, navegação por âncoras, active state via IntersectionObserver.
- Hero 100vh com banner otimizado (hero.webp ~62KB), overlay de contraste e CTAs para Sobre/Contato.
- Seção Sobre com copy revisada e chips de valores.
- Seção Contato com formulário reativo (validators), botão WhatsApp (mensagem pré-preenchida) e integração EmailJS (serviço + InjectionToken). Feedbacks via snackbar.
- Acessibilidade/SEO: semântica, foco visível, h1 único, h2 por seção, meta/OG básicas.
- Tema/cores: azul primário #2b3695, laranja accent #f57814, verde secundário #16a34a aplicados em Tailwind e Material.

Configuração necessária
- EmailJS: preencher em src/environments/environment(.development).ts as chaves EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY.

Impacto
- Permite validação rápida de conteúdo/UX e testes do fluxo de contato sem backend, mantendo padrão de código enxuto e boa base para iterações.

Notas
- Ícone do WhatsApp está provisório (Material Icons). Podemos substituir por SVG oficial.
- Responsividade mobile‑first, header colapsa em menu. Contraste AA verificado para o tema claro.
