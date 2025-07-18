# ESBuild Security Vulnerability Fix

## Issue
The repository had a security vulnerability in a nested dependency where `drizzle-kit` was using an outdated version of `esbuild` (v0.18.20) through the dependency chain:
```
drizzle-kit@0.31.4 → @esbuild-kit/esm-loader@2.6.5 → @esbuild-kit/core-utils@3.3.2 → esbuild@0.18.20
```

This vulnerable version (≤0.24.2) allowed websites to send requests to the development server and read responses.

## Solution
Implemented npm overrides in `package.json` to force the vulnerable esbuild version to use a safe version:

```json
{
  "overrides": {
    "@esbuild-kit/core-utils": {
      "esbuild": "^0.25.0"
    }
  }
}
```

## Result
- **Before**: npm audit showed 4 moderate vulnerabilities
- **After**: npm audit shows 0 vulnerabilities
- All esbuild dependencies now use version 0.25.6 (safe)
- Maintained compatibility with all existing functionality
- No breaking changes to drizzle-kit or other tools

## Verification
```bash
npm audit                    # Shows 0 vulnerabilities
npm list esbuild            # Shows all dependencies use 0.25.6
npx esbuild --version       # Confirms 0.25.6
npx drizzle-kit --help      # Confirms drizzle-kit still works
```

## References
- [GitHub Security Advisory](https://github.com/advisories/GHSA-67mh-4wv8-2f99)
- Fixed in esbuild v0.25.0+
- CVE: esbuild ≤0.24.2 vulnerability