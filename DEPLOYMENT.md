# GitHub Pages Deployment Guide

## Enable GitHub Pages (Required First Step)

1. Go to your repository: https://github.com/NKK-AFRICA/awtravelandtours
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

## Troubleshooting

If the workflow fails, check:

1. **GitHub Pages must be enabled first** - The workflow cannot deploy until Pages is enabled in Settings
2. **Check the Actions tab** - View the workflow logs to see the specific error
3. **Permissions** - Ensure your account has write access to the repository

## Manual Deployment (Alternative)

If GitHub Actions doesn't work, you can deploy manually:

```bash
npm run build
# Then push the dist folder to a gh-pages branch
```

