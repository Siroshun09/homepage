# Cloudflare Pages deployments

Deployments are manual: in **Actions → Deploy → Run workflow**, select the
branch and optionally check **preview**.

| Selected branch | Preview checkbox | Target |
| --- | --- | --- |
| `main` | unchecked | Cloudflare Pages production |
| `main` | checked | Cloudflare Pages preview |
| any other branch | either | Cloudflare Pages preview |

Production runs publish with `--branch=main` and create a
`production/<short SHA>` git tag after a successful deploy. Preview runs
publish with `--branch=preview/<selected branch>` so a preview run from
`main` cannot be classified as a production deployment by Pages when the
Pages project's production branch is `main`. Nothing is deployed to GitHub
Pages.

**Branch migration:** the repository currently uses `master` as its default
branch, not `main`. With this workflow, `master` deploys to preview only.
Rename the default branch to `main` (and update other workflows such as
`ci.yml`) before expecting production deploys; alternatively, explicitly
change the production branch condition and Pages production branch together.

## Required configuration

Create two GitHub **environments** under **Settings → Environments**:
`production` and `preview`. Add the following **environment-scoped**
secrets and variables, not repository-scoped secrets:

| Environment | Type | Name | Value |
| --- | --- | --- | --- |
| `production` | Secret | `CLOUDFLARE_PRODUCTION_API_TOKEN` | Token scoped to the production Cloudflare account |
| `production` | Variable | `CLOUDFLARE_PRODUCTION_ACCOUNT_ID` | Production Cloudflare account ID |
| `production` | Variable | `CLOUDFLARE_PRODUCTION_PROJECT_NAME` | Production Pages project (currently `homepage`, if unchanged) |
| `preview` | Secret | `CLOUDFLARE_PREVIEW_API_TOKEN` | Token scoped **only** to the preview Cloudflare account |
| `preview` | Variable | `CLOUDFLARE_PREVIEW_ACCOUNT_ID` | Preview Cloudflare account ID |
| `preview` | Variable | `CLOUDFLARE_PREVIEW_PROJECT_NAME` | Preview Pages project name |

Give each token only **Account → Cloudflare Pages → Edit** (`Pages Write`)
permission on its designated Cloudflare **account**. The preview account
must be **different** from the production account for the preview token
to be technically incapable of updating production Pages projects.
Create a separate Pages project in the preview account, e.g.
`homepage-preview`. Configure both projects' **production branch as
`main`**, so the `preview/...` branches are always preview deployments.
For an existing Direct Upload Pages project, the production branch is
changed through Cloudflare's Update Project API, not the dashboard
branch controls.

**Important:** Separate GitHub environments and separate Pages projects
within the *same* Cloudflare account do **not** create an authorization
boundary: Pages editing tokens are account-scoped, not project- or
branch-scoped. Do not give the preview token membership in / scope to the
production account. Restrict the GitHub `production` environment to the
`main` branch and consider required reviewers. Remove/rotate the old
repository-scoped `CLOUDFLARE_API_TOKEN` after migrating it.

No Cloudflare credentials or Pages projects are created by this PR. Configure
the environments, accounts, tokens, and projects before running the deploy
workflow. The workflow fails rather than silently deploying when its required
credentials or target settings are missing.

## References

- [Cloudflare Pages deploy options](https://developers.cloudflare.com/workers/wrangler/commands/pages/#pages-deploy)
- [Cloudflare Pages production branch controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/#production-branch-control)
- [Cloudflare API token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)
- [GitHub deployment environments](https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments)
