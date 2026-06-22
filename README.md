# Module 1 - Activity 2 - JavaScript Fundamentals

Before we start React, you need solid JavaScript. React is *just* JavaScript:
components are functions, props are objects, and lists are rendered with
`.map()`. This activity walks through every fundamental you'll lean on.

You'll implement a set of small functions, each practicing one concept. The
tests tell you exactly what each function should do.

## What to do

### 1. Fill in your details

Open `student.json` and fill in **every** field:

```json
{
  "classCode": "6APSI",
  "fullName": "Juan Dela Cruz",
  "studentNumber": "2026-12345",
  "studentEmail": "juan.delacruz@hau.edu.ph",
  "personalEmail": "juan@example.com",
  "githubAccount": "juandelacruz"
}
```

This file **is** committed to your repo (unlike a `.env`), so the tests can
read it. Don't put passwords or secrets here.

> **Keep `student.json` identical across all your activities.** The autograder
> cross-checks these fields between your repos, and a mismatch (e.g. a different
> `classCode` in one activity) is flagged. The `classCode` must also match the
> one in your repo name.

### 2. Implement the exercises

Each file in [`src/`](src/) has a topic, a pointer into the concepts guide, and
functions with a `// TODO`. Replace each TODO with working code so its tests
pass. When a concept is new, read its section in
[`CONCEPTS.md`](CONCEPTS.md). It explains each idea (and how it shows up in
React) without giving away the exercises.

| File | Concepts |
| --- | --- |
| [`src/basics.js`](src/basics.js)     | variables, types, template literals, ternary, default parameters |
| [`src/functions.js`](src/functions.js) | arrow functions, higher-order functions, closures |
| [`src/strings.js`](src/strings.js)   | common string methods |
| [`src/logic.js`](src/logic.js)       | conditionals (if/else), loops, and `&&` / `\|\|` short-circuit |
| [`src/arrays.js`](src/arrays.js)     | `.map()`, `.filter()`, `.reduce()`, `.find()`, immutable add/remove, **key for React** |
| [`src/objects.js`](src/objects.js)   | destructuring, spread, rest, optional chaining |
| [`src/async.js`](src/async.js)       | Promises and `async` / `await` |
| [`src/oop.js`](src/oop.js)           | classes, methods, inheritance (`extends` / `super`) |

Don't change the function names or the `export`s. The tests import them by
name.

## Set up your repo

Before you write any code, create **your own copy** of this activity from the
template. Do not work in the template itself.

1. **Create from the template.** Open the template repo and click
   **Use this template → Create a new repository**.
2. **Set the owner to the course org.** Under *Owner*, choose the **`HAU-6APSI`
   course org**, **not** your personal account.
3. **Name it by the convention** `m<module>a<activity>-<classcode>-<yourname>`.
   For this activity that's **`m1a2-<classcode>-yourname`** (e.g.
   `m1a2-1234-juandelacruz`). The `<classcode>` must match the one you put in
   `student.json`.
4. **Make it Private.** Set *Visibility* to **Private** so classmates can't see
   your work.

Then clone **your** new repo and work there:

```bash
git clone https://github.com/HAU-6APSI/m1a2-<classcode>-yourname.git
cd m1a2-<classcode>-yourname
```

## Running the tests

Install dependencies once:

```bash
npm install
```

Then run the tests:

```bash
npm test
```

Run them in watch mode while you work, so they re-run on every save:

```bash
npm run test:watch
```

Each test you pass is a point. Work through them one file at a time; green is
the goal.

> **Write your code in `src/` only.** The files in `test/` are how your work is
> graded; leave them as they are.

## Experimenting (the playground)

Tests are great for grading, but sometimes you just want to *run* a function and
see what it prints. That's what [`playground.js`](playground.js) is for:

```bash
npm start
```

It calls your functions and logs the results. Edit a function in `src/`, run
`npm start` again, and watch the output change. Nothing in `playground.js` is
graded, so experiment freely.

## Confirm your submission

Your repo **is** your submission, so there is nothing to upload anywhere.
**Pushing your work is how you submit it.** When your tests pass locally,
**commit and push**:

```bash
git add -A
git commit -m "Activity 2 complete"
git push
```

Pushing triggers the **Autograde** workflow on GitHub. Confirm your submission
landed:

1. Open your repo on GitHub and click the **Actions** tab.
2. Open the latest **Autograde** run and confirm the green ✅ check and the
   "N / N tests passed" summary.
