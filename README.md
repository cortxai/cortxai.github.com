# cortxai.github.com

The CortxAI landing page — a Jekyll site deployed to GitHub Pages.

## Local development

### Prerequisites

- [DevPod CLI](https://devpod.sh/docs/getting-started/install) installed and configured with a provider (e.g. Docker Desktop)

### Start the workspace

From the root of this repository, spin up the dev container:

```bash
devpod up .
```

This builds the container defined in `.devcontainer.json`, installs Ruby 3.2, and runs `bundle install` automatically.

### Connect to the workspace

```bash
devpod ssh cortxai.github.com
```

> The workspace name defaults to the directory name. If you cloned the repo to a different folder name, substitute that name instead.

### Preview the site

Once inside the workspace, start the Jekyll development server:

```bash
bundle exec jekyll serve --livereload --host 0.0.0.0
```

Then open your browser at [http://localhost:4000](http://localhost:4000).

The `--livereload` flag automatically refreshes the browser whenever you save a file.

### Stop the workspace

```bash
devpod stop cortxai.github.com
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/jekyll.yml`, which builds and deploys the site to GitHub Pages automatically.
