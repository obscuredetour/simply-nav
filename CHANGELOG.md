# Changelog
All notable changes to this project will be documented in this file.
## [1.3.1] - 2020-12-29
### Changed
- Fixed overflow bug.

## [1.3.0] - 2020-12-22
### Changed
- Left & Right side layouts now supported. Right-side is now default.
- Refactored some SCSS, cleaned up some styles, animations, & JS.
- No longer maintaining standalone version (legacy version will remain).
  - If any sad to see this go, open an issue an and I'll consider supporting it again.
- Due to all of the above, DOM changes occurred and a version point bump.
### Added
- ARIA/Accessibility support.

## [1.2.1] - 2019-02-20
### Changed
- Website: fixed link in bottom navigation note.

## [1.2.1] - 2019-02-11
### Changed
- Readme, docs reflect updated how to use instructions.
- `logo-full-dark` updated.

### Added
- Page JS functions for new feature toggles.
- `nav.css` created.
- Footer element with links.
- MIT license.

## [1.2.0] - 2019-02-08
### Changed
- Readme and docs.
- JS tweaks - reset nav to defaults.
- Fixed bug - burger close not syncing correctly.

## [1.1.4] - 2019-02-05
### Changed
- Logo update.
- Readme and docs.
- JS restructured.
- Bug introduced on burger close not syncing correctly

## [1.1.4] - 2019-02-05
### Changed
- Active (open) mobile menu prevents page scrolling, but allows scrolling the nav items if they extend beyond the screen. (not tested on iOS)
- Due to the above implementation, `overflow: hidden` cannot be used to 'hide' the nav when in the closed state. This resulted in moving it offscreen by `left: -15rem`.
- Menu animation changed to ease-in-out b/c nav is now located offscreen. The cubic bezier bounce effect was somewhat jarring.
- Removed all uncessary `z-index` values.

## [1.1.3] - 2019-02-05
### Changed
- All things flex, removed all absolute positioning except for header nav.
- Better JS/CSS implementation to prevent page scrolling when mobile menu is active.
- Restructured JS items.
- Menu button is now an actual button, reset browser styles.
- Need to rewrite docs and readme.

## [1.1.2] - 2019-02-04
### Changed
- Rewrote the close on click JS function.
- Eliminiated body scroll when mobile menu is active. (not for iOS)
- Rewrote burger squeeze and incorporated 'regular' burger style.
- New colors, logo. Next are Readme and docs.

## [1.1.1] - 2019-02-03
### Added
- Colors.

### Changed
- Begin rewrite of components using RSCSS practices.
- Logo updated.

## [1.1.0] - 2019-02-02
### Changed
- Begin rewrite using RSCSS practices.
- Created and imported logo.
- Roadmap.