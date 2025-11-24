# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working with this repository.

## Repository Overview

**Repository Purpose**: Personal website for Akash Deep Singh, an Applied Scientist specializing in machine learning and LLMs.

**Technology Stack**:
- **Static Site Generator**: Hugo (v0.115.4 extended)
- **Theme**: Barks (minimalistic theme for personal/academic websites)
- **Deployment**: GitHub Pages via GitHub Actions
- **Domain**: Custom domain configured via CNAME

## Project Structure

```
thecyclone.github.io/
├── .github/
│   └── workflows/
│       └── hugo.yaml          # GitHub Actions CI/CD pipeline
├── archetypes/
│   └── default.md             # Template for new content pages
├── content/                   # All website content (Markdown)
│   ├── _index.md              # Homepage/landing page
│   ├── experience.md          # Experience page
│   ├── education.md           # Education page
│   └── privacy.md             # Privacy policy page
├── public/                    # Generated static site (auto-generated, not committed)
├── resources/                 # Hugo resources cache (auto-generated)
├── static/                    # Static assets (images, CSS, PDFs, favicons)
│   ├── custom.css             # Custom CSS overrides
│   ├── akash_resume.pdf       # Resume PDF
│   └── [favicons and images]
├── themes/
│   └── barks/                 # Hugo theme (submodule)
├── CNAME                      # Custom domain configuration
├── hugo.toml                  # Main Hugo configuration file
└── README.md                  # Quick start guide for developers
```

## Key Configuration Files

### hugo.toml
Primary configuration file containing:
- Site metadata (title, baseURL, language)
- Theme selection
- Menu structure (Resume, Publications, Education, Experience)
- Typography settings (Google Fonts: Inter, Source Sans Pro)
- Color scheme configuration
- Social media links (Email, GitHub, Google Scholar, LinkedIn)
- Markup settings (Goldmark renderer, syntax highlighting)

**Important Parameters**:
- `baseURL = '/'` - Root relative URLs for GitHub Pages
- `canonifyURLs = true` - Ensures consistent URL formatting
- `theme = 'barks'` - Specifies the theme to use
- Custom CSS: `/custom.css` (loaded from static/)

### .github/workflows/hugo.yaml
Automated deployment pipeline that:
1. Triggers on pushes to `master` branch
2. Installs Hugo Extended v0.115.4 and Dart Sass
3. Checks out repository with submodules (for theme)
4. Builds Hugo site with minification and garbage collection
5. Uploads to GitHub Pages
6. Deploys to production

**Critical Notes**:
- Only `master` branch triggers deployment
- Requires Hugo Extended version (for SCSS compilation)
- Submodules must be checked out recursively

## Development Workflow

### Local Development

1. **Start development server**:
   ```bash
   hugo server
   ```
   - Serves site locally with live reload
   - Accessible at http://localhost:1313/

2. **View drafts during development**:
   ```bash
   hugo server --buildDrafts
   # or
   hugo server -D
   ```

3. **Build production site**:
   ```bash
   hugo
   ```
   - Generates static files in `public/` directory

### Creating New Content

1. **Create new page/post**:
   ```bash
   hugo new content posts/my-post.md
   # or for other sections
   hugo new content <section>/<name>.md
   ```

2. **Front matter structure** (from archetypes/default.md):
   ```yaml
   +++
   title = 'Page Title'
   date = YYYY-MM-DD
   draft = true  # Set to false when ready to publish
   +++
   ```

3. **Landing page layout** (_index.md):
   ```yaml
   +++
   title = 'Name'
   layout = 'landing_page'
   image = 'profile-image.jpg'  # Image from static/
   +++
   ```

### Content Guidelines

**Existing Content Structure**:
- **Homepage** (`_index.md`): Landing page with personal introduction
- **Experience** (`experience.md`): Professional work history with timeline
- **Education** (`education.md`): Academic background
- **Privacy** (`privacy.md`): Privacy policy

**Formatting Conventions**:
- Use HTML `<span>` tags for colored text (dates and locations)
- Date format: `[Month Year - Month Year]` or `[Month Year - Present]`
- Color scheme for dates: `#006400` (dark green)
- Color scheme for locations: `#008080` (teal)
- Markdown lists with nested bullet points for details

**Example Experience Entry**:
```markdown
- ## <span style="color:#006400">[Apr 2023 - Present]</span> Job Title @ [Company](url) <span style="color:#008080">[Location]</span>
	- Bullet point detail 1
	- Bullet point detail 2
	- ML Stack: Technologies used
	- Tech Stack: Tools and frameworks
```

## Theme Information

