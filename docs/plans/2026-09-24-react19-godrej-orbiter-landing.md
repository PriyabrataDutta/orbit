# React 19 Godrej Orbiter Landing & Login Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the static `index.html` Godrej Orbiter landing page and sign-in screen into a modular, high-performance React 19 application with custom hooks and responsive visual design.

**Architecture:** A Vite + React 19 + TypeScript application organized into atomic visual components (`Header`, `Hero`, `ValueProps`, `IndiaMapVisual`, `LoginForm`, `Stats`, `Footer`) powered by a custom `useAuthForm` hook for login state, validation, password visibility toggle, and SSO handling. Styling uses scoped CSS with CSS variable tokens to preserve exact visual fidelity and performance.

**Tech Stack:** React 19, Vite, TypeScript, Vanilla CSS (CSS Custom Properties), SVG Graphics

---

### Task 1: Project Initialization & Tooling Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`

**Step 1: Scaffold Vite + React 19 + TypeScript project**
Initialize a Vite app in `./` with React 19 dependencies (`react@^19.0.0`, `react-dom@^19.0.0`, `@types/react@^19.0.0`).

**Step 2: Setup global typography and design system in `src/index.css`**
Import Google Fonts (`Plus Jakarta Sans:400,500,600,700,800` and `Allura`). Define CSS custom variables for colors (`--indigo-900`, `--violet-600`, `--card`, `--font`, etc.) and reset rules matching `index.html`.

**Step 3: Verify initial build**
Run: `npm run build` (or `npx vite build`)
Expected: Successful compilation without errors.

---

### Task 2: Custom Hook Implementation (`useAuthForm`)

**Files:**
- Create: `src/types/auth.ts`
- Create: `src/hooks/useAuthForm.ts`

**Step 1: Define TypeScript contracts in `src/types/auth.ts`**
```typescript
export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthFormState {
  values: LoginFormValues;
  showPassword: boolean;
  isSubmitting: boolean;
  errorMessage: string | null;
}
```

**Step 2: Implement custom hook in `src/hooks/useAuthForm.ts`**
Implement state management and handlers for:
- Input changes (`handleChange`)
- Password visibility toggle (`toggleShowPassword`)
- Form validation and submission handling (`handleSubmit`)
- SSO initiation (`handleSsoLogin`)

**Step 3: Verify hook logic**
Verify typing, state updates, and export completeness.

---

### Task 3: Interactive Visual & Map Component (`IndiaMapVisual`)

**Files:**
- Create: `src/components/IndiaMapVisual.tsx`
- Create: `src/components/IndiaMapVisual.css`

**Step 1: Build SVG map and flow animations in `IndiaMapVisual.tsx`**
Extract and componentize:
- Vector paths for India's geographic map outline
- SVG glow & blur filters (`#glow`, `#softglow`)
- Animated data flow lines (`.flowline` CSS keyframes)
- Regional hub node markers (North, South, East, West, HO)
- Data source chips (`SAP`, `Microsoft SharePoint`, `Salesforce`, `Azure Synapse`, `Azure Cloud`)

**Step 2: Add styles and keyframes in `IndiaMapVisual.css`**
Include `@keyframes pulse` and `@keyframes flow` animation rules with `prefers-reduced-motion` media queries for accessibility.

---

### Task 4: Login Form Component (`LoginForm`)

**Files:**
- Create: `src/components/LoginForm.tsx`
- Create: `src/components/LoginForm.css`

**Step 1: Build `LoginForm.tsx` using `useAuthForm`**
Componentize:
- Brand header ("Orbiter for Godrej")
- Corporate email input (`name@godrej.com`) with icon
- Password input with accessible show/hide eye toggle button
- "Remember me" checkbox and "Forgot password?" link
- Primary "Sign In" button with loading state support
- "Sign in with Microsoft (SSO)" button
- Trust badges (*MFA Protected*, *Role-Based Access*, *Zero Trust Security*)
- Footer links (*IT Support*, *Privacy*, *Terms*)

**Step 2: Style form in `LoginForm.css`**
Implement sleek white glassmorphic card container, focus-within ring highlights, and responsive column scaling.

---

### Task 5: Topbar, ValueProps, Stats & Footer Components

**Files:**
- Create: `src/components/Topbar.tsx`
- Create: `src/components/ValueProps.tsx`
- Create: `src/components/Stats.tsx`
- Create: `src/components/Footer.tsx`

**Step 1: Implement `Topbar.tsx`**
Header with Godrej logo SVG/base64 asset, Orbiter badge, tagline, and responsive row flexbox.

**Step 2: Implement `ValueProps.tsx`**
Kicker headline, display title, lede statement, and 4 feature items with custom SVG circular icons.

**Step 3: Implement `Stats.tsx`**
4 responsive metric cards:
1. 500M+ Enterprise Records
2. 100s of Business Docs
3. Role-Based AI
4. PAN India Intelligence

**Step 4: Implement `Footer.tsx`**
Copyright notice and responsible AI navigation links.

---

### Task 6: Main Layout Assembly & Final Verification

**Files:**
- Modify: `src/App.tsx`
- Create/Modify: `src/App.css`

**Step 1: Assemble all components in `App.tsx`**
Combine `Hero` container, `Topbar`, `ValueProps`, `IndiaMapVisual`, `LoginForm`, `Stats`, and `Footer` in clean, semantic layout wrapper.

**Step 2: Run build and verify completeness**
Run: `npm run build`
Expected: Zero TypeScript or bundling errors. Production-ready bundle generated.

---

## Execution Handoff

After reviewing this plan, you can choose how to proceed:

1. **Subagent-Driven (this session)** - Execute task by task using subagents with step-by-step verification.
2. **Parallel Session** - Execute using a separate agent session with `executing-plans`.
