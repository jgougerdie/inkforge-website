// Sends a "new reader logged in" notification via Formspree — the only piece
// of this demo gate that talks to a real backend (Formspree's), since GitHub
// Pages itself can't run server code.
//
// Setup (one-time, by the site owner):
//   1. Sign up free at https://formspree.io
//   2. Create a new form, set its notification email to al.t.mail1965@gmail.com
//   3. Copy the form ID from the form's endpoint, e.g.
//      https://formspree.io/f/abcdwxyz  ->  the ID is "abcdwxyz"
//   4. Paste it below in place of "YOUR_FORM_ID"
//
// Until a real ID is set, this silently no-ops — login itself still works
// fine, you just won't get the email.
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

export function notifyLogin(name: string, email: string) {
  if (FORMSPREE_FORM_ID === "YOUR_FORM_ID") return;

  fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      subject: "New Sharpline reader logged in",
      name,
      email,
      loggedInAt: new Date().toISOString(),
    }),
  }).catch(() => {
    // Best-effort notification — never block or break the login flow over it.
  });
}
