import MainLayout from '@/Layout';
import { defaultLanguage } from '@/app/i18n/settings';

export default function RootLayout({ children }) {
  return <MainLayout lng={defaultLanguage}>{children}</MainLayout>;
}