**Barks Theme Features**:
- Minimalistic, clean design
- Responsive layout
- FontAwesome and Academicons support
- Google Fonts integration
- Optional LaTeX/KaTeX support (enable with `math: true` in front matter)
- Customizable typography and colors
- Social media footer icons

**Theme Documentation**: See `themes/barks/README.md` for detailed configuration options

## Static Assets

**Location**: `static/` directory

**Common Assets**:
- `custom.css` - Custom styling overrides
- `akash_resume.pdf` - Resume file (linked in main menu)
- Favicon files (various sizes for different platforms)
- `akash.jpg` - Profile image used on landing page

**Adding New Static Files**:
1. Place files in `static/` directory
2. Reference in content using root-relative paths: `/filename.ext`
3. For images in content: `![alt text](/image.jpg)`

## Git Workflow

### Branching Strategy
- **Main branch**: `master` - Production branch, triggers deployment
- **Feature branches**: Follow pattern `claude/description-sessionid`
- Always develop on feature branches, never directly on `master`

### Commit Guidelines
- Use clear, descriptive commit messages
- Focus on "why" rather than "what"
- Example: "Update experience section with current role details"

### Deployment Process
1. Make changes on feature branch
2. Test locally with `hugo server`
3. Commit changes with descriptive message
4. Push to feature branch
5. Create pull request to `master`
6. Once merged, GitHub Actions automatically deploys

## Common Tasks for AI Assistants

### Updating Content
1. **Modify existing pages**: Edit files in `content/` directory
2. **Respect existing formatting**: Maintain color scheme and structure
3. **Test locally**: Always run `hugo server` to preview changes
4. **Do not modify**: `public/`, `resources/` (auto-generated)

### Adding New Sections
1. Create new markdown file in `content/`
2. Add appropriate front matter
3. Optionally add to main menu in `hugo.toml`:
   ```toml
   [[menu.main]]
       name = "Section Name"
       url = "/section-url"
       weight = 3  # Controls order
   ```

### Styling Changes
1. **Prefer**: Editing `static/custom.css` for custom styles
2. **Avoid**: Modifying theme files directly (they're in a submodule)
3. **Theme changes**: Document if theme submodule needs updating

### Configuration Changes
1. **Main config**: Edit `hugo.toml`
2. **Colors/fonts**: Update under `[params.colors]` or `[params.typography]`
3. **Social links**: Modify `[params.social]` sections
4. **Test thoroughly**: Configuration errors can break the build

## Important Conventions

### DO:
- Always test locally before committing
- Maintain existing formatting and color schemes
- Use semantic HTML when needed for styling
- Keep commit history clean and descriptive
- Update this CLAUDE.md when making structural changes
- Preserve the minimalistic design philosophy

### DON'T:
- Don't modify auto-generated directories (`public/`, `resources/`)
- Don't commit directly to `master` branch
- Don't break the GitHub Actions workflow
- Don't add unnecessary complexity or bloat
- Don't modify theme files without documenting changes
- Don't remove existing content without explicit instruction

## Troubleshooting

### Build Failures
- Ensure Hugo Extended version is used (required for SCSS)
- Check for syntax errors in front matter (use `+++` delimiters)
- Verify all referenced static files exist
- Check `hugo.toml` for configuration errors

### Local Development Issues
- Clear Hugo cache: Remove `.hugo_build.lock` and `resources/_gen/`
- Ensure theme submodule is initialized: `git submodule update --init --recursive`
- Check Hugo version: `hugo version` (should be v0.115.4 or compatible)

### Deployment Issues
- Check GitHub Actions logs in `.github/workflows/hugo.yaml`
- Verify push was to `master` branch
- Ensure CNAME file is preserved if using custom domain
- Check GitHub Pages settings in repository

## Dependencies

**Required Software**:
- Hugo Extended v0.115.4 or later
- Dart Sass (for theme SCSS compilation)
- Git (for theme submodule management)

**External Services**:
- GitHub Pages (hosting)
- Google Fonts (typography)
- FontAwesome (icons)
- Academicons (academic profile icons)

## Contact and Maintenance

**Site Owner**: Akash Deep Singh
- Email: akash.a283@gmail.com
- GitHub: https://github.com/thecyclone
- LinkedIn: https://www.linkedin.com/in/akashd33psingh/

**Last Updated**: 2025-11-24

---

## Quick Reference Commands

```bash
# Start local development server
hugo server

# Start server with drafts visible
hugo server -D

# Build production site
hugo

# Create new content
hugo new content posts/my-post.md

# Check Hugo version
hugo version

# Update theme submodule
git submodule update --remote themes/barks
```

## Additional Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Barks Theme](https://github.com/timothygebhard/barks)
- [Hugo Quickstart](https://gohugo.io/getting-started/quick-start/)
- [Markdown Guide](https://www.markdownguide.org/)
