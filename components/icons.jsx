/* global React */

function IconArrow({ size = 13, stroke = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"/>
    </svg>
  );
}

function IconArrowSmall({ size = 11, stroke = 1.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"/>
    </svg>
  );
}

function IconClose({ size = 16, stroke = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"/>
    </svg>
  );
}

function IconCheck({ size = 10, stroke = 1.8 }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" width={size} height={size}>
      <path d="M2.5 7L6 10L11.5 4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconBack({ size = 14, stroke = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M11 7H3M3 7L7 3M3 7L7 11" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconPlus({ size = 13, stroke = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

function IconTick({ size = 15, stroke = 1.6 }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width={size} height={size}>
      <path d="M2 8.5L6 12L14 4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

Object.assign(window, { IconArrow, IconArrowSmall, IconClose, IconCheck, IconBack, IconPlus, IconTick });
