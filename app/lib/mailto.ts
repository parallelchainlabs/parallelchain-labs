export const LAB_EMAIL = "hiring@parallelchain-lab.com";

export function openLabMailto(subject: string, body: string) {
  window.location.href = `mailto:${LAB_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
