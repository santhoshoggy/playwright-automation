# Tai-Shop Manual Test Cases

## Project information

| Field | Value |
| --- | --- |
| Application | Tai-Shop |
| Type | E-commerce web application |
| Automation | Playwright Test + TypeScript |
| Environment | Demo/Test |
| Base URL | `https://tai-shop.razvanvancea.ro/` |

## Test inventory

| ID | Module | Scenario | Priority | Automation state |
| --- | --- | --- | --- | --- |
| TC_001 | Smoke | Application is accessible | P0 | Automated |
| TC_002 | Home | Home page loads | P0 | Automated |
| TC_003 | Login | Login elements display | P0 | Automated |
| TC_004 | Login | Valid login | P0 | Automated |
| TC_005 | Login | Invalid login | P1 | Automated |
| TC_006 | Login | Empty submission validation | P1 | Automated |
| TC_007 | Login | Invalid email format | P1 | Automated |
| TC_008 | Login | Password is masked | P1 | Automated |
| TC_009 | Auth | Successful-login navigation | P0 | Automated |
| TC_010 | Auth | Logout | P0 | Automated |
| TC_011 | Navigation | Main navigation links | P1 | Automated |
| TC_012 | Navigation | Return to home | P1 | Pending locator discovery |
| TC_013 | Products | Product listing displays | P0 | Pending locator discovery |
| TC_014 | Products | Product cards contain core details | P1 | Pending locator discovery |
| TC_015 | Products | Product information is readable | P1 | Pending locator discovery |
| TC_016 | Products | Product detail page opens | P0 | Pending locator discovery |
| TC_017 | Products | Product image displays | P2 | Pending locator discovery |
| TC_018 | Products | Product price displays | P1 | Pending locator discovery |
| TC_019 | Products | Product description displays | P1 | Pending locator discovery |
| TC_020 | Search | Product search works | P0 | Pending locator discovery |
| TC_021 | Search | Valid keyword returns relevant results | P0 | Pending locator discovery |
| TC_022 | Search | Invalid keyword shows no-result state | P1 | Pending locator discovery |
| TC_023 | Search | Empty search behavior | P2 | Pending locator discovery |
| TC_024 | Products | Category filtering | P1 | Pending locator discovery |
| TC_025 | Products | Sorting | P1 | Pending locator discovery |
| TC_026 | Products | Pagination | P1 | Pending locator discovery |
| TC_027 | Cart | Empty cart state | P0 | Pending locator discovery |
| TC_028 | Cart | Add one product | P0 | Pending locator discovery |
| TC_029 | Cart | Added product details | P0 | Pending locator discovery |
| TC_030 | Cart | Initial quantity | P1 | Pending locator discovery |
| TC_031 | Cart | Increase quantity | P1 | Pending locator discovery |
| TC_032 | Cart | Decrease quantity | P1 | Pending locator discovery |
| TC_033 | Cart | Remove product | P0 | Pending locator discovery |
| TC_034 | Cart | Subtotal calculation | P0 | Pending locator discovery |
| TC_035 | Cart | Add multiple products | P1 | Pending locator discovery |
| TC_036 | Cart | Cart persistence | P1 | Pending locator discovery |
| TC_037 | Checkout | Open checkout | P0 | Pending locator discovery |
| TC_038 | Checkout | Required checkout fields display | P0 | Pending locator discovery |
| TC_039 | Checkout | Valid checkout | P0 | Pending safe test data |
| TC_040 | Checkout | Required field validation | P0 | Pending locator discovery |
| TC_041 | Checkout | Invalid email validation | P1 | Pending locator discovery |
| TC_042 | Checkout | Invalid phone validation | P1 | Pending locator discovery |
| TC_043 | Checkout | Invalid address validation | P1 | Pending locator discovery |
| TC_044 | Checkout | Order summary | P0 | Pending locator discovery |
| TC_045 | Checkout | Total calculation | P0 | Pending locator discovery |
| TC_046 | Checkout | Order confirmation | P0 | Pending safe test data |
| TC_047 | Session | Refresh after login | P1 | Pending demo credentials |
| TC_048 | Session | Session persistence | P1 | Pending demo credentials |
| TC_049 | Session | Unauthorized access | P1 | Pending route discovery |
| TC_050 | Regression | End-to-end purchase flow | P0 | Pending prerequisites |

## Detailed executed cases

### TC_001 — Application is accessible

**Precondition:** The base URL is available.

1. Open a browser.
2. Navigate to the Tai-Shop base URL.
3. Wait for the DOM to load.

**Expected:** The server returns a successful response and the application loads without an application-level error.

### TC_002 — Home page loads

1. Navigate to the base URL.
2. Wait for the DOM to load.
3. Verify the URL belongs to Tai-Shop.
4. Verify the page has a title.

**Expected:** The Tai-Shop home page is displayed.

### TC_003 — Login page elements display

1. Open the base URL.
2. Verify the Email field is visible.
3. Verify the Password field is visible.
4. Verify the Sign In button is visible.

**Expected:** The login controls are usable.

**Verified locators:** Email `#email`; Password `#password`; Sign In `#submitLoginBtn`.

## Rules for pending cases

Before automating a pending case, inspect the live application and record its real accessible locator or stable `id`/`data-testid`. Do not invent routes, messages, checkout fields, credentials, or behavior. Use only non-personal demo credentials in `.env`.
