# Skiptacle - Chrome Extension

[![License](https://img.shields.io/github/license/yilber/readme-boilerplate.svg)](./LICENCE)

A Chrome extension built with React.js that automatically skips intros and recaps on Netflix and Prime Video streaming services.

## Background

Tired of manually clicking the skip button for intros and recaps while binge-watching your favorite shows? Skiptacle automatically handles this for you, providing a seamless streaming experience on Netflix and Prime Video.

## Features

- Automatically skip intros on Netflix and Prime Video
- Automatically skip recaps on Netflix and Prime Video
- Simple toggle controls through the extension popup
- Settings persist between browser sessions

## Installation

1. Clone the repository:

```sh
git clone [your-repo-url]
```

2. Navigate to the project directory:

```sh
cd skiptacle
```

3. Install dependencies & compile code with webpack:

```sh
yarn
yarn run dev
```

## File Structure

```text
skiptacle
├── README.md
├── node_modules
├── dist                    # Generated build files
├── public
│   ├── icons
│   │   ├── 128.png
│   │   ├── 16.png
│   │   └── 48.png
│   ├── manifest.json
│   └── popup.html
├── src
│   ├── chrome
│   │   ├── background.js
│   │   └── content.js
│   ├── components
│   │   └── Switch.jsx
│   ├── utils
│   │   └── index.js
│   ├── popup.css
│   └── popup.jsx
├── webpack.config.js
├── webpack.dev.js
├── webpack.prod.js
└── postcss.config.js
```

## How to Use

1. Run `yarn dev` to generate the `dist` folder in the root directory
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right corner
4. Click "Load Unpacked" and select the `dist` folder from the project directory
5. The extension will appear in your Chrome toolbar
6. Click the extension icon to toggle intro/recap skipping functionality

## Development

The project uses:

- React.js for the popup UI
- Tailwind CSS for styling
- Webpack for bundling
- Chrome Extension Manifest V3

## Bugs

If you have questions, feature requests or a bug you want to report, please file an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
