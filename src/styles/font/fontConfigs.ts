import localFont from 'next/font/local';

export const vazir = localFont({
  src: [
    {
      path: '../../assets/fonts/Vazir.ttf',
      weight: 'normal',
      style: 'normal',
    },
  ],
  variable: '--font-vazir',
  display: 'swap',
});