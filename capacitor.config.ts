import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'netlify.diwan.alqabila',
  appName: 'ديوان القبيلة',
  webDir: 'public',
  server: {
    url: 'https://diwan-alqabila.netlify.app/',
    cleartext: false,
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
