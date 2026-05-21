import * as React from 'react';

export type LeadingVisualProps = {
  children: React.ReactNode;
};

export type TrailingVisualProps = {
  children: React.ReactNode;
};

export type TrailingActionProps = {
  children: React.ReactNode;
};

/**
 * Marker for leading decorative content in compound field controls (e.g. Combobox.Control).
 * Prefer the `leadingVisual` prop when the content is known at render time.
 */
export function LeadingVisual(_props: LeadingVisualProps) {
  return null;
}

LeadingVisual.displayName = 'FieldControlLeadingVisual';

/**
 * Marker for trailing decorative content in compound field controls.
 * Prefer the `trailingVisual` prop when the content is known at render time.
 */
export function TrailingVisual(_props: TrailingVisualProps) {
  return null;
}

TrailingVisual.displayName = 'FieldControlTrailingVisual';

/**
 * Marker for trailing interactive content in compound field controls.
 * Prefer rendering `ClearButton` / `ToggleButton` directly as Control children.
 */
export function TrailingAction(_props: TrailingActionProps) {
  return null;
}

TrailingAction.displayName = 'FieldControlTrailingAction';

export function resolveFieldControlSlot(
  slotValue: React.ReactNode | undefined,
  childItems: React.ReactNode[],
  marker: { displayName?: string; name?: string } | ((props: { children?: React.ReactNode }) => null)
): React.ReactNode | null {
  if (slotValue !== undefined && slotValue !== null) {
    return slotValue;
  }

  const markerChild = childItems.find(
    (child) => React.isValidElement(child) && child.type === marker
  );

  if (markerChild && React.isValidElement<{ children?: React.ReactNode }>(markerChild)) {
    return markerChild.props.children ?? null;
  }

  return null;
}
