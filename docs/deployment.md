# Site deployment

Deployments run manually from **Actions → Deploy → Run workflow**.
Select the branch and optionally check **preview**.

## Routing

- `main`, preview unchecked: GitHub Pages and production Cloudflare Pages.
- `main`, preview checked: preview Cloudflare Pages deployment.
- Any other branch, with or without preview checked: preview deployment.

Production deployments publish to the existing GitHub Pages repository
(`Siroshun09/siroshun09.github.io`) and Cloudflare Pages with
`--branch=main`. The same production job creates a
`production/<short SHA>` Git tag only after both deployments succeed.
Preview deployments publish only to Cloudflare Pages with
`--branch=preview/<selected branch>`.
This keeps preview runs from `main` out of the Cloudflare Pages
production branch. Preview never publishes to GitHub Pages.

**Branch migration:** the current default branch is `master`, not
`main`. The workflow treats `master` as preview only. Rename the
default branch to `main` and update other workflows (including CI),
or explicitly change the production branch conditions and Cloudflare
Pages configuration together before using production deployments.

## GitHub configuration

Create `production` and `preview` GitHub environments under
**Settings → Environments**.

Set these values in the **production environment**:

- Secret `GH_PAGES_DEPLOY_TOKEN`: existing token with write permission to the external GitHub Pages repository.
- Secret `CLOUDFLARE_PRODUCTION_API_TOKEN`: token for the production account.
- Variable `CLOUDFLARE_PRODUCTION_ACCOUNT_ID`: production account ID.
- Variable `CLOUDFLARE_PRODUCTION_PROJECT_NAME`: production Pages project.

Set these values in the **preview environment**:

- Secret `CLOUDFLARE_PREVIEW_API_TOKEN`: token for the preview account.
- Variable `CLOUDFLARE_PREVIEW_ACCOUNT_ID`: preview account ID.
- Variable `CLOUDFLARE_PREVIEW_PROJECT_NAME`: preview Pages project.

Restrict the GitHub `production` environment to the `main` branch.
Consider required reviewers. Store deployment secrets in their respective
GitHub environments, including the existing GitHub Pages deploy token.
Remove or rotate the old repository-scoped `CLOUDFLARE_API_TOKEN`
after migrating.

## Cloudflare configuration and security

Use two Cloudflare accounts: one for production, one for preview.
Create a distinct Pages project in each account. Each project's
configured **production branch** must be `main`, so deployments to
`preview/...` branches are preview deployments. To change the
production branch on a Direct Upload project, use Cloudflare's
Update Project API.

Create each API token with only **Account → Cloudflare Pages → Edit**
(`Pages Write`) permission, scoped only to its own Cloudflare account.

**Separate Cloudflare accounts are necessary for true isolation.**
Cloudflare Pages editing permissions are account-scoped, not
project- or branch-scoped. Different GitHub environments, different
API tokens, and different Pages projects within the _same_ Cloudflare
account do not prevent the preview token from changing production.

This PR does not create Cloudflare resources or GitHub secrets.
Configure all resources before using the workflow. Missing credentials
or project settings cause a deployment failure.

## References

- [Cloudflare Pages deploy options](https://developers.cloudflare.com/workers/wrangler/commands/pages/#pages-deploy)
- [Cloudflare Pages production branch controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/#production-branch-control)
- [Cloudflare API token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)
- [GitHub deployment environments](https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments)
