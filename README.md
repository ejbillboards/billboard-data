# E&J Billboards: public board data

National billboard location data that powers the E&J Billboard Master Planner maps on eandjbillboards.com.

- `index.json`: list of states and board counts
- `states/<ST>.json`: one file per state (public-safe fields only)
- `pages.json`: maps website pages to a state and map center
- `loader.js`: the one small script pasted into Squarespace
- `scripts/build.py`: builds the state files from the master sheet export

Schema version 1. Board fields: `id`, `faces`, `area`, `city`, `loc`, `types`, `sizes`, `price` (external starting prices from pricing.json; internal sheet rates are never published), `photo`, `lat`, `lon`.
Never published: vendor names, internal IDs, rights notes, costs.
Pins are approximate. An E&J agent confirms the exact face and availability.
