(() => {
  "use strict";

  const TRANSACTIONS_KEY = "pocket-ledger-transactions-v1";
  const BUDGETS_KEY = "pocket-ledger-budgets-v1";
  const currency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });
  const today = new Date();
  const localDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const currentMonth = localDate(today).slice(0, 7);
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const readStorage = (key, fallback, validate) => {
    try {
      const rawValue = localStorage.getItem(key);
      if (rawValue === null) return fallback;
      const parsed = JSON.parse(rawValue);
      if (!validate(parsed)) throw new Error("Stored data has an unexpected format.");
      return parsed;
    } catch (error) {
      console.error(`Could not load ${key} from local storage.`, error);
      showToast("Saved data could not be loaded. Check this browser’s storage settings.");
      return fallback;
    }
  };

  let transactions = readStorage(
    TRANSACTIONS_KEY,
    [],
    (value) =>
      Array.isArray(value) &&
      value.every(
        (item) =>
          item &&
          typeof item.id === "string" &&
          (item.type === "income" || item.type === "expense") &&
          Number.isFinite(item.amount) &&
          typeof item.category === "string" &&
          typeof item.description === "string" &&
          typeof item.date === "string"
      )
  );
  let budgets = readStorage(
    BUDGETS_KEY,
    {},
    (value) =>
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      Object.values(value).every((amount) => Number.isFinite(amount) && amount >= 0)
  );
  let toastTimer;

  const byId = (id) => document.getElementById(id);
  const saveData = () => {
    try {
      localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
      localStorage.setItem(BUDGETS_KEY, JSON.stringify(budgets));
      return true;
    } catch (error) {
      console.error("Could not save Pocket Ledger data to local storage.", error);
      showToast("Could not save data. Check available browser storage.");
      return false;
    }
  };

  function showToast(message) {
    const toast = byId("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 2600);
  }

  function setView(viewName) {
    const titles = {
      home: "Overview",
      add: byId("transactionId").value ? "Edit transaction" : "Add transaction",
      reports: "Reports",
      about: "About",
    };
    document.querySelectorAll(".view").forEach((view) => {
      view.hidden = view.id !== `${viewName}View`;
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
      const selected = link.dataset.view === viewName;
      link.classList.toggle("active", selected);
      if (selected) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    byId("pageTitle").textContent = titles[viewName] || "Pocket Ledger";
    if (viewName === "reports") renderReport();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function renderSummary() {
    const income = transactions
      .filter((item) => item.type === "income")
      .reduce((sum, item) => sum + item.amount, 0);
    const expenses = transactions
      .filter((item) => item.type === "expense")
      .reduce((sum, item) => sum + item.amount, 0);
    byId("totalIncome").textContent = currency.format(income);
    byId("totalExpenses").textContent = currency.format(expenses);
    byId("totalBalance").textContent = currency.format(income - expenses);
    byId("totalBalance").style.color = income - expenses < 0 ? "var(--red)" : "var(--ink)";
  }

  function visibleTransactions() {
    const query = byId("searchInput").value.trim().toLocaleLowerCase();
    const type = byId("typeFilter").value;
    const category = byId("categoryFilter").value;
    return [...transactions]
      .filter((item) => {
        const matchesSearch =
          !query ||
          item.description.toLocaleLowerCase().includes(query) ||
          item.category.toLocaleLowerCase().includes(query);
        return (
          matchesSearch &&
          (type === "all" || item.type === type) &&
          (category === "all" || item.category === category)
        );
      })
      .sort((left, right) => right.date.localeCompare(left.date) || right.id.localeCompare(left.id));
  }

  function renderTransactions() {
    const list = byId("transactionList");
    const items = visibleTransactions();
    list.replaceChildren();
    byId("transactionCount").textContent =
      `${items.length} ${items.length === 1 ? "transaction" : "transactions"} shown`;

    if (items.length === 0) {
      list.append(
        makeElement(
          "p",
          "empty-state",
          transactions.length
            ? "No transactions match these filters. Try changing your search."
            : "No transactions yet. Add your first income or expense to get started."
        )
      );
      return;
    }

    const icons = {
      Food: "🍽️",
      Travel: "🚆",
      Shopping: "🛍️",
      Bills: "🧾",
      Health: "💊",
      Entertainment: "🎬",
      Education: "📚",
      Salary: "💼",
      "Other income": "💰",
      Other: "↗",
    };

    items.forEach((item) => {
      const row = makeElement("article", "transaction-row");
      row.dataset.id = item.id;
      row.append(makeElement("span", "transaction-icon", icons[item.category] || "↗"));

      const info = makeElement("div");
      info.append(
        makeElement("p", "transaction-name", item.description),
        makeElement(
          "p",
          "transaction-meta",
          `${item.category} · ${dateFormatter.format(new Date(`${item.date}T12:00:00`))}`
        )
      );
      row.append(info);

      const amount = makeElement(
        "span",
        `transaction-amount ${item.type}`,
        `${item.type === "income" ? "+" : "−"}${currency.format(item.amount)}`
      );
      row.append(amount);

      const actions = makeElement("div", "row-actions");
      const editButton = makeElement("button", "icon-button");
      editButton.type = "button";
      editButton.dataset.action = "edit";
      editButton.setAttribute("aria-label", `Edit ${item.description}`);
      editButton.textContent = "✎";
      const deleteButton = makeElement("button", "icon-button delete");
      deleteButton.type = "button";
      deleteButton.dataset.action = "delete";
      deleteButton.setAttribute("aria-label", `Delete ${item.description}`);
      deleteButton.textContent = "×";
      actions.append(editButton, deleteButton);
      row.append(actions);
      list.append(row);
    });
  }

  function renderBudget() {
    const month = byId("budgetMonth").value || currentMonth;
    const spent = transactions
      .filter((item) => item.type === "expense" && item.date.startsWith(month))
      .reduce((sum, item) => sum + item.amount, 0);
    const limit = budgets[month] || 0;
    const percentage = limit > 0 ? (spent / limit) * 100 : 0;
    const fill = byId("budgetProgressFill");
    fill.style.width = `${Math.min(percentage, 100)}%`;
    fill.classList.toggle("over-budget", limit > 0 && spent > limit);
    byId("budgetProgress").setAttribute("aria-valuenow", String(Math.round(Math.min(percentage, 100))));
    byId("budgetSpent").textContent = currency.format(spent);
    byId("budgetLimit").textContent = limit ? currency.format(limit) : "Not set";

    const caption = !limit
      ? "Set a monthly budget to track your spending."
      : spent > limit
        ? `You are ${currency.format(spent - limit)} over your budget.`
        : `${Math.max(0, Math.round(100 - percentage))}% of your budget remains.`;
    byId("budgetCaption").textContent = caption;
    byId("budgetInput").value = limit ? String(limit) : "";
  }

  function renderReport() {
    const month = byId("reportMonth").value || currentMonth;
    const expenses = transactions.filter(
      (item) => item.type === "expense" && item.date.startsWith(month)
    );
    const total = expenses.reduce((sum, item) => sum + item.amount, 0);
    byId("reportTotal").textContent = currency.format(total);
    byId("reportTransactionCount").textContent =
      `${expenses.length} expense ${expenses.length === 1 ? "transaction" : "transactions"}`;
    const categoryTotals = expenses.reduce((totals, item) => {
      totals[item.category] = (totals[item.category] || 0) + item.amount;
      return totals;
    }, {});
    const categoryList = byId("categoryReport");
    categoryList.replaceChildren();

    const categories = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);
    if (categories.length === 0) {
      categoryList.append(makeElement("p", "empty-state", "No expenses recorded for this month."));
      return;
    }

    categories.forEach(([category, amount]) => {
      const row = makeElement("div", "category-row");
      const label = makeElement("div", "category-label");
      label.append(makeElement("span", "", category), makeElement("strong", "", currency.format(amount)));
      const track = makeElement("div", "category-track");
      const fill = makeElement("div", "category-fill");
      fill.style.width = `${(amount / total) * 100}%`;
      track.append(fill);
      row.append(label, track);
      categoryList.append(row);
    });
  }

  function resetTransactionForm() {
    byId("transactionForm").reset();
    byId("transactionId").value = "";
    byId("transactionDate").value = localDate(new Date());
    byId("transactionType").value = "expense";
    byId("saveTransactionButton").textContent = "Save transaction";
    byId("cancelEditButton").hidden = true;
    byId("transactionMessage").textContent = "";
    byId("pageTitle").textContent = "Add transaction";
    byId("addHeading").textContent = "Add a transaction";
  }

  function startEditing(item) {
    byId("transactionId").value = item.id;
    byId("transactionType").value = item.type;
    byId("transactionAmount").value = String(item.amount);
    byId("transactionCategory").value = item.category;
    byId("transactionDate").value = item.date;
    byId("transactionDescription").value = item.description;
    byId("saveTransactionButton").textContent = "Save changes";
    byId("cancelEditButton").hidden = false;
    byId("addHeading").textContent = "Edit transaction";
    byId("pageTitle").textContent = "Edit transaction";
    byId("transactionMessage").textContent = "";
    setView("add");
    byId("addHeading").textContent = "Edit transaction";
    byId("pageTitle").textContent = "Edit transaction";
  }

  function renderAll() {
    renderSummary();
    renderTransactions();
    renderBudget();
    renderReport();
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (link.dataset.view === "add" && !byId("transactionId").value) {
        resetTransactionForm();
      }
      setView(link.dataset.view);
    });
  });

  document.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.go === "add" && !byId("transactionId").value) {
        resetTransactionForm();
      }
      setView(button.dataset.go);
    });
  });

  ["searchInput", "typeFilter", "categoryFilter"].forEach((id) => {
    byId(id).addEventListener(id === "searchInput" ? "input" : "change", renderTransactions);
  });

  byId("transactionList").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const row = button.closest(".transaction-row");
    const item = transactions.find((transaction) => transaction.id === row.dataset.id);
    if (!item) return;

    if (button.dataset.action === "edit") {
      startEditing(item);
    } else if (button.dataset.action === "delete") {
      if (!window.confirm(`Delete "${item.description}"?`)) return;
      transactions = transactions.filter((transaction) => transaction.id !== item.id);
      const saved = saveData();
      renderAll();
      if (saved) showToast("Transaction deleted.");
    }
  });

  byId("transactionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = Number(byId("transactionAmount").value);
    const description = byId("transactionDescription").value.trim();
    const date = byId("transactionDate").value;
    const message = byId("transactionMessage");

    if (!description || !date || !Number.isFinite(amount) || amount <= 0) {
      message.textContent = "Enter a description, a valid date, and an amount greater than zero.";
      return;
    }

    const id = byId("transactionId").value;
    const transaction = {
      id: id || (window.crypto && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`),
      type: byId("transactionType").value,
      amount: Math.round((amount + Number.EPSILON) * 100) / 100,
      category: byId("transactionCategory").value,
      description,
      date,
    };
    if (id) {
      transactions = transactions.map((item) => item.id === id ? transaction : item);
    } else {
      transactions.push(transaction);
    }
    const saved = saveData();
    renderAll();
    resetTransactionForm();
    setView("home");
    if (saved) showToast(id ? "Transaction updated." : "Transaction added.");
  });

  byId("cancelEditButton").addEventListener("click", () => {
    resetTransactionForm();
    setView("home");
  });

  byId("budgetForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = Number(byId("budgetInput").value);
    const month = byId("budgetMonth").value || currentMonth;
    if (!Number.isFinite(amount) || amount <= 0) {
      showToast("Enter a budget greater than zero.");
      return;
    }
    budgets[month] = Math.round((amount + Number.EPSILON) * 100) / 100;
    const saved = saveData();
    renderBudget();
    if (saved) showToast("Monthly budget saved.");
  });

  byId("budgetMonth").addEventListener("change", renderBudget);
  byId("reportMonth").addEventListener("change", renderReport);

  byId("exportCsvButton").addEventListener("click", () => {
    const month = byId("reportMonth").value || currentMonth;
    const rows = transactions
      .filter((item) => item.date.startsWith(month))
      .sort((left, right) => left.date.localeCompare(right.date));
    if (rows.length === 0) {
      showToast("There are no transactions to export for this month.");
      return;
    }
    const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;
    const csv = [
      ["Date", "Type", "Category", "Description", "Amount"].map(escapeCsv).join(","),
      ...rows.map((item) =>
        [item.date, item.type, item.category, item.description, item.amount]
          .map(escapeCsv)
          .join(",")
      ),
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `pocket-ledger-${month}.csv`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("CSV exported.");
  });

  byId("todayDate").textContent = dateFormatter.format(today);
  byId("todayDate").dateTime = localDate(today);
  byId("budgetMonth").value = currentMonth;
  byId("reportMonth").value = currentMonth;
  byId("transactionDate").value = localDate(today);
  renderAll();
})();
