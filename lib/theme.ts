/**
 * EcoTrade Design System Theme Tokens & Guidelines Reference
 * 
 * Rules:
 * 1. Accessibility: All touch targets must be at least 48x48px.
 * 2. Contrast: Text contrast ratio against background minimum 4.5:1.
 * 3. Accent Rule: Always use dark text (#111827) on top of accent (#F59E0B) for high readability.
 * 4. Typography: Base font size is 16px (1rem). Never smaller than 16px.
 */

export const theme = {
  colors: {
    primary: {
      default: "#16A34A",
      hover: "#15803D",
      light: "#DCFCE7",
    },
    secondary: {
      default: "#0D9488",
      hover: "#0F766E",
    },
    accent: {
      default: "#F59E0B",
      hover: "#D97706",
      textOnAccent: "#111827", // CRITICAL: Dark text on accent background
    },
    danger: {
      default: "#DC2626",
      hover: "#B91C1C",
    },
    neutral: {
      bg: "#F9FAFB",
      text: "#111827",
      border: "#E5E7EB",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontBody: "var(--font-inter), system-ui, sans-serif",
    fontHeading: "var(--font-poppins), system-ui, sans-serif",
    baseSize: "16px",
  },
  ux: {
    minTouchTargetSize: "48px",
    borderRadiusCard: "16px",
    borderRadiusButton: "12px",
  },
} as const;

export type Theme = typeof theme;
