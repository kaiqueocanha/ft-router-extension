# FT Router

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-green.svg)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A Chrome extension that automatically redirects `www.ft.com` and `ft.com` to `app.ft.com`, preserving the rest of the URL.

| You open                               | You land on                               |
| -------------------------------------- | ----------------------------------------- |
| `https://www.ft.com/`                  | `https://app.ft.com/`                     |
| `https://www.ft.com/world`             | `https://app.ft.com/world`                |
| `https://ft.com/content/abc?x=1#top`   | `https://app.ft.com/content/abc?x=1#top`  |

## Features

- Redirect handled by the browser before the page loads, with no flash of the original page.
- Preserves path, query string and fragment.
- Page navigations only (`main_frame`): images, scripts and APIs are untouched.
- Popup with an on/off toggle. The state persists and the icon badge shows `ON`/`OFF`.
- No data collection, no network requests, no analytics.

## Installation

The extension is not on the Chrome Web Store yet. To install from source:

1. Clone the repository:
   ```bash
   git clone https://github.com/kaiqueocanha/ft-router-extension.git
   ```
2. Open `chrome://extensions` and enable **Developer mode**.
3. Click **Load unpacked** and select the cloned folder.

It also works in other Chromium-based browsers (Edge, Brave, etc.).

## How it works

The extension uses the Manifest V3 [`declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) API with a static rule in [`rules.json`](rules.json):

```json
{
  "regexFilter": "^(https?)://(?:www\\.)?ft\\.com/(.*)$",
  "regexSubstitution": "https://app.ft.com/\\2"
}
```

The service worker ([`background.js`](background.js)) only enables or disables that ruleset according to the popup toggle, and updates the badge.

## Project structure

```
manifest.json   Extension configuration (MV3)
rules.json      Redirect rule
background.js   Service worker: toggle and badge
popup.html/js   Toggle UI
```

## Permissions

| Permission                                  | Reason                                    |
| ------------------------------------------- | ----------------------------------------- |
| `declarativeNetRequest`                     | Apply the redirect rule                   |
| `storage`                                   | Remember whether the redirect is on/off   |
| Hosts `ft.com`, `www.ft.com`, `app.ft.com`  | Required to redirect between them         |

## Known limitations

- We have not verified that every `www.ft.com` path exists on `app.ft.com`. If a path breaks (login, account, etc.), [open an issue](../../issues) or add an exclusion rule in `rules.json`.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md).

## Disclaimer

Independent project, not affiliated with the Financial Times. "FT" and "Financial Times" belong to their respective owners.

## License

[MIT](LICENSE)
