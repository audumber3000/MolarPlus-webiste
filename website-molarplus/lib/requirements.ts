/**
 * System requirements shown on /platform.
 *
 * Every version here was read out of the product in September 2026, not
 * estimated. Re-check the source before changing a number:
 *
 *   Browsers   frontend/vite.config build target:
 *              ['es2019', 'safari13', 'chrome80', 'firefox78', 'edge88']
 *   Windows    Tauri v2 requires Windows 10 1803+ and the Edge WebView2
 *              runtime, which the installer adds when it is missing.
 *   macOS      desktop/src-tauri/tauri.conf.json → bundle.macOS
 *              .minimumSystemVersion = "10.15"
 *   iOS        mobile-app/ios/Podfile and project.pbxproj →
 *              IPHONEOS_DEPLOYMENT_TARGET = 15.1
 *   Android    compiled manifest → android:minSdkVersion="24" (Android 7.0)
 *
 * Logos live in public/platform-logos. They are other companies' trademarks,
 * used only to say what MolarPlus runs on: never imply endorsement.
 */

export interface Requirement {
  /** Product name, as its owner writes it. */
  name: string;
  logo: string;
  minimum: string;
  note: string;
}

export interface RequirementGroup {
  id: string;
  title: string;
  intro: string;
  /** Column heading for the version column, which differs per group. */
  versionLabel: string;
  /** Heading of the first column: what the rows are. */
  entityLabel: string;
  rows: Requirement[];
}

export const REQUIREMENT_GROUPS: RequirementGroup[] = [
  {
    id: 'browsers',
    title: 'Web browsers',
    intro:
      'MolarPlus runs in the browser at app.molarplus.com. Any of these browsers works, on Windows, macOS, Linux or ChromeOS. Keeping the browser on its current version is recommended.',
    versionLabel: 'Minimum version',
    entityLabel: 'Browser',
    rows: [
      {
        name: 'Google Chrome',
        logo: '/platform-logos/chrome.svg',
        minimum: 'Chrome 80',
        note: 'Also covers Chromium browsers such as Brave, Opera and Arc.',
      },
      {
        name: 'Microsoft Edge',
        logo: '/platform-logos/edge.svg',
        minimum: 'Edge 88',
        note: 'The default browser on Windows 10 and Windows 11.',
      },
      {
        name: 'Safari',
        logo: '/platform-logos/safari.svg',
        minimum: 'Safari 13',
        note: 'On macOS, iPhone and iPad.',
      },
      {
        name: 'Mozilla Firefox',
        logo: '/platform-logos/firefox.svg',
        minimum: 'Firefox 78',
        note: 'Including the extended support releases.',
      },
    ],
  },
  {
    id: 'desktop',
    title: 'Desktop apps',
    intro:
      'The Windows and Mac apps open the same MolarPlus in their own window, so the front desk is not one tab among twenty.',
    versionLabel: 'Minimum version',
    entityLabel: 'System',
    rows: [
      {
        name: 'Windows',
        logo: '/platform-logos/windows.svg',
        minimum: 'Windows 10, version 1803',
        note: 'Windows 11 is supported. The installer adds the Edge WebView2 runtime if the computer does not already have it.',
      },
      {
        name: 'macOS',
        logo: '/platform-logos/apple.svg',
        minimum: 'macOS 10.15 Catalina',
        note: 'Every later release is supported, up to the current one.',
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile apps',
    intro: 'The MolarPlus apps for phone and tablet, for the schedule and patient records between chairs.',
    versionLabel: 'Minimum version',
    entityLabel: 'Device',
    rows: [
      {
        name: 'iPhone and iPad',
        logo: '/platform-logos/apple.svg',
        minimum: 'iOS and iPadOS 15.1',
        note: 'Download from the App Store.',
      },
      {
        name: 'Android',
        logo: '/platform-logos/android.svg',
        minimum: 'Android 7.0 Nougat',
        note: 'Phones and tablets. Download from Google Play.',
      },
    ],
  },
];

/** Requirements that hold whatever the device is. */
export const GENERAL_REQUIREMENTS = [
  'A working internet connection. MolarPlus keeps clinic data on its servers, so the apps need to reach them.',
  'A screen of 1024 pixels wide or more is recommended for the full desktop layout. Narrower screens get the mobile layout.',
  'JavaScript and cookies enabled, which is the default in every browser listed above.',
];
