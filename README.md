# ديوان القبيلة — Android APK

تطبيق Android احترافي لموقع **ديوان القبيلة**، مبني باستخدام Capacitor، ويعرض الموقع مباشرة من:

https://diwan-alqabila.netlify.app/

## المزايا

- اسم التطبيق: **ديوان القبيلة**
- معرّف التطبيق: `netlify.diwan.alqabila`
- أيقونة التطبيق الأصلية موجودة في `resources/icon.png`.
- توليد أيقونات Android تلقائيًا بواسطة `@capacitor/assets`.
- دعم شاشة البداية (Splash Screen) من موارد Capacitor.
- HTTPS فقط.
- منع Mixed Content.
- بناء Release APK عبر GitHub Actions.
- إمكانية توقيع APK رسميًا باستخدام GitHub Secrets.

## GitHub Actions

الـ workflow موجود في:

`.github/workflows/build-apk.yml`

بعد رفع المشروع إلى GitHub:

**Actions → Build Diwan Alqabila Android APK → Run workflow**

ثم حمّل الملف من قسم **Artifacts** باسم:

`diwan-alqabila-release-apk`

## توقيع النسخة النهائية

لإنتاج APK Release موقّع وقابل للتحديث مستقبلًا، لا تضع ملف keystore داخل المستودع.

أضف أسرار GitHub التالية من:

**Settings → Secrets and variables → Actions → New repository secret**

- `ANDROID_KEYSTORE_BASE64`
- `ANDROID_KEYSTORE_PASSWORD`
- `ANDROID_KEY_ALIAS`
- `ANDROID_KEY_PASSWORD`

إذا لم تُضف الأسرار، سيحاول الـ workflow بناء Release APK غير موقّع للاختبار.

## بناء محليًا

```bash
npm install
npx cap add android
npx capacitor-assets generate --android
npx cap sync android
cd android
./gradlew assembleRelease
```
