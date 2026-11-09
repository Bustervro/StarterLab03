# Lab 03 — Exploratory and White Box Testing

## 1. Exploratory Testing

**Goal:** Test the Counter app to see if the buttons change the number correctly.

| Action | Expected Result | Actual Result | Status |
|---|---|---|---|
| Click Increment once from 0 | Count: 1 | To check manually | Pending |
| Click Decrement once from 0 | Count: -1 | To check manually | Pending |
| Click Increment twice, then Decrement | Count: 1 | To check manually | Pending |
| Click Increment, then Reset | Count: 0 | To check manually | Pending |
| Click Reset when the count is already 0 | Count: 0 | To check manually | Pending |

## 2. White Box Testing

I reviewed the Counter app code. The starting number is 0.

- Increment adds 1.
- Decrement subtracts 1.
- Reset changes the number to 0.

The component has no explicit loops or conditional branches.

## 3. Automated Test Results

I ran the tests using Jest and React Testing Library.

| Test | Result |
|---|---|
| Starting count is 0 | PASS |
| Increment changes 0 to 1 | PASS |
| Decrement changes 0 to -1 | PASS |
| Reset changes a nonzero number to 0 | PASS |
| Multiple button clicks work correctly | PASS |

**Total: 5 tests passed, 0 failed.**

## 4. Code Coverage

| Coverage Type | Result |
|---|---|
| Statements | 100% |
| Branches | 100% |
| Functions | 100% |
| Lines | 100% |

All statements and functions in App.tsx were tested. No statements remained uncovered. Jest reported 100% branch coverage, but the component has no explicit conditional branches.

100% code coverage does not guarantee an application has no bugs.

## 5. Comparing Testing Methods

Exploratory testing means trying the app like a normal user without first looking at the code.

White box testing means reading the code and creating tests to check its behavior.

Exploratory testing can miss hidden code problems. White box testing can miss problems that users experience.

Both testing methods are useful because they help find different problems.

## 6. Conclusion

All five automated tests passed, and Jest reported 100% code coverage for App.tsx. The automated tests confirmed the starting count, button behavior, reset function, and multiple actions.

The manual exploratory testing results must be recorded separately.
