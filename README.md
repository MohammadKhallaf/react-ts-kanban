# Notella Kanban

## Preview

You can view the web app deployment here : [Notella](https://notella.netlify.app/)

## Technologies

- pnpm
- Vite
- React
- Typescipt
- Redux Toolkit
- Tailwind CSS
- Postcss

## App Structure

```mermaid
graph TD;
id1(src) --> id2(app);
id2(app) --> st{{store}};
id2(app) --> rt{{router}};
id1(src) ---> id3(components);
id1(src) ---> id4(layout);
id4(layout) --> Navbar;
id4(layout) --> Footer;
id4(layout) --> Drawer;
id1(src) ---> id5(views);
```

## Prerequisites

- Node
- Vite
- pnpm
- tsc

## Setup

1. Install the required modules
   ```bash
   pnpm install
   ```
2. Run in dev mode
   ```bash
    pnpm run dev
   ```
   or with Vite
   ```bash
   npx vite --port=4000
   ```

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/c02f5f4c-c46c-4aee-b873-b2cd9aba9c01/deploy-status)](https://app.netlify.com/sites/notella/deploys)
