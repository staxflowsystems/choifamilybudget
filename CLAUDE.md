# Choi Family Budget — Bilingual Financial Planning App

**Purpose:** Complete family financial planning tool using Dave Ramsey's Debt Snowball method, fully bilingual (English/Korean).

**Status:** ✅ Functional — All core features implemented and tested

---

## Quick Start

```bash
cd /Users/richchoi/choifamilybudget
python3 app.py
# Navigate to http://127.0.0.1:5000
# Login with password: "choi"
```

---

## Architecture

### Tech Stack
- **Backend:** Flask (Python) + SQLAlchemy ORM + SQLite
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Authentication:** Flask-Login with password protection

### Project Structure
```
choifamilybudget/
├── app.py                 # Flask app, routes, login system
├── config.py              # Configuration (password, db path)
├── models.py              # Database models (currently unused)
├── templates/
│   ├── login.html         # Login page
│   └── dashboard.html     # Main app interface
└── static/
    ├── app.js             # All business logic, translations, calculations
    └── style.css          # Dark theme styling
```

---

## Core Features

### 1. Budget Tab (Panel 0)
- Monthly income inputs: Dad's income + Other income
- 6 essential expenses: Rent, Utilities, Insurance, Phone, Mom's allowance, Misc
- Real-time calculation of surplus/deficit
- Submit button triggers recalc()

### 2. Debts Tab (Panel 1)
- Add/remove debts dynamically with JavaScript
- Fields per debt: Name, Balance, Min Monthly Payment
- No interest rate field (removed per user request)
- Mark debts as "Paid Off" to exclude from calculations
- Auto-updates summary on input changes

### 3. Summary Tab (Panel 2)
- Income breakdown (Dad + Other)
- Expense breakdown with percentages
- Debt list with monthly minimum payments
- Calculates money left after expenses AND debt payments

### 4. Snowball Tab (Panel 3)
- Educational content about Dave Ramsey's method
- Shows debts sorted smallest to largest
- Displays payoff timeline and total interest saved
- Motivational messaging about debt elimination

### 5. Your Plan Tab (Panel 4)
- Income → Essentials → Available Money calculation
- Shows total min debt payments
- Calculates extra available for debt payoff
- Lists all debts in snowball order
- Shows VOO investment amount after debt payoff

### 6. Debt Free Plan Tab (Panel 5) ⭐ **KEY FEATURE**
- **Baby Steps section** (static HTML, appears on page load)
  - Step 1: $1,000 Emergency Fund
  - Step 2: Pay Off All Debt (Snowball)
  - Step 3: Full Emergency Fund (3-6 months)
  - Step 4: Invest 15% of Income
  - Step 5+: Build Wealth
- Monthly income/expenses display
- Debt status indicator
- Monthly allocation breakdown:
  - 15% → Investing (VOO)
  - Remaining → Savings & Goals

### 7. Invest Tab (Panel 6)
- VOO Investment Calculator
  - Input: Monthly amount, Years
  - Output: Total invested, Projected growth (~10% annual)
- Savings Calculator
  - Input: Monthly save amount, Years
  - Output: Total saved, With ~7% returns
- Educational content about VOO, IRA, high-yield savings

---

## Translation System

### Structure (in app.js)
```javascript
var T = {
  en: { /* English translations */ },
  ko: { /* Korean translations */ }
};

var lang = 'en'; // Current language
```

### Key Objects
- `T.en.tabs` — All 7 tab names
- `T.en.savingsSteps` — Baby Steps (5 objects with icon, title, body, highlight)
- All UI strings organized by section (tip0title, snowballWorks, planTitle, etc.)

### Language Toggle
- Button in header toggles `lang` variable
- Calls `applyLang()` which updates all text content via `el(id).textContent = newText`
- Baby Steps updated via loop through `tx.savingsSteps` array

---

## Data Flow & Calculations

### Budget → Debt Summary → Plan Summary
1. **recalc()** — Triggered on any budget input change
   - Calculates total income, total essentials, leftover
   - Calls updateDebtSummary() to show debt impact
   - Calls updatePlanSummary() to sync across tabs

2. **updatePlanSummary()** — Syncs data to Summary and Your Plan tabs
   - Income - Essentials = Money Available
   - Subtracts total min debt payments
   - Shows extra available for aggressive debt payoff
   - Calculates VOO investment amount

