# TMP EXPO

## Outline

### Part 1: Cross-Platform Applications

- React Native & Expo
- Flutter is an alternative

### Part 2: Continuous Delivery

- GitHub Actions
- CircleCI
- Travis

#### Deployment

- Setup for GitHub Pages
- Consider Cloudflare Workers

### Part 3: API

- CORS

### Part 4: Monitoring

- Sentry

## Things to change

- `PUBLIC_URL` in [`./github/workflows/build_and_deploy.yml`](./github/workflows/build_and_deploy.yml).
- [`./web-static/CNAME`](./web-static/CNAME).
- `tmp-expo` and `company.theevents` in [`./app.json`](./app.json).

# Secrets

```sh
#!/bin/bash
# /bin/sh doesn't support `echo -n`
IDENTIFIER=company.theevents # CHANGE ME
EXPO_ANDROID_KEYSTORE_PASSWORD=somethingsecure # CHANGE ME
EXPO_ANDROID_KEY_PASSWORD=somethingsecure # CHANGE ME
EXPO_ANDROID_KEYSTORE_ALIAS=$(echo -n $IDENTIFIER | base64)
keytool -genkeypair -v -keystore android.jks -alias $EXPO_ANDROID_KEYSTORE_ALIAS -keyalg RSA -keysize 2048 -validity 10000
# Use $EXPO_ANDROID_KEYSTORE_PASSWORD
# Confirm $EXPO_ANDROID_KEYSTORE_PASSWORD
# "Greg Brimble"
# "Engineering"
# "Glenstack"
# "Edinburgh"
# "City of Edinburgh"
# "UK"
# "yes"
# Use $EXPO_ANDROID_KEY_PASSWORD
# Confirm $EXPO_ANDROID_KEY_PASSWORD
EXPO_ANDROID_KEYSTORE_BASE64=$(base64 android.jks)
```

https://www.daily-coding.net/posts/building-standalone-expo-apps-with-github-actions
