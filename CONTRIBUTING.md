# Contributing

Thanks for your interest in contributing to FT Router!

## Reporting bugs

Open an [issue](../../issues/new/choose) with:
- the URL you opened and the URL you ended up on (remove any personal data);
- the expected behavior;
- your Chrome and extension versions.

## Suggesting changes

1. Fork the repo and create a branch: `git checkout -b my-change`.
2. Load the folder in `chrome://extensions` (Developer mode) and test manually.
3. Make sure the JSON files are valid (`python3 -m json.tool rules.json`) and the JS passes `node --check`.
4. Open a Pull Request describing what changed and why.

## Guidelines

- Keep the extension minimal: no dependencies, no build step, no data collection.
- Don't add permissions beyond what is needed; justify any new permission in the PR.
- Prefer declarative rules in `rules.json` over JS logic.
- Write clear, imperative commit messages.

By contributing, you agree that your code will be licensed under the [MIT](LICENSE) license.
