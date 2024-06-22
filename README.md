This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the necessary packages:
```bash
npm install
```

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Used Packages

- Axios - fetching
- MUI - styling
- Jest - testing

## Project Structure
This project uses the Next.js App Router for better server-side rendering (SSR). The main components and functionality are as follows:

## Home Page
The posts on the home page are rendered on the server and displayed to the user.
Clicking on a post takes the user to the post detail page.

## Post Detail Page
The post detail page displays the selected post along with its comments.
The comments are displayed using a separate component, which shows the username, email, and the comment text.

## Testing
There are five tests for the comments component to ensure its functionality and content accuracy. The tests include:

- Checking if the Comments header is rendered.
- Verifying the correct number of comments are displayed.
- Ensuring comment details (name, email, body) are rendered correctly.
- Checking for dividers between comments.
- Handling an empty comments array appropriately.
  



