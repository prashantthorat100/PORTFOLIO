import React from 'react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" id="toastContainer" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-msg ${toast.type}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
}
