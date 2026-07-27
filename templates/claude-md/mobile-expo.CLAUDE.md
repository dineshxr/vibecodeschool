# <app-name> (Expo / React Native)

<one line: what this app is>

## Stack

Expo SDK <ver> · Expo Router · TypeScript · <state lib> · EAS Build/Submit

## Commands

- Install: `pnpm install`
- Dev: `pnpm start` (press i for iOS simulator, a for Android)
- Tests: `pnpm test`
- Type check: `pnpm typecheck`
- Native build (only when asked): `eas build --profile development --platform ios`

Never run `eas build`/`eas submit` unprompted — builds cost minutes and quota.

## Platform rules

- Test intent on BOTH platforms: if you change platform-specific code
  (`Platform.select`, `.ios.tsx`/`.android.tsx`), say what to verify on the other one.
- New native dependencies require a new dev client build — call this out
  explicitly whenever you add one; JS-only changes don't.
- Assets: use `expo-image`, not `<Image>` from react-native.
- Navigation state lives in the URL (Expo Router) — no imperative nav stacks.

## House rules

- Small diffs; plan first for anything touching navigation or native config.
- app.json / eas.json changes: propose, don't apply — these break builds silently.
- Keyboard, safe-area, and offline states are part of "done" for any screen.

## Gotchas

- <e.g. "Push tokens are mocked in dev — see lib/notifications.ts">
- <e.g. "The iOS bundle id is managed in App Store Connect; never change it">

## Working agreement

State your plan in 2–3 bullets before multi-file changes. When unsure, ask one
precise question. After UI changes, describe what to check in the simulator.
