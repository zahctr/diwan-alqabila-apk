# ديوان القبيلة — Android APK

هذا المشروع يحول موقع ديوان القبيلة إلى تطبيق Android باستخدام Capacitor، ويستخدم الموقع مباشرة:

https://diwan-alqabila.netlify.app/

## البناء محليًا

```bash
npm install
npx cap add android
npx capacitor-assets generate --android
npx cap sync android
cd android
./gradlew assembleDebug
```

ملف APK الناتج يكون عادةً في:

`android/app/build/outputs/apk/debug/app-debug.apk`

## البناء عبر GitHub Actions

ارفع المشروع إلى مستودع GitHub، ثم افتح Actions وشغّل workflow باسم **Build Android APK**. سيُبنى APK تلقائيًا ويظهر كـ Artifact باسم `diwan-alqabila-debug-apk`.

## الأيقونة

الأيقونة الأصلية التي تم توفيرها موجودة في:

`resources/icon.png`
