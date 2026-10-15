// Inject side panel HTML and wire up hamburger toggle
(function () {
    const links = [
        { href: "index.html",      label: "📂 Structural Templates" },
        { href: "cases.html",      label: "📊 Rejestr Przypadków / Case Registry" },
        { href: "nouns.html",      label: "📝 Rejestr Rzeczowników / Noun Registry" },
        { href: "verbs.html",      label: "⚡ Rejestr Czasowników / Verb Registry" },
        { href: "adjectives.html", label: "🏷️ Rejestr Przymiotników / Adjective Registry" },
        { href: "numbers.html",    label: "🔢 Liczby / Numbers" },
        { href: "drill.html",      label: "⚡ Compilation Drills" },
    ];

    // Build side panel
    const backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    backdrop.addEventListener("click", close);

    const panel = document.createElement("div");
    panel.className = "nav-sidepanel";

    const header = document.createElement("div");
    header.className = "nav-panel-header";

    const title = document.createElement("span");
    title.className = "nav-panel-title";
    title.textContent = "Navigation";

    const closeBtn = document.createElement("button");
    closeBtn.className = "nav-close";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", close);

    header.appendChild(title);
    header.appendChild(closeBtn);
    panel.appendChild(header);

    links.forEach(({ href, label }) => {
        const a = document.createElement("a");
        a.href = href;
        a.textContent = label;
        panel.appendChild(a);
    });

    document.body.appendChild(backdrop);
    document.body.appendChild(panel);

    // Wire up hamburger button
    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".nav-hamburger");
        if (hamburger) hamburger.addEventListener("click", open);
    });

    function open() {
        panel.classList.add("open");
        backdrop.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function close() {
        panel.classList.remove("open");
        backdrop.classList.remove("open");
        document.body.style.overflow = "";
    }
})();
