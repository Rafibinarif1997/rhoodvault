# RHOODVAULT — Clean URL Blue Pixel Edition

Static HTML/CSS/JS multi-page site for GitHub Pages.

## Structure
- `/` → Home
- `/collection/` → Collection
- `/mint/` → Mint
- `/vault/` → My Vault
- `/quests/` → Quests
- `/rewards/` → Rewards
- `/leaderboard/` → Leaderboard

These routes do not expose `.html` in the browser URL.

## GitHub Pages
Upload this folder to the `main` branch. In GitHub:
Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

If a custom domain is used, these same clean routes remain available.

## Note
Wallet/minting is currently a frontend demo. Real ERC-721 contract + wallet connection + Supabase quest backend can be integrated next.
