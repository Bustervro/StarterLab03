# Lab 03 — Exploratory and White Box Testing

## 1. Exploratory testing (test the app BEFORE reading `App.tsx`)

**Charter:** Try the Counter buttons in different orders to see whether the displayed number changes as expected and whether Reset works from different values.

**Important:** Run the app, try the actions below, and fill in *Actual result* and *Pass/Fail* from what you really see.

| Action tried | Expected result | Actual result (fill in) | Pass/Fail (fill in) |
|---|---|---|---|
| Click Increment once from 0 | Count: 1 | | |
| Click Decrement once from 0 | Count: -1 | | |
| Click Increment twice, then Decrement from 0 | Count: 1 | | |
| Click Increment, then Reset from 0 | Count: 0 | | |
| Click Reset while already at 0 | Count: 0 | | |

## 2. White box code review

- **Starting count:** `useState(0)`, so the count begins at `0`.
- **Increment statement:** `setCount(count + 1)` runs when Increment is clicked.
- **Decrement statement:** `setCount(count - 1)` runs when Decrement is clicked.
- **Reset statement:** `setCount(0)` runs when Reset is clicked.
- **Branches/loops:** There are no explicit `if`, `switch`, or loop statements in `App.tsx`, so branch and loop coverage are not meaningful measures for this component.

## 3. Automated white box tests

The five Jest/React Testing Library tests are in `counter-app/src/App.test.tsx`:

1. Starts at 0 and renders three buttons
2. Increment changes 0 to 1
3. Decrement changes 0 to -1
4. Reset changes a nonzero count to 0
5. Multiple actions work in sequence, including an action after Reset

**Test run screenshot:** Add `screenshots/test-run.png` after running `npm test` inside `counter-app`.

## 4. Code coverage

Run `npm test -- --coverage` inside `counter-app` and copy the percentages actually printed in the terminal. Do not guess.

| Coverage type | Percentage from my test run |
|---|---|
| Statements | *Fill in from report* |
| Branches | *Fill in from report (may be N/A)* |
| Functions | *Fill in from report* |
| Lines | *Fill in from report* |

**Coverage screenshot:** Add `screenshots/coverage.png` after running the command.

**Coverage explanation:** These tests run the Increment, Decrement, and Reset handlers and check that the number displayed changes. If the coverage report says all statements were tested, no statements in `App.tsx` remained unexecuted. The component has no `if` conditions or loops, which is why the branch field may be missing or marked N/A. Even 100% coverage cannot prove every possible behavior is correct; tests still need to check meaningful results.

## 5. Exploratory versus white box testing

**Exploratory idea:** Press Reset when the count is already 0, to see what happens.

**White box idea:** Check Reset after changing the count to a nonzero value, because the source has a separate `setCount(0)` handler that must be exercised.

**What changed after reading code:** I could make sure I tested each state-changing handler rather than only trying random button clicks.

**Exploratory limitation:** I might miss code that I do not know exists.

**White box limitation:** Running every statement does not show that the whole app works correctly for users.

## AI transparency

AI assisted in drafting the test file and report structure. AI assisted with the test code and report structure. Exploratory observations, test execution, screenshots, and coverage measurements must be completed from an actual run.
