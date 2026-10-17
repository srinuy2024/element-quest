# 📱 Android Mobile App Publishing Guide for ElementQuest

This guide provides step-by-step instructions to test, build, and publish **ElementQuest** as an Android app on Google Play Store!

---

## ⚡ Method 1: Instant 1-Minute Mobile Test (PWA on Android)
*No Android Studio needed! Works immediately on any Android phone or tablet.*

1. **Host or open the app on your local network:**
   - Run `node server.js` on your computer.
   - Find your computer's local IP address (e.g. `http://192.168.1.5:3000`).
2. **Open in Chrome on your Android phone:**
   - Go to that URL on your phone.
3. **Tap "Install App" or "Add to Home Screen":**
   - A banner will appear at the bottom: **"Add ElementQuest to Home screen"** (or tap the 3 dots in Chrome > *Add to Home screen*).
4. **Result:**
   - A native app icon appears on your Android phone home screen!
   - Tapping it launches ElementQuest in **immersive fullscreen** (no browser address bar), and it works **100% offline** using the built-in Service Worker!

---

## 📦 Method 2: Build a Native Android APK / AAB (Google Play Store)
*Uses Capacitor to generate a production-ready Android Studio project.*

### Step 1: Install Dependencies
Open PowerShell in `d:\Personal\element-quest` and run:
```powershell
npm.cmd install
```
*(This installs `@capacitor/core`, `@capacitor/cli`, and `@capacitor/android`)*

### Step 2: Add the Android Native Platform
```powershell
npx.cmd cap add android
```
*(This creates an `android/` folder with a complete native Android Studio project, including `AndroidManifest.xml`, Gradle scripts, app icons, and splash screens)*

### Step 3: Sync Assets
Whenever you make updates to the HTML, CSS, or JS files, run:
```powershell
npx.cmd cap sync android
```

### Step 4: Open in Android Studio & Build APK
```powershell
npx.cmd cap open android
```
Once Android Studio opens:
1. **To test on a plugged-in Android phone or emulator:**
   - Click the green **Play (Run)** button at the top.
2. **To generate an APK for direct installation (Debug / Release APK):**
   - Click **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
   - The `.apk` file will be generated in `android/app/build/outputs/apk/debug/app-debug.apk`.
   - Transfer this `.apk` to any Android phone and tap it to install!

---

## 🚀 Publishing to Google Play Console

To publish on the Google Play Store:

### 1. Generate a Signed Android App Bundle (`.aab`)
In Android Studio:
1. Click **Build** > **Generate Signed Bundle / APK...**
2. Choose **Android App Bundle (`.aab`)** and click **Next**.
3. Create or select your keystore key (remember your password!).
4. Select **release** build variant and click **Finish**.
5. Your signed bundle will be created at:
   `android/app/release/app-release.aab`

### 2. Set Up Your Google Play Console Account
1. Go to [play.google.com/console](https://play.google.com/console) and register a developer account ($25 one-time fee).
2. Click **Create App**:
   - **App name:** `ElementQuest - Kids Periodic Table & Science Game`
   - **Default language:** English
   - **App or game:** Game
   - **Free or paid:** Free (or Paid if you choose)
3. Under **Target Audience / Families Policy**:
   - Select target age: **Ages 6-8, 9-12**.
   - Confirm that the app is kid-friendly (no inappropriate ads, safe educational content).
4. Fill in the **Store Listing**:
   - **Short description:** *"Explore periodic table elements, spin atom models, and brew chemical reactions!"*
   - **Full description:** Highlight the 8 game modes, Bohr atom model, Molecule Kitchen, Fireworks Chemist, and Junior Chemist Diploma!
   - Upload screenshots and the app icon (`assets/icon.svg`).
5. **Upload `.aab`:** Under **Production** > **Releases**, upload your `app-release.aab`.
6. Submit for review! Google typically reviews family/educational apps within 24 to 48 hours.

---

## 🛠️ App Configuration Reference
- **Package Name / App ID:** `com.elementquest.kidsgame`
- **Minimum Android SDK:** Android 6.0+ (API 23+)
- **Target Android SDK:** Android 14+ (API 34+)
- **Orientation:** Landscape and Portrait friendly
- **Offline Support:** 100% offline enabled