3. **updateDebtFreePlan()** — Fills Debt Free Plan tab
   - Shows same income/expenses
   - Allocates: 15% to investing, remaining to savings/goals
   - Called when language changes or debts updated

### Debt Snowball Calculation
```
debts sorted by balance (smallest first)
for each debt:
  - Show payoff order
  - Calculate months to payoff with min payment
  - Rolling snowball: when debt paid, add its payment to next debt
```

---

## Key Functions (app.js)

| Function | Purpose |
|----------|---------|
| `applyLang()` | Update all UI text for current language, including Baby Steps |
| `recalc()` | Recalculate budget summary on any input change |
| `updatePlanSummary()` | Sync Budget/Debts data to Summary & Your Plan tabs |
| `updateDebtFreePlan()` | Fill Debt Free Plan tab with allocation breakdown |
| `renderDebtForms()` | Generate debt input forms dynamically |
| `readDebts()` | Parse debt form values into debts array |
| `updateDebtSummary()` | Calculate total debt & min payments |
| `renderSummaryDebts()` | Show debts in Summary tab with monthly payments |
| `renderPlanDebts()` | Show debts in Your Plan tab (snowball order) |
| `renderSnowball()` | Show payoff timeline with Dave Ramsey messaging |
| `renderInvestOptions()` | Generate investment education tiles (VOO, IRA, HYSA, etc.) |

---

## Important Implementation Details

### Baby Steps Display (SOLVED)
- **Problem (previous session):** Steps only appeared after toggling language
- **Solution:** Added static HTML to dashboard.html instead of dynamic rendering
- **How it works:**
  1. HTML structure exists on page load with IDs: `step1-title`, `step1-body`, `step1-highlight`, etc.
  2. `applyLang()` iterates through `tx.savingsSteps` array and updates textContent for each ID
  3. Steps appear immediately on page load, translate seamlessly on language toggle

### localStorage Integration
- Budget and debt data persist via `localStorage`
- Automatically saved on input changes
- Loaded on page refresh
- No backend database persistence needed (models.py unused)

### No Save Buttons on Debts
- Individual debt inputs auto-trigger `readDebts()` on change
- Removed explicit "Save Debt" buttons per user request
- Summary updates automatically

### Calculations
- All math done client-side in JavaScript
- Income and expenses always synced across all tabs
- Debt totals and payoff order calculated in real-time

---

## Testing Checklist

- ✅ Baby Steps appear on Debt Free Plan tab on initial page load
- ✅ All 5 Baby Steps display with correct English text
- ✅ Language toggle updates Baby Steps to Korean
- ✅ Budget changes trigger Summary and Your Plan updates
- ✅ Debts update correctly across all tabs
- ✅ Snowball order is correct (smallest to largest)
- ✅ VOO calculators work in Invest tab
- ✅ Login system protects app with password

---

## Common Tasks

### To update UI text
Edit the translation object in app.js:
```javascript
T = {
  en: { myString: "English text", ... },
  ko: { myString: "Korean text", ... }
}
```
Then in HTML, add `id="lbl-my-string"` and call `set('lbl-my-string', tx.myString)` in `applyLang()`.

### To add a new debt field
1. Update debt input form generation in `renderDebtForms()`
2. Update `readDebts()` to parse the new field
3. Update relevant display functions (`renderSummaryDebts()`, `renderPlanDebts()`)

### To modify Baby Steps
Edit `T.en.savingsSteps` and `T.ko.savingsSteps` arrays in app.js, or update the HTML in dashboard.html panel 5.

### To add a new calculator
1. Add input fields in Invest tab (panel 6)
2. Add calculation logic in a new function
3. Attach to button click event
4. Display result in designated div

---

## Login

- **URL:** http://127.0.0.1:5000/login
- **Password:** `choi` (set in config.py)
- **Session:** Persists via Flask-Login until logout

---

## Next Steps (if any)

- [ ] Connect to backend database for data persistence across devices
- [ ] Add PDF export for financial plan
- [ ] Mobile-responsive improvements
- [ ] Dark/light theme toggle
- [ ] Email export feature
- [ ] Multi-user support (different family members)

---

**Last Updated:** May 19, 2026
**Developer:** Rich (Meridian)
