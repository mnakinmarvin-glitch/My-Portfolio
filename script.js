const _supabase = supabase.createClient(
  "https://pcpqxzxxmjgnmdtjytcm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjcHF4enh4bWpnbm1kdGp5dGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MTM5NTUsImV4cCI6MjA4NDM4OTk1NX0.xanCoPrpn6RE0N5Q-c-pZw2BH7o_m4k_s9j_dznDJfk"
);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await _supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert("Feil ved innlogging: " + error.message);
  } else {
    window.location.href = "index.html";
  }
});
