// app.js

// ---------------------------
// Make Payment Form Submission
// ---------------------------
const paymentForm = document.getElementById("paymentForm");
const response = document.getElementById("response");

if (paymentForm) {
  paymentForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payer = document.getElementById("payer").value;
    const amount = document.getElementById("amount").value;

    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payer, amount }),
      });

      const data = await res.json();

      if (res.status === 201) {
        response.textContent = "✅ Payment recorded successfully!";
        response.style.color = "green";
        paymentForm.reset();
        loadDashboardData(); // update dashboard live immediately
      } else {
        response.textContent = data.message || "❌ Failed to record payment.";
        response.style.color = "red";
      }
    } catch (err) {
      console.error(err);
      response.textContent = "❌ Error connecting to server.";
      response.style.color = "red";
    }
  });
}

// ---------------------------
// Load Dashboard & Transactions
// ---------------------------
const totalPaymentsEl = document.getElementById("totalPayments");
const totalAmountEl = document.getElementById("totalAmount");
const transactionsTable = document.getElementById("transactionsTable")?.querySelector("tbody");

async function loadDashboardData() {
  try {
    const res = await fetch("/api/payments");
    const payments = await res.json();

    if (!Array.isArray(payments)) return;

    // Dashboard totals
    if (totalPaymentsEl) totalPaymentsEl.textContent = payments.length;
    if (totalAmountEl) {
      const total = payments.reduce((sum, p) => sum + parseFloat(p.amount), 0);
      totalAmountEl.textContent = total.toLocaleString("en-KE", { style: "currency", currency: "KES" });
    }

    // Transactions table
    if (transactionsTable) {
      transactionsTable.innerHTML = "";
      payments.forEach(p => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${p.id}</td>
          <td>${p.payer}</td>
          <td>${parseFloat(p.amount).toLocaleString("en-KE", { style: "currency", currency: "KES" })}</td>
          <td>${new Date(p.created_at).toLocaleString()}</td>
        `;
        transactionsTable.appendChild(row);
      });
    }
  } catch (err) {
    console.error("Error loading dashboard data:", err);
  }
}

// Load dashboard/transactions data on page load
if (totalPaymentsEl || transactionsTable) {
  loadDashboardData();

  // Auto-refresh every 5 seconds
  setInterval(loadDashboardData, 5000);
}
