import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <script
          src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
          defer
        />
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/marked/4.1.1/marked.min.js'
          integrity='sha512-+mCmSlBpa1bF0npQzdpxFWIyJaFbVdEcuyET6FtmHmlXIacQjN/vQs1paCsMlVHHZ2ltD2VTHy3fLFhXQu0AMA=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        ></script>
      </body>
    </Html>
  );
}
