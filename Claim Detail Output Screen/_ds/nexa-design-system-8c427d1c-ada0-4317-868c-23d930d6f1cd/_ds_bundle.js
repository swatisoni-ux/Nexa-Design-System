/* @ds-bundle: {"format":4,"namespace":"NexaDesignSystem_8c427d","components":[{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Dropdown","sourcePath":"components/data-display/Dropdown.jsx"},{"name":"DropdownItem","sourcePath":"components/data-display/Dropdown.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"CountBadge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data-display/Avatar.jsx":"14006122889f","components/data-display/Card.jsx":"06f7616790f0","components/data-display/Dropdown.jsx":"32b9abcd36af","components/feedback/Badge.jsx":"02c0f231e93c","components/feedback/Toast.jsx":"52f9adbd5b45","components/forms/Button.jsx":"3429fbc524f7","components/forms/Input.jsx":"097e3afce022","components/forms/Select.jsx":"4155cc9b88d2","components/navigation/NavItem.jsx":"0bd82a51fa98","components/navigation/Tabs.jsx":"04cba6000423","ui_kits/claims-workspace/App.jsx":"66e5215323a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NexaDesignSystem_8c427d = window.NexaDesignSystem_8c427d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Avatar.jsx
try { (() => {
function Avatar({
  src,
  initials,
  alt,
  size = 36
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      flex: '0 0 auto',
      background: 'var(--sem-surface-avatar)',
      color: 'var(--sem-text-avatar)',
      fontWeight: 600,
      fontSize: size * 0.36,
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Dropdown.jsx
try { (() => {
function Dropdown({
  open,
  anchorStyle,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      background: 'var(--sem-surface-primary)',
      borderRadius: 16,
      boxShadow: 'var(--sem-elevation-floating)',
      overflow: 'hidden',
      zIndex: 200,
      animation: 'om-pop-in 150ms cubic-bezier(0,0,0.2,1) both',
      ...anchorStyle
    }
  }, children);
}
function DropdownItem({
  icon,
  danger,
  onClick,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      cursor: 'pointer',
      fontSize: 14,
      fontFamily: 'var(--font-sans)',
      color: danger ? 'var(--sem-status-error-fg)' : 'var(--sem-text-primary)',
      background: hover ? danger ? 'var(--sem-status-error-bg)' : 'var(--sem-action-secondary-hover)' : 'transparent'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 18,
      color: danger ? 'var(--sem-status-error-fg)' : 'var(--sem-text-tertiary)'
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Dropdown, DropdownItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const PAL = {
  green: {
    bg: 'var(--sem-status-success-bg)',
    fg: 'var(--sem-status-success-fg)'
  },
  amber: {
    bg: 'var(--sem-status-warning-bg)',
    fg: 'var(--sem-status-warning-fg)'
  },
  red: {
    bg: 'var(--sem-status-error-bg)',
    fg: 'var(--sem-status-error-fg)'
  },
  blue: {
    bg: 'var(--sem-status-info-bg)',
    fg: 'var(--sem-status-info-fg)'
  },
  violet: {
    bg: 'var(--sem-status-review-bg)',
    fg: 'var(--sem-status-review-fg)'
  },
  gray: {
    bg: 'var(--sem-status-neutral-bg)',
    fg: 'var(--sem-status-neutral-fg)'
  }
};
function Badge({
  tone = 'gray',
  children
}) {
  const p = PAL[tone] || PAL.gray;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 11px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      background: p.bg,
      color: p.fg,
      fontFamily: 'var(--font-sans)'
    }
  }, children);
}
function CountBadge({
  active,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 22,
      height: 22,
      padding: '0 8px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      background: active ? 'var(--sem-action-primary)' : 'var(--sem-surface-chip)',
      color: active ? 'var(--sem-text-on-accent)' : 'var(--sem-text-tertiary)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge, CountBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  text,
  icon = 'check_circle'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 22px',
      borderRadius: 14,
      background: 'var(--sem-surface-inverted)',
      color: 'var(--sem-text-on-inverted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      boxShadow: 'var(--sem-elevation-overlay)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 20,
      color: 'var(--sem-icon-on-inverted)'
    }
  }, icon), text);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const SIZES = {
  md: {
    h: 38,
    pad: '0 18px',
    font: 13.5
  },
  sm: {
    h: 32,
    pad: '0 14px',
    font: 12.5
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  disabled,
  children,
  onClick
}) {
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    height: s.h,
    padding: s.pad,
    border: 'none',
    borderRadius: 11,
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 100ms cubic-bezier(0.2,0,0,1)'
  };
  const variants = {
    primary: {
      background: 'var(--sem-action-primary)',
      color: 'var(--sem-text-on-accent)'
    },
    secondary: {
      background: 'var(--sem-surface-primary)',
      color: 'var(--sem-text-primary)',
      boxShadow: 'inset 0 0 0 1px var(--sem-border-interactive)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--sem-text-secondary)'
    },
    destructive: {
      background: 'var(--sem-action-destructive)',
      color: 'var(--sem-text-on-accent)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--sem-action-primary-hover)',
    secondary: 'var(--sem-action-secondary-hover)',
    ghost: 'var(--sem-action-secondary-hover)',
    destructive: 'var(--sem-action-destructive)'
  };
  const style = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? {
      background: hoverBg[variant]
    } : {})
  };
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 18
    }
  }, icon) : null, children);
}
function IconButton({
  icon,
  title,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    title: title,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 40,
      height: 40,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: active ? 'var(--sem-text-link)' : 'var(--sem-text-secondary)',
      background: hover ? 'var(--sem-action-secondary-hover)' : active ? 'var(--sem-surface-selected)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 20
    }
  }, icon));
}
Object.assign(__ds_scope, { Button, IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
const STATUS_TONE = {
  New: 'gray',
  'Not Started': 'gray',
  'In Progress': 'blue',
  'On Hold': 'amber',
  'Pending Clinical': 'amber',
  'Findings Draft': 'violet',
  'Ready to Submit': 'green',
  Completed: 'green'
};
function slaTone(days) {
  if (days < 0) return {
    tone: 'red',
    label: Math.abs(days) + 'd overdue'
  };
  if (days <= 2) return {
    tone: 'amber',
    label: days === 0 ? 'Due today' : days + 'd left'
  };
  return {
    tone: 'green',
    label: days + 'd left'
  };
}
function Card({
  item,
  isAudit,
  pinned,
  onTogglePin,
  onPrimary
}) {
  const sla = slaTone(item.days);
  const typeLabel = isAudit ? item.auditType : item.reviewType;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--sem-text-primary)',
      background: 'var(--sem-surface-primary)',
      borderRadius: 16,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxShadow: pinned ? 'var(--sem-elevation-raised)' : 'var(--sem-elevation-resting)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: isAudit ? 'flex-start' : 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 200,
      flex: '1 1 200px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onTogglePin,
    title: pinned ? 'Unpin' : 'Pin',
    style: {
      width: 34,
      height: 34,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: pinned ? 'var(--sem-surface-selected)' : 'transparent',
      boxShadow: pinned ? 'none' : 'inset 0 0 0 1px var(--sem-border-interactive)',
      color: pinned ? 'var(--sem-text-link)' : 'var(--sem-text-tertiary)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 18,
      fontVariationSettings: pinned ? "'FILL' 1" : "'FILL' 0"
    }
  }, "push_pin")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--sem-text-primary)',
      letterSpacing: '-0.01em'
    }
  }, item.id), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--sem-text-tertiary)'
    }
  }, isAudit ? 'Audit Type' : 'Review Type'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--sem-text-secondary)'
    }
  }, typeLabel)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 420px',
      minWidth: 300,
      display: 'grid',
      gap: '12px 20px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px,1fr))'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Due Date"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: `var(--sem-status-${sla.tone === 'red' ? 'error' : sla.tone === 'amber' ? 'warning' : 'success'}-fg)`
    }
  }, item.due)), /*#__PURE__*/React.createElement(Field, {
    label: "Claim #"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--sem-text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, item.claim)), /*#__PURE__*/React.createElement(Field, {
    label: "Provider"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--sem-text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.provider)), /*#__PURE__*/React.createElement(Field, {
    label: "Claim Paid"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-0.03em',
      whiteSpace: 'nowrap'
    }
  }, item.paid))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-end',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: STATUS_TONE[item.status] || 'gray'
  }, item.status), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: sla.tone
  }, sla.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    icon: isAudit ? 'gavel' : 'play_arrow',
    onClick: onPrimary
  }, isAudit ? 'Process Audit' : 'Begin Review')));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--sem-text-tertiary)',
      whiteSpace: 'nowrap'
    }
  }, label), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  value,
  onChange,
  placeholder,
  icon = 'search',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 19,
      color: 'var(--sem-text-tertiary)'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      width: '100%',
      height: 40,
      padding: icon ? '0 14px 0 42px' : '0 14px',
      border: 'none',
      boxShadow: 'inset 0 0 0 1px var(--sem-border-interactive)',
      borderRadius: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      background: 'var(--sem-surface-field)',
      color: 'var(--sem-text-primary)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  value,
  onChange,
  options
}) {
  return /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      height: 36,
      border: 'none',
      boxShadow: 'inset 0 0 0 1px var(--sem-border-interactive)',
      borderRadius: 10,
      background: 'var(--sem-surface-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      padding: '0 32px 0 12px',
      color: 'inherit',
      cursor: 'pointer',
      appearance: 'none',
      WebkitAppearance: 'none',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 16px) 50%,calc(100% - 11px) 50%',
      backgroundSize: '5px 5px,5px 5px',
      backgroundRepeat: 'no-repeat'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function NavItem({
  icon,
  label,
  active,
  disabled,
  collapsed,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: disabled ? undefined : onClick,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 40,
      padding: collapsed ? '0 10px' : '0 12px',
      margin: '2px 0',
      borderRadius: 10,
      fontSize: 13.5,
      position: 'relative',
      justifyContent: collapsed ? 'center' : 'flex-start',
      cursor: disabled ? 'not-allowed' : 'default',
      fontFamily: 'var(--font-sans)',
      color: active ? 'var(--sem-text-link)' : 'var(--sem-text-disabled)',
      background: active ? 'var(--sem-surface-selected)' : hover ? 'var(--sem-action-secondary-hover)' : 'transparent',
      fontWeight: active ? 600 : 400
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 21,
      flex: '0 0 auto',
      color: active ? 'var(--sem-text-link)' : 'var(--sem-text-disabled)'
    }
  }, icon), !collapsed ? /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      boxShadow: 'inset 0 -1px 0 var(--sem-border-default)'
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange(it.value),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: on ? 'var(--sem-text-primary)' : 'var(--sem-text-tertiary)',
        fontWeight: on ? 600 : 500,
        borderBottom: on ? '3px solid var(--sem-action-primary)' : '3px solid transparent',
        marginBottom: -1
      }
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      className: "ico",
      style: {
        fontSize: 20
      }
    }, it.icon) : null, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 22,
        height: 22,
        padding: '0 8px',
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--sem-action-primary)' : 'var(--sem-surface-chip)',
        color: on ? 'var(--sem-text-on-accent)' : 'var(--sem-text-tertiary)'
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/claims-workspace/App.jsx
try { (() => {
const MRR = [{
  id: 'MR-2026-004821',
  status: 'In Progress',
  reviewType: 'DRG',
  days: -1,
  due: 'Jul 22, 2026',
  claim: 'CLM-88342119',
  paid: '$18,240.00',
  provider: 'Mercy General Hospital',
  member: 'R. Okafor',
  pinned: true
}, {
  id: 'MR-2026-004833',
  status: 'In Progress',
  reviewType: 'Itemized Bill',
  days: 1,
  due: 'Jul 24, 2026',
  claim: 'CLM-88344201',
  paid: '$6,905.50',
  provider: "St. Luke's Medical Center",
  member: 'T. Nguyen',
  pinned: true
}, {
  id: 'MR-2026-004840',
  status: 'New',
  reviewType: 'Clinical Validation',
  days: 3,
  due: 'Jul 26, 2026',
  claim: 'CLM-88347756',
  paid: '$2,310.00',
  provider: 'Riverside Community Hosp.',
  member: 'A. Delgado'
}, {
  id: 'MR-2026-004855',
  status: 'In Progress',
  reviewType: 'DRG',
  days: 4,
  due: 'Jul 27, 2026',
  claim: 'CLM-88349910',
  paid: '$41,780.25',
  provider: 'Northpoint Health System',
  member: 'J. Carter'
}, {
  id: 'MR-2026-004861',
  status: 'On Hold',
  reviewType: 'DRG',
  days: 6,
  due: 'Jul 29, 2026',
  claim: 'CLM-88351442',
  paid: '$9,145.00',
  provider: 'Valley Presbyterian',
  member: 'M. Rossi'
}];
const AUDIT = [{
  id: 'AUD-77-091204',
  auditType: 'DRG Validation',
  status: 'Findings Draft',
  days: 0,
  due: 'Jul 23, 2026',
  claim: 'CLM-88330045',
  paid: '$34,900.00',
  provider: 'Mercy General Hospital',
  member: 'D. Foster',
  pinned: true
}, {
  id: 'AUD-77-091188',
  auditType: 'Clinical Chart',
  status: 'In Progress',
  days: 2,
  due: 'Jul 25, 2026',
  claim: 'CLM-88329901',
  paid: '$21,050.00',
  provider: 'Highland Park Medical',
  member: 'S. Bright',
  pinned: true
}, {
  id: 'AUD-77-091247',
  auditType: 'Short Stay',
  status: 'Pending Clinical',
  days: -2,
  due: 'Jul 21, 2026',
  claim: 'CLM-88328815',
  paid: '$8,760.00',
  provider: 'Riverside Community Hosp.',
  member: 'N. Vega'
}, {
  id: 'AUD-77-091233',
  auditType: 'Readmission',
  status: 'Not Started',
  days: 5,
  due: 'Jul 28, 2026',
  claim: 'CLM-88331277',
  paid: '$15,300.00',
  provider: "St. Luke's Medical Center",
  member: 'P. Grant'
}];
const NAV = ['Dashboard', 'Provider Portal', 'Nexa Clinical', 'Work Queue', 'My Inventory', 'Refund Requests', 'Insights & Analytics', 'Administration'];
const NAV_ICON = {
  'Dashboard': 'dashboard',
  'Provider Portal': 'apartment',
  'Nexa Clinical': 'clinical_notes',
  'Work Queue': 'list_alt',
  'My Inventory': 'inventory_2',
  'Refund Requests': 'currency_exchange',
  'Insights & Analytics': 'insights',
  'Administration': 'settings'
};
function App() {
  const {
    Tabs,
    Card,
    Input,
    Select,
    NavItem,
    Avatar,
    Dropdown,
    DropdownItem,
    IconButton,
    Button
  } = window.NexaDesignSystem_8c427d;
  const [theme, setTheme] = React.useState('light');
  const [tab, setTab] = React.useState('mrr');
  const [sort, setSort] = React.useState('sla');
  const [search, setSearch] = React.useState('');
  const [pins, setPins] = React.useState({});
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [navCollapsed, setNavCollapsed] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  function showToast(msg) {
    setToast(msg);
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => setToast(null), 2200);
  }
  function isPinned(item) {
    const o = pins[item.id];
    return o === undefined ? !!item.pinned : o;
  }
  function togglePin(item) {
    const cur = isPinned(item);
    setPins(p => ({
      ...p,
      [item.id]: !cur
    }));
    showToast(!cur ? 'Assignment pinned' : 'Assignment unpinned');
  }
  const isAudit = tab === 'audit';
  let list = (isAudit ? AUDIT : MRR).filter(c => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return [c.id, c.claim, c.provider, c.member].some(v => v && ('' + v).toLowerCase().includes(q));
  });
  const cmp = {
    sla: (a, b) => a.days - b.days,
    due: (a, b) => a.days - b.days,
    amount: (a, b) => parseFloat(b.paid.replace(/[^0-9.]/g, '')) - parseFloat(a.paid.replace(/[^0-9.]/g, ''))
  }[sort];
  list = [...list].sort(cmp);
  const pinned = list.filter(isPinned);
  const remaining = list.filter(c => !isPinned(c));
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
      color: 'var(--sem-text-primary)',
      background: 'var(--sem-surface-canvas)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flex: '0 0 64px',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 24px',
      background: 'var(--sem-surface-primary)',
      boxShadow: '0 1px 0 var(--sem-border-default)',
      zIndex: 100,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: 'var(--sem-action-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sem-text-on-accent)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16
    }
  }, "N"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-0.03em'
    }
  }, "Nexa")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 560,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Search Claim #, Audit ID, or MR Request ID"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: '0 0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: theme === 'dark' ? 'light_mode' : 'dark_mode',
    title: "Toggle theme",
    onClick: () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "notifications",
    title: "Notifications",
    onClick: () => showToast('3 notifications · all marked read')
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setProfileOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: 'none',
      background: 'transparent',
      padding: '4px 10px 4px 4px',
      borderRadius: 999,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/demo-avatar-dana-lewis.png",
    alt: "Dana Lewis, RN",
    size: 36
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Dana Lewis, RN"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--sem-text-tertiary)'
    }
  }, "Clinical Auditor")), /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 18,
      color: 'var(--sem-text-tertiary)'
    }
  }, "expand_more")), /*#__PURE__*/React.createElement(Dropdown, {
    open: profileOpen,
    anchorStyle: {
      top: 52,
      right: 0,
      width: 208
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      boxShadow: 'inset 0 -1px 0 var(--sem-border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Dana Lewis, RN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--sem-text-tertiary)'
    }
  }, "dana.lewis@nexa.health")), /*#__PURE__*/React.createElement(DropdownItem, {
    icon: "person",
    onClick: () => setProfileOpen(false)
  }, "Profile"), /*#__PURE__*/React.createElement(DropdownItem, {
    icon: "logout",
    danger: true,
    onClick: () => setProfileOpen(false)
  }, "Logout")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: '0 0 auto',
      background: 'var(--sem-surface-primary)',
      boxShadow: 'inset -1px 0 0 var(--sem-border-default)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      width: navCollapsed ? 64 : 240,
      transition: 'width 250ms var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setNavCollapsed(c => !c),
    style: {
      height: 48,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '0 20px',
      color: 'var(--sem-text-secondary)',
      flex: '0 0 auto',
      justifyContent: navCollapsed ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 22
    }
  }, navCollapsed ? 'menu' : 'menu_open'), !navCollapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sem-text-tertiary)'
    }
  }, "Collapse")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '6px 8px 12px'
    }
  }, NAV.map(label => /*#__PURE__*/React.createElement(NavItem, {
    key: label,
    icon: NAV_ICON[label],
    label: label,
    active: label === 'My Inventory',
    disabled: label !== 'My Inventory',
    collapsed: navCollapsed,
    onClick: label === 'My Inventory' ? undefined : () => showToast(label + ' is not available in this view')
  })))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 0',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--sem-text-tertiary)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 16
    }
  }, "chevron_right"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sem-text-secondary)',
      fontWeight: 600
    }
  }, "My Inventory")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-0.035em'
    }
  }, "My Inventory")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 32px 0',
      flex: '0 0 auto',
      boxShadow: 'inset 0 -1px 0 var(--sem-border-default)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onChange: setTab,
    items: [{
      value: 'mrr',
      label: 'Medical Record Review',
      icon: 'description',
      count: MRR.length
    }, {
      value: 'audit',
      label: 'Audit Review',
      icon: 'fact_check',
      count: AUDIT.length
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 32px 4px',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginRight: 'auto'
    }
  }, isAudit ? 'Audit Review' : 'Medical Record Review'), /*#__PURE__*/React.createElement(Select, {
    value: sort,
    onChange: e => setSort(e.target.value),
    options: [{
      value: 'sla',
      label: 'Sort: SLA (soonest)'
    }, {
      value: 'due',
      label: 'Sort: Due date'
    }, {
      value: 'amount',
      label: 'Sort: Amount (high→low)'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 32px 40px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      paddingTop: 16
    }
  }, [...pinned, ...remaining].map(item => /*#__PURE__*/React.createElement(Card, {
    key: item.id,
    item: item,
    isAudit: isAudit,
    pinned: isPinned(item),
    onTogglePin: () => togglePin(item),
    onPrimary: () => showToast((isAudit ? 'Opening audit ' : 'Opening review ') + item.id)
  })), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 20px',
      color: 'var(--sem-text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 44,
      color: 'var(--sem-text-disabled)'
    }
  }, "inbox"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--sem-text-tertiary)'
    }
  }, "No matching assignments"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 13
    }
  }, "Try clearing the filter or search.")))))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--sem-surface-inverted)',
      color: 'var(--sem-text-on-inverted)',
      padding: '13px 22px',
      borderRadius: 14,
      boxShadow: 'var(--sem-elevation-overlay)',
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      zIndex: 400,
      animation: 'om-toast-in 250ms var(--ease-entrance) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: 20,
      color: 'var(--sem-icon-on-inverted)'
    }
  }, "check_circle"), toast));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/claims-workspace/App.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.DropdownItem = __ds_scope.DropdownItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.CountBadge = __ds_scope.CountBadge;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
