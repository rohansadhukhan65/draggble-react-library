This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Preview

Check out the live preview of the application [here](https://draggble-react-library.vercel.app/).

## Instructions


- **1**: Set up a new Next.js project using the latest version. Make sure to incorporate TypeScript and Material UI, as they are mandatory requirements.
- **2**: Utilize Axios with TypeScript to fetch all product data from the following endpoint: https://fakestoreapi.com/products ..
- **3**: Generate a table with 5 columns and 4 rows. Each cell will initially be black with all product items hidden.
- **4**: When a cell is clicked, only the corresponding product will become visible within that cell, displaying its details such as name and image.
- **5**:The products should fill the cells sequentially, with the first product appearing in the first cell, the second product in the second cell, and so forth.
- **6** : Also implement drag and drop functionality for the cells.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


