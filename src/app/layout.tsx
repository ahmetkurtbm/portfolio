import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="font-inter">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#8b5cf6', // Purple primary
                colorInfo: '#3b82f6', // Blue info
                colorSuccess: '#10b981', // Green success
                colorWarning: '#f59e0b', // Yellow warning
                colorError: '#ef4444', // Red error
                borderRadius: 12,
                fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 16,
                colorBgBase: '#0f172a', // Dark background
                colorTextBase: '#f8fafc', // Light text
              },
              components: {
                Button: {
                  fontWeight: 600,
                  borderRadius: 12,
                },
                Typography: {
                  fontFamilyCode: 'var(--font-jetbrains-mono), "Fira Code", Consolas, monospace',
                },
                Menu: {
                  colorBgBase: 'transparent',
                  colorBgContainer: 'transparent',
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}