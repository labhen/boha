// theme.config.js

const Vercel = ({ height = 16 }) => (
  <svg height={height} viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
);

export default {
  projectLink: 'https://github.com/labhen/boha', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/labhen/boha/blob/master', // base URL for the docs repository
  titleSuffix: ' – Boha',
  nextLinks: true,
  prevLinks: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: false,
  footer: true,

  footerText: ({ locale }) => {
    switch (locale) {
      case "es":
        return (
          <a
            href="https://vercel.com/?utm_source=labhen&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current"
          >
            <span className="mr-1">Desarrollado por</span>
            <span className="mr-1">
              <Vercel />
            </span>
          </a>
        );
      case "pt":
        return (
          <a
            href="https://vercel.com/?utm_source=labhen&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current"
          >
            <span className="mr-1">Desenvolvido com</span>
            <span className="mr-1">
              <Vercel />
            </span>
          </a>
        );
      default:
        return (
          <a
            href="https://vercel.com/?utm_source=labhen&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current"
          >
            <span className="mr-1">Powered by</span>
            <span>
              <Vercel />
            </span>
          </a>
        );
    }
  },
  logo: (
    <>
      <svg width="100" height="20" viewBox="0 0 360 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.4754 64.81C18.0554 64.81 14.6354 64.69 11.2154 64.45C7.85535 64.27 4.34535 63.79 0.685352 63.01V2.53C3.56535 1.99 6.71535 1.6 10.1354 1.36C13.5554 1.06 16.7354 0.909997 19.6754 0.909997C23.6354 0.909997 27.2654 1.21 30.5654 1.81C33.9254 2.35 36.8054 3.31 39.2054 4.69C41.6054 6.07 43.4654 7.9 44.7854 10.18C46.1654 12.4 46.8554 15.16 46.8554 18.46C46.8554 23.44 44.4554 27.37 39.6554 30.25C43.6154 31.75 46.3154 33.79 47.7554 36.37C49.1954 38.95 49.9154 41.86 49.9154 45.1C49.9154 51.64 47.5154 56.56 42.7154 59.86C37.9754 63.16 30.8954 64.81 21.4754 64.81ZM14.3654 36.82V52.93C15.3854 53.05 16.4954 53.14 17.6954 53.2C18.8954 53.26 20.2154 53.29 21.6554 53.29C25.8554 53.29 29.2454 52.69 31.8254 51.49C34.4054 50.29 35.6954 48.07 35.6954 44.83C35.6954 41.95 34.6154 39.91 32.4554 38.71C30.2954 37.45 27.2054 36.82 23.1854 36.82H14.3654ZM14.3654 26.11H21.2054C25.5254 26.11 28.6154 25.57 30.4754 24.49C32.3354 23.35 33.2654 21.55 33.2654 19.09C33.2654 16.57 32.3054 14.8 30.3854 13.78C28.4654 12.76 25.6454 12.25 21.9254 12.25C20.7254 12.25 19.4354 12.28 18.0554 12.34C16.6754 12.34 15.4454 12.4 14.3654 12.52V26.11ZM68.4441 32.77C68.4441 35.83 68.8041 38.59 69.5241 41.05C70.3041 43.51 71.3841 45.64 72.7641 47.44C74.2041 49.18 75.9441 50.53 77.9841 51.49C80.0241 52.45 82.3641 52.93 85.0041 52.93C87.5841 52.93 89.8941 52.45 91.9341 51.49C94.0341 50.53 95.7741 49.18 97.1541 47.44C98.5941 45.64 99.6741 43.51 100.394 41.05C101.174 38.59 101.564 35.83 101.564 32.77C101.564 29.71 101.174 26.95 100.394 24.49C99.6741 21.97 98.5941 19.84 97.1541 18.1C95.7741 16.3 94.0341 14.92 91.9341 13.96C89.8941 13 87.5841 12.52 85.0041 12.52C82.3641 12.52 80.0241 13.03 77.9841 14.05C75.9441 15.01 74.2041 16.39 72.7641 18.19C71.3841 19.93 70.3041 22.06 69.5241 24.58C68.8041 27.04 68.4441 29.77 68.4441 32.77ZM116.054 32.77C116.054 38.11 115.244 42.82 113.624 46.9C112.064 50.92 109.904 54.31 107.144 57.07C104.384 59.77 101.084 61.81 97.2441 63.19C93.4641 64.57 89.3841 65.26 85.0041 65.26C80.7441 65.26 76.7241 64.57 72.9441 63.19C69.1641 61.81 65.8641 59.77 63.0441 57.07C60.2241 54.31 58.0041 50.92 56.3841 46.9C54.7641 42.82 53.9541 38.11 53.9541 32.77C53.9541 27.43 54.7941 22.75 56.4741 18.73C58.1541 14.65 60.4041 11.23 63.2241 8.47C66.1041 5.71 69.4041 3.64 73.1241 2.26C76.9041 0.879995 80.8641 0.189995 85.0041 0.189995C89.2641 0.189995 93.2841 0.879995 97.0641 2.26C100.844 3.64 104.144 5.71 106.964 8.47C109.784 11.23 112.004 14.65 113.624 18.73C115.244 22.75 116.054 27.43 116.054 32.77ZM160.878 1.63H174.918V64H160.878V37.54H137.298V64H123.258V1.63H137.298V25.48H160.878V1.63ZM226.611 64C225.951 61.84 225.201 59.62 224.361 57.34C223.581 55.06 222.801 52.78 222.021 50.5H197.721C196.941 52.78 196.131 55.06 195.291 57.34C194.511 59.62 193.791 61.84 193.131 64H178.551C180.891 57.28 183.111 51.07 185.211 45.37C187.311 39.67 189.351 34.3 191.331 29.26C193.371 24.22 195.351 19.45 197.271 14.95C199.251 10.39 201.291 5.95 203.391 1.63H216.801C218.841 5.95 220.851 10.39 222.831 14.95C224.811 19.45 226.791 24.22 228.771 29.26C230.811 34.3 232.881 39.67 234.981 45.37C237.081 51.07 239.301 57.28 241.641 64H226.611ZM209.781 15.76C209.481 16.66 209.031 17.89 208.431 19.45C207.831 21.01 207.141 22.81 206.361 24.85C205.581 26.89 204.711 29.14 203.751 31.6C202.851 34.06 201.921 36.64 200.961 39.34H218.691C217.731 36.64 216.801 34.06 215.901 31.6C215.001 29.14 214.131 26.89 213.291 24.85C212.511 22.81 211.821 21.01 211.221 19.45C210.621 17.89 210.141 16.66 209.781 15.76Z" fill="#393939" />
      </svg>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Environmental History Bibliography" />
      <meta name="og:title" content="BOHA" />
    </>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'pt', text: 'Português' },
    { locale: 'es', text: 'Español' },
  ],
}