# GEMINI.md

This file provides guidance to Gemini when working with code in this repository.

## Project Overview

This is a Slidev theme package for FHSH AiSP (復興高中 AI 資安學程). It provides custom layouts, styling, and components for creating presentations with Slidev. The theme is configured with specific fonts, colors, and branding for the FHSH AiSP program.

## Development Commands

This is a Slidev theme package. Key commands:

- `pnpm run dev` - Start development server with `example.md` for live preview.
- `pnpm run build` - Build the example presentation to static files.
- `pnpm run export` - Export `example.md` to PDF.
- `pnpm run screenshot` - Generate PNG screenshots of `example.md`.

**Package manager:** **pnpm** (required, as specified in the `packageManager` field in `package.json`).

## Architecture

This is a Slidev theme package that provides custom layouts and styling for presentations.

### Core Structure
- `layouts/` - Vue components for different slide layouts (cover, default, section, image, base).
- `styles/` - CSS styling (`layout.css`) imported via `index.ts`.
- `setup/shiki.ts` - Code syntax highlighting configuration using `vitesse` themes.
- `components/` - Custom Vue components.
- `assets/` - Theme assets like logos, backgrounds, and images.

### Theme Configuration
- **Package Name:** `@cxphoenix/slidev-theme-fhsh-aisp`
- **Default Fonts:** Noto Sans TC (sans-serif), Fira Code (monospace).
- **Aspect Ratio:** 16/9
- **Title Template:** `%s - FHSH AiSP`
- **Color Schema:** `light`

### Layout System
- `base.vue` - The base layout that other layouts extend from. It includes page numbering, which is skipped on certain layouts like `cover`.
- `cover.vue` - The layout for the title or cover slide.
- `default.vue` - The standard layout for content slides.
- `section.vue` - A layout for section divider slides.
- `image.vue` - A layout that uses a background image.

### Development Workflow
- Use `example.md` as the test presentation file for development and previewing changes.
- All layouts inherit from `base.vue`.
- Styling is centralized in `styles/layout.css`.
- Code highlighting is handled by Shiki with the `vitesse-light` and `vitesse-dark` themes.

## Key Files to Understand
- `package.json` - Contains theme defaults, dependencies, and scripts.
- `layouts/base.vue` - Contains the core layout logic and page numbering.
- `styles/layout.css` - The main stylesheet for the theme.
- `example.md` - The example presentation file used for development.

**Note:** This project does not currently have configurations for linting, testing, or TypeScript.

## Writing Guidelines

- When writing `README.md` or `Usage.md`, use traditional Chinese (Taiwan) and add emojis to make the content more engaging.

## Commit Message Guidelines

- Write git commit messages in traditional Chinese (Taiwan) and use emojis.
- The commit message title should follow this structure: `{emoji} {type}({scope}): {subject}`
  - Example: `✨ feat(base): 增加頁碼`
- The commit message body should be a bulleted list, with each point starting with an emoji.
  - The description should clearly explain the what, why, and impact of the changes.
- Provide the git commit message directly in the standard output; do not execute the `git commit` command.
