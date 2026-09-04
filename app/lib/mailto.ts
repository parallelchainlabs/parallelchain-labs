export const LAB_EMAIL = "info@parallelchain-labs.io";

export function openLabMailto(subject: string, body: string) {
  window.location.href = `mailto:${LAB_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
