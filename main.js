
document.addEventListener("DOMContentLoaded", () => {

    const formatPrice = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  function buildWhatsappLink(message) {
    return `https://wa.me/${STORE_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
  }

  function whatsappMessageFor(productName) {
    return STORE_CONFIG.whatsapp.messages.produto.replace("{produto}", productName);
  }

    document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
    const key = link.dataset.waMessage || "geral";
    const message = STORE_CONFIG.whatsapp.messages[key] || STORE_CONFIG.whatsapp.messages.geral;
    link.setAttribute("href", buildWhatsappLink(message));
  });

  document.querySelectorAll(".js-instagram").forEach((el) => el.setAttribute("href", STORE_CONFIG.instagram));

  const mapsBtn = document.getElementById("mapsBtn");
  if (mapsBtn) {
    const query = encodeURIComponent(STORE_CONFIG.location.mapsQuery);
    mapsBtn.setAttribute("href", `https://www.google.com/maps/search/?api=1&query=${query}`);
  }

    const hoursList = document.getElementById("hoursList");
  if (hoursList) {
    hoursList.innerHTML = STORE_CONFIG.hours
      .map(
        (h) => `
        <div class="hours-row">
          <dt>${h.day}</dt>
          <dd>${h.time}</dd>
        </div>`
      )
      .join("");
  }

    const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  function toggleMenu() {
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", toggleMenu);
    navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });
  }

    const cardTemplate = document.getElementById("productCardTemplate");

  function createProductCard(product) {
    const node = cardTemplate.content.cloneNode(true);

    const badge = node.querySelector(".badge");
    if (product.oldPrice) badge.textContent = "Promoção";
    else if (product.isNew) badge.textContent = "Novo";

    const img = node.querySelector(".product-image img");
    setImage(img, product);
    img.alt = product.name;
    img.loading = "lazy";

    node.querySelector(".product-category").textContent = capitalize(product.category);
    node.querySelector(".product-name").textContent = product.name;
    node.querySelector(".price").textContent = formatPrice(product.price);

    const oldPriceEl = node.querySelector(".old-price");
    oldPriceEl.textContent = product.oldPrice ? formatPrice(product.oldPrice) : "";

    const buyLink = node.querySelector(".js-buy");
    buyLink.setAttribute("href", buildWhatsappLink(whatsappMessageFor(product.name)));

    const moreBtn = node.querySelector(".js-more");
    moreBtn.addEventListener("click", () => openProductModal(product));

    const article = node.querySelector(".product-card");
    article.classList.add("reveal");

    return node;
  }

  function setImage(img, product) {
    const list = product.images || [];
    img.dataset.done = "";
    img.dataset.fallbacks = JSON.stringify(list.slice(1));
    img.src = list[0] || "";
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

    const productGrid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function matchesFilter(product, filter) {
    if (filter === "todos") return true;
    if (filter === "novidades") return product.isNew;
    if (filter === "promocoes") return Boolean(product.oldPrice);
    return product.category === filter;
  }

  function renderProducts(filter) {
    const filtered = PRODUCTS.filter((p) => matchesFilter(p, filter));

    productGrid.classList.add("is-filtering");
    window.setTimeout(() => {
      productGrid.innerHTML = "";
      filtered.forEach((product) => productGrid.appendChild(createProductCard(product)));
      emptyState.hidden = filtered.length > 0;
      productGrid.classList.remove("is-filtering");
      observeReveal(productGrid.querySelectorAll(".reveal"));
    }, 150);
  }

  function setActiveFilter(filter) {
    filterButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.filter === filter);
    });
    renderProducts(filter);
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => setActiveFilter(btn.dataset.filter));
  });
  document.querySelectorAll(".js-category").forEach((el) => {
    el.addEventListener("click", (e) => {
      const filter = el.dataset.filter;
      const hasFilterOption = [...filterButtons].some((btn) => btn.dataset.filter === filter);
      if (hasFilterOption) {
        e.preventDefault();
        setActiveFilter(filter);
        document.getElementById("produtos").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

    const highlightGrid = document.getElementById("highlightGrid");
  const tabButtons = document.querySelectorAll(".tab");

  function matchesHighlight(product, type) {
    if (type === "bestseller") return product.isBestseller;
    if (type === "new") return product.isNew;
    if (type === "promo") return Boolean(product.oldPrice);
    return false;
  }

  function renderHighlights(type) {
    const filtered = PRODUCTS.filter((p) => matchesHighlight(p, type));
    highlightGrid.innerHTML = "";
    filtered.forEach((product) => highlightGrid.appendChild(createProductCard(product)));
    observeReveal(highlightGrid.querySelectorAll(".reveal"));
  }

  tabButtons.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabButtons.forEach((t) => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      renderHighlights(tab.dataset.highlight);
    });
  });

    const modal = document.getElementById("productModal");
  const modalClose = document.getElementById("modalClose");
  const modalImage = document.getElementById("modalImage");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalPrice = document.getElementById("modalPrice");
  const modalOldPrice = document.getElementById("modalOldPrice");
  const modalWhatsapp = document.getElementById("modalWhatsapp");
  let lastFocusedEl = null;

  function openProductModal(product) {
    setImage(modalImage, product);
    modalImage.alt = product.name;
    modalCategory.textContent = capitalize(product.category);
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = formatPrice(product.price);
    modalOldPrice.textContent = product.oldPrice ? formatPrice(product.oldPrice) : "";
    modalWhatsapp.setAttribute("href", buildWhatsappLink(whatsappMessageFor(product.name)));

    lastFocusedEl = document.activeElement;
    modal.hidden = false;
    modalClose.focus();
    document.body.style.overflow = "hidden";
  }

  function closeProductModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  modalClose.addEventListener("click", closeProductModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeProductModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeProductModal();
  });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length > 1 && !anchor.classList.contains("js-category")) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let revealObserver = null;

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  function observeReveal(elements) {
    elements.forEach((el) => {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("is-visible");
    });
  }

    renderProducts("todos");
  renderHighlights("bestseller");
  observeReveal(document.querySelectorAll(
    ".category-grid.reveal, .about-grid.reveal, .location-grid.reveal, .instagram-grid.reveal, .cta-final .reveal"
  ));

  window.setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }, 2500);

  const anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

});
