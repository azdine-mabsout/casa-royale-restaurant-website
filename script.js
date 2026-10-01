    // Product Catalog Dictionary
    const MENU_PRODUCTS = {
      'salmon': { id: 'salmon', name: 'Atlas Salmon Tartare & Caviar', price: 195, img: 'https://lh3.googleusercontent.com/aida/AEtjO1XldPWgN04Uw04E6xX_OA0EftwtNw_EHCEOdudZsM3B9PD8TJiJiX8LS4vxIyCAe7njAYJqkVyfJLUSCzfRznMSToq9_Ci_JZUaWgyJP5ngcqUQdjKOZYiCtz4LQYYtfnwqPAWktVtR_54garJIn2FXypmgt5_2rUnRKZ6AtEXeA03RcWbfQqZY-O9DHymnbo0hi6Z0kmo1AA3KUB1cNA8oNv1bTDe1oj_X18uvMj6x1u0TEQt_Fu_AscQ' },
      'beef': { id: 'beef', name: 'Royal Beef Tenderloin', price: 220, img: 'https://lh3.googleusercontent.com/aida/AEtjO1X9CUgb3Xt3dAtwrbXWuHoV_08HLPBxyRzT_Yv6zXn6lJtRglB7GCCzZCVYDr3iKlPzTC4HYIYkfNItmp67E5OASh6XBV1u6gEW79AlLXI-3nu1OuGsIKLaXNndIHKPfVMCfNNAluNVTp_Gn1NNbxFEAYKnkZeLr9qpzv96eoxy16bExXE4C8cCdtIROypw0dPSJdPLO6kEuMIPyi8mDQLSYheSkYrJE5HM7H2iLZc2tyxnyuxC3sJp_6g' },
      'lamb': { id: 'lamb', name: 'Herb-Crusted Atlas Lamb', price: 280, img: 'https://lh3.googleusercontent.com/aida/AEtjO1UmC30cftM0HVnHdu34tuYjRW2HqpSTWZ8WQbhaJRt1TETueN7CBRb2TjHJ1WPzrE0SOjSZeBr7IyeQwwiEUA-DsmWh3hB_qGFUr5aAjcK5YUbaJV8KhHEpcj_FBFdr24C59XrcfRlNpXEamuGzO2fYiK2kBCCfkLZ3jNqlbfFV1u7Ujp8F65lFFvBRxr8_wL6t4yRf9pT088NG4KJQJl7u5uiJrjRaSXjuldZLlE0Rbqfn6tC6suQpB74' },
      'seabass': { id: 'seabass', name: 'Seabass en Papillote', price: 240, img: 'https://lh3.googleusercontent.com/aida/AEtjO1WgSTD_p451SCjrhn6rNR_NOmpCTWngOt7ie_4eOkZC-e4r_bgiR_tzIsKWUgtwFUC0Try_SvGlchTdmEr-CHN44jYte_XdY9EB2ICGGUgDbExHwQT4Pg9af2ecRRqNBZKJ2Hz9K5FpAxe9ZNjN-JQaUBeGngcaKBUgfVEN8eTLgToYgt-nCnhjI-dVRac1SboZyra6uLtL_qJrJiH64ptrw165kWPi7SR3sh8lwg-YIBLuGeCqJ6pTdXg' },
      'chocolate': { id: 'chocolate', name: 'Sphère Chocolat Noir', price: 140, img: 'https://lh3.googleusercontent.com/aida/AEtjO1X03HsFDcCr636coDoJA87YYZ3ANmPAK41YVAv3aTL5hG5Qm4fR8NCcNWkNmWQogpXz70aR9Q-UscW7TTJYfOQdlTu3tGagAAb2B-yICsxJL0kVDZQGysYzsuHgy5vX0MUfjaPAALyEJZLL1PPSWs4Ra1G7bLHWiJLsIrrlMCLMxWL_YLJVHv8hdP9VhqsCAKIHZmBJZWpnV-dPodWLaxoEmDNpEQ-vDCAdJWimzFCOf7WMcuu0yZM6x2I' },
      'foie-gras': { id: 'foie-gras', name: 'Foie Gras Poêlé au Safran', price: 210, img: 'https://lh3.googleusercontent.com/aida/AEtjO1XyUjviU322tsAYEA0ssR-TS1CottWfVWXel7ljmFIn5M1oFKPWI0QchxxKmpyovycbg_YyUaBfqDT5jLodNoMiQeB1dHDY9vtsOYID6irKF810ggEH6-lmvFrJfoor23M_zXIcPJ4mZNjTvLNs81Ksi_JFv_g3xl8lXzyzCnRh5oCBLv8XrqE-HjP_CsLTN-kXgzHEFX3L3xkH0DtJW9mYPWQIxetZ9l8fDfAJa4GtJcTSXR_wfbJIVg' },
      'spritz': { id: 'spritz', name: 'Casablanca Royal Spritz', price: 120, img: 'https://lh3.googleusercontent.com/aida/AEtjO1WEn42sd_Tk_BGlbS56NFfSIiO808qAs1GiJJg7i9UXSWlZhtxLkI8H27MM89qCCf11AVbKH4H32KRBx2BUEQRQr-xw-JPi6xEwhQ7kkbERkumUN8u92cfJKe5lGA_pNwFrf7o3nIPOpnRzaqKTgaahPP1pPWN5DPF35vew2YHNPJ_352F-eVaWLWvLXQM4Yzof4dPZnfGTyROn5GTd3b8brA3VTYBrKxTYli7sz0WD0RB7KbSvzOgxF8M' },
      'grand-cru': { id: 'grand-cru', name: 'Grand Cru Cocktail Royale', price: 155, img: 'https://lh3.googleusercontent.com/aida/AEtjO1V1kDX7HYFOG9aM70ROYqeb8B_Hj49Kf5uWbgJ8BiAEpDE4LsRQp1vXxrLDxU8Rn-VmQgG8rnJL8I9uOgTu7BLgjcz5iwtBkHJFO4gGe38aVwybkODOFHPUau-X5sML6optydZIZzMwn1DgUE6KlUOcBRmMKm7u3A8TRLWeRphM3q38FFhLAJIsSEpEOQHfjPSAaSPMET-3_lkPWk6fCKHbud-HLkwQSxvFz2aHqwb21-w7q5qK2VEB8Lc' }
    };

    // Cart Data
    let cart = [
      { id: 'salmon', title: "Atlas Salmon Tartare & Caviar", price: 195, qty: 1, image: "https://lh3.googleusercontent.com/aida/AEtjO1XldPWgN04Uw04E6xX_OA0EftwtNw_EHCEOdudZsM3B9PD8TJiJiX8LS4vxIyCAe7njAYJqkVyfJLUSCzfRznMSToq9_Ci_JZUaWgyJP5ngcqUQdjKOZYiCtz4LQYYtfnwqPAWktVtR_54garJIn2FXypmgt5_2rUnRKZ6AtEXeA03RcWbfQqZY-O9DHymnbo0hi6Z0kmo1AA3KUB1cNA8oNv1bTDe1oj_X18uvMj6x1u0TEQt_Fu_AscQ" },
      { id: 'spritz', title: "Casablanca Royal Spritz", price: 120, qty: 1, image: "https://lh3.googleusercontent.com/aida/AEtjO1WEn42sd_Tk_BGlbS56NFfSIiO808qAs1GiJJg7i9UXSWlZhtxLkI8H27MM89qCCf11AVbKH4H32KRBx2BUEQRQr-xw-JPi6xEwhQ7kkbERkumUN8u92cfJKe5lGA_pNwFrf7o3nIPOpnRzaqKTgaahPP1pPWN5DPF35vew2YHNPJ_352F-eVaWLWvLXQM4Yzof4dPZnfGTyROn5GTd3b8brA3VTYBrKxTYli7sz0WD0RB7KbSvzOgxF8M" }
    ];

    // Gallery Lightbox Data
    const galleryItems = [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXkZieIYiN3Zmqay1IHhUw_f8f4mWMphNIkq82_Cg8cy0VKqZMk8fgIgdigcH54a4sxhmj9e56jhmAEAn_0qYFkXLdAAq-tSrVAflhnJqzUygDXGzcWa36cluUz3yNvblqXa45HwH5ejs-hQT1ozKTkKWDU98TGJBATZbpg7uI3BjbjztHNhuPQz5kKoIf7xuhs14BqjihyVvyouqwlWt31qBIKItjpqZNOhsm_L1Dg-k76cS7DJB_NUMd3bkymh7n7Q", title: "The Brass & Teak Atelier", desc: "Under soaring arches, custom bronze inlays, and Moroccan cedar finishes." },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzNwLDubUP88on0lJEnYK2K3jmGHGUfcZDxCUX4hAgkW6DNBE-iIfqFlAspiuDywJfDoyDTqgwGlx0cxG7UoRFqkGIlkVM7ebAsZ-3t37RRTEQ0bDL7EuJlk0VJ1pPPnUWcjh38qZ8UM3QGPfln114ck3rVs64hOhdduEJN9w4ZQ-YN4QKc-_rG_pbirebeZrurMZ0wI87Dop9Lvi_uRgDeqrFfpHnBgHi4T0hqqG5aWBlgmxdigRQ-YErZ1hj9dm3DQ", title: "Veranda Garden Salon", desc: "Refined dining surrounded by crystal chandeliers and coastal ambiance." },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqMBOa8FyBCbgHrKC3LHxO8p0CKSCSc8tiPeEZW7aWDRNr0SgaPUrJ-EzjSCrkLWMPKN6ad6hqoCA11oENn0UPxNaDFPa4ag0ZGhVjSFV2t0HhvuU06jjv9n24P_F8IViOHi2Ao8qdo0cYOL4oiyHSZmpIWBh0pCQhqKbIdk6sP3iBme3MxGCxobl4_0n9okVK0J8OJw4OLzoQoAmeE1TZAELjhQaWX8mc8VU_Yk2jkTq29P946sUZnDZd-5gQ__gt_g", title: "Corniche Table D'Or", desc: "Secluded al fresco dining caressed by the Atlantic evening breeze in Anfa." },
      { src: "https://lh3.googleusercontent.com/aida/AEtjO1X03HsFDcCr636coDoJA87YYZ3ANmPAK41YVAv3aTL5hG5Qm4fR8NCcNWkNmWQogpXz70aR9Q-UscW7TTJYfOQdlTu3tGagAAb2B-yICsxJL0kVDZQGysYzsuHgy5vX0MUfjaPAALyEJZLL1PPSWs4Ra1G7bLHWiJLsIrrlMCLMxWL_YLJVHv8hdP9VhqsCAKIHZmBJZWpnV-dPodWLaxoEmDNpEQ-vDCAdJWimzFCOf7WMcuu0yZM6x2I", title: "Golden Sphère Chocolat Noir", desc: "Valrhona 72% dark chocolate, praline crunch, poured espresso ganache." },
      { src: "https://lh3.googleusercontent.com/aida/AEtjO1WEn42sd_Tk_BGlbS56NFfSIiO808qAs1GiJJg7i9UXSWlZhtxLkI8H27MM89qCCf11AVbKH4H32KRBx2BUEQRQr-xw-JPi6xEwhQ7kkbERkumUN8u92cfJKe5lGA_pNwFrf7o3nIPOpnRzaqKTgaahPP1pPWN5DPF35vew2YHNPJ_352F-eVaWLWvLXQM4Yzof4dPZnfGTyROn5GTd3b8brA3VTYBrKxTYli7sz0WD0RB7KbSvzOgxF8M", title: "Botanical Saffron Spirits", desc: "Artisanal high-altitude saffron gin smoke and crystal barcraft." }
    ];
    let currentLightboxIndex = 0;

    // Initialization lifecycle
    document.addEventListener('DOMContentLoaded', () => {
      initNavigation();
      initScrollSpy();
      initMenuFilter();
      initCart();
      initGallery();
      initReservation();
      initAuth();
    });

    // 1. Navigation handling
    function initNavigation() {
      const navbar = document.getElementById('mainNavbar');
      const mobileToggle = document.getElementById('mobileMenuToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileLinks = document.querySelectorAll('.mobile-nav-link');

      // Sticky Scroll Styling Transition
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('bg-[#FCF9F2]/98', 'shadow-[0_8px_30px_rgba(33,24,18,0.08)]');
          navbar.classList.remove('bg-[#FCF9F2]/90');
        } else {
          navbar.classList.remove('bg-[#FCF9F2]/98', 'shadow-[0_8px_30px_rgba(33,24,18,0.08)]');
          navbar.classList.add('bg-[#FCF9F2]/90');
        }
      });

      // Mobile Menu Toggle
      if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
        mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
          });
        });
      }

      // Cart toggle buttons
      const cartToggleBtn = document.getElementById('cartToggleBtn');
      if (cartToggleBtn) {
        cartToggleBtn.addEventListener('click', () => toggleCartDrawer(true));
      }

      // Account toggle buttons
      const accountToggleBtn = document.getElementById('accountToggleBtn');
      if (accountToggleBtn) {
        accountToggleBtn.addEventListener('click', () => openAccountModal());
      }
    }

    // 2. Active Section Scroll Spy via IntersectionObserver
    function initScrollSpy() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (link.getAttribute('data-target') === currentId) {
                link.classList.add('active-nav');
              } else {
                link.classList.remove('active-nav');
              }
            });
          }
        });
      }, { rootMargin: '-30% 0px -70% 0px' });

      sections.forEach(section => observer.observe(section));
    }

    // 3. Menu Filtering
    function initMenuFilter() {
      const filterButtons = document.querySelectorAll('#menuFilterTabs .menu-tab-btn');
      const dishCards = document.querySelectorAll('#menuItemsGrid .dish-card');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => {
            b.classList.remove('bg-[#C6A15B]', 'text-[#211812]', 'active');
            b.classList.add('bg-surface-container-lowest', 'text-on-surface');
          });

          btn.classList.add('bg-[#C6A15B]', 'text-[#211812]', 'active');
          btn.classList.remove('bg-surface-container-lowest', 'text-on-surface');

          const filter = btn.getAttribute('data-filter');
          dishCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }

    // 4. Cart Logic
    function initCart() {
      updateCartUI();
    }

    function addProductToCart(productId) {
      const product = MENU_PRODUCTS[productId];
      if (!product) return;
      addToCart(product.name, product.price, product.img, product.id);
    }

    function addToCart(title, price, image, id = '') {
      const existing = cart.find(item => (id && item.id === id) || item.title === title);
      if (existing) {
        existing.qty += 1;
        if (image && !existing.image) existing.image = image;
      } else {
        cart.push({ id, title, price, qty: 1, image });
      }
      updateCartUI();
      toggleCartDrawer(true);
    }

    function updateQty(index, delta) {
      if (cart[index]) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
          cart.splice(index, 1);
        }
        updateCartUI();
      }
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCartUI();
    }

    function updateCartUI() {
      const container = document.getElementById('cartItemsContainer');
      const emptyState = document.getElementById('cartEmptyState');
      const footer = document.getElementById('cartFooter');
      const subtotalEl = document.getElementById('cartSubtotal');
      const totalEl = document.getElementById('cartTotal');
      const badge = document.getElementById('navCartBadge');

      const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
      if (badge) badge.textContent = totalQty;

      if (cart.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        footer.classList.add('opacity-50', 'pointer-events-none');
        if (subtotalEl) subtotalEl.textContent = '0 MAD';
        if (totalEl) totalEl.textContent = '0 MAD';
        return;
      }

      emptyState.classList.add('hidden');
      emptyState.classList.remove('flex');
      footer.classList.remove('opacity-50', 'pointer-events-none');

      let totalMAD = 0;
      container.innerHTML = cart.map((item, index) => {
        const lineTotal = item.price * item.qty;
        totalMAD += lineTotal;
        const fallbackImg = 'https://lh3.googleusercontent.com/aida/AEtjO1XldPWgN04Uw04E6xX_OA0EftwtNw_EHCEOdudZsM3B9PD8TJiJiX8LS4vxIyCAe7njAYJqkVyfJLUSCzfRznMSToq9_Ci_JZUaWgyJP5ngcqUQdjKOZYiCtz4LQYYtfnwqPAWktVtR_54garJIn2FXypmgt5_2rUnRKZ6AtEXeA03RcWbfQqZY-O9DHymnbo0hi6Z0kmo1AA3KUB1cNA8oNv1bTDe1oj_X18uvMj6x1u0TEQt_Fu_AscQ';
        return `
          <div class="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <img 
              src="${item.image || fallbackImg}" 
              alt="${item.title}" 
              class="cart-item-img shrink-0" 
              style="width: 72px; height: 72px; object-fit: cover; border-radius: 8px; flex-shrink: 0; display: block; border: 1px solid rgba(198,161,91,0.3);" 
              onerror="this.onerror=null; this.src='${fallbackImg}';" 
            />
            <div class="flex-1 min-w-0">
              <h5 class="font-serif text-xs text-on-surface font-semibold truncate">${item.title}</h5>
              <span class="text-xs text-[#775a1a] font-bold">${item.price} MAD</span>
              <div class="flex items-center gap-2 mt-1">
                <button onclick="updateQty(${index}, -1)" class="w-6 h-6 rounded bg-surface-container text-on-surface hover:bg-[#C6A15B] flex items-center justify-center text-xs font-bold">-</button>
                <span class="text-xs font-semibold px-1">${item.qty}</span>
                <button onclick="updateQty(${index}, 1)" class="w-6 h-6 rounded bg-surface-container text-on-surface hover:bg-[#C6A15B] flex items-center justify-center text-xs font-bold">+</button>
              </div>
            </div>
            <button onclick="removeFromCart(${index})" class="text-outline hover:text-error transition-colors p-1" title="Remove item">
              <span class="material-symbols-outlined text-base">delete</span>
            </button>
          </div>
        `;
      }).join('');

      if (subtotalEl) subtotalEl.textContent = totalMAD + ' MAD';
      if (totalEl) totalEl.textContent = totalMAD + ' MAD';
    }

    function toggleCartDrawer(open) {
      const drawer = document.getElementById('cartDrawer');
      const panel = document.getElementById('cartPanel');
      if (open) {
        drawer.classList.remove('pointer-events-none', 'opacity-0');
        panel.classList.remove('translate-x-full');
      } else {
        panel.classList.add('translate-x-full');
        setTimeout(() => {
          drawer.classList.add('pointer-events-none', 'opacity-0');
        }, 200);
      }
    }

    // Checkout modal logic
    function openCheckoutModal() {
      toggleCartDrawer(false);
      const modal = document.getElementById('checkoutModal');
      const countEl = document.getElementById('checkoutItemCount');
      const listEl = document.getElementById('checkoutSummaryList');
      const totalEl = document.getElementById('checkoutTotalAmount');
      const formWrap = document.getElementById('checkoutFormWrapper');
      const successWrap = document.getElementById('checkoutSuccessWrapper');

      formWrap.classList.remove('hidden');
      successWrap.classList.add('hidden');

      let total = 0;
      let itemsCount = 0;
      listEl.innerHTML = cart.map(item => {
        total += item.price * item.qty;
        itemsCount += item.qty;
        return `<div class="flex justify-between py-0.5"><span>${item.qty}x ${item.title}</span><span class="font-bold">${item.price * item.qty} MAD</span></div>`;
      }).join('');

      countEl.textContent = `${itemsCount} item${itemsCount > 1 ? 's' : ''}`;
      totalEl.textContent = total + ' MAD';

      modal.classList.remove('hidden');
    }

    function closeCheckoutModal() {
      document.getElementById('checkoutModal').classList.add('hidden');
    }

    function handleOrderSubmit(e) {
      e.preventDefault();
      document.getElementById('checkoutFormWrapper').classList.add('hidden');
      document.getElementById('checkoutSuccessWrapper').classList.remove('hidden');
      cart = [];
      updateCartUI();
    }

    // 5. Gallery Lightbox
    function initGallery() {
      document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('galleryLightbox');
        if (!lightbox.classList.contains('hidden')) {
          if (e.key === 'Escape') closeLightbox();
          if (e.key === 'ArrowLeft') prevLightboxImage();
          if (e.key === 'ArrowRight') nextLightboxImage();
        }
      });
    }

    function openLightbox(index) {
      currentLightboxIndex = index;
      updateLightboxContent();
      document.getElementById('galleryLightbox').classList.remove('hidden');
    }

    function closeLightbox() {
      document.getElementById('galleryLightbox').classList.add('hidden');
    }

    function prevLightboxImage() {
      currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightboxContent();
    }

    function nextLightboxImage() {
      currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
      updateLightboxContent();
    }

    function updateLightboxContent() {
      const item = galleryItems[currentLightboxIndex];
      document.getElementById('lightboxImage').src = item.src;
      document.getElementById('lightboxTitle').textContent = item.title;
      document.getElementById('lightboxDescription').textContent = item.desc;
    }

    // 6. Reservation Form
    function initReservation() {}

    function handleReservationSubmit(e) {
      e.preventDefault();
      const successBox = document.getElementById('reservationSuccess');
      successBox.classList.remove('hidden');
      document.getElementById('reservationForm').reset();
      setTimeout(() => {
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }

    // 7. Auth Modal
    function initAuth() {}

    function openAccountModal() {
      document.getElementById('accountModal').classList.remove('hidden');
    }

    function closeAccountModal() {
      document.getElementById('accountModal').classList.add('hidden');
      document.getElementById('authFeedback').classList.add('hidden');
    }

    function switchAuthTab(type) {
      const loginForm = document.getElementById('loginForm');
      const signupForm = document.getElementById('signupForm');
      const tabLogin = document.getElementById('authTabLogin');
      const tabSignup = document.getElementById('authTabSignup');
      const feedback = document.getElementById('authFeedback');
      feedback.classList.add('hidden');

      if (type === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        tabLogin.classList.add('border-[#775a1a]', 'text-[#775a1a]', 'font-bold');
        tabLogin.classList.remove('border-transparent', 'text-outline');
        tabSignup.classList.add('border-transparent', 'text-outline');
        tabSignup.classList.remove('border-[#775a1a]', 'text-[#775a1a]', 'font-bold');
      } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        tabSignup.classList.add('border-[#775a1a]', 'text-[#775a1a]', 'font-bold');
        tabSignup.classList.remove('border-transparent', 'text-outline');
        tabLogin.classList.add('border-transparent', 'text-outline');
        tabLogin.classList.remove('border-[#775a1a]', 'text-[#775a1a]', 'font-bold');
      }
    }

    function togglePasswordVisibility(fieldId) {
      const input = document.getElementById(fieldId);
      input.type = input.type === 'password' ? 'text' : 'password';
    }

    function handleAuthSubmit(e, action) {
      e.preventDefault();
      const feedback = document.getElementById('authFeedback');
      feedback.textContent = action === 'login' 
        ? 'Welcome back to Casa Royale Privilège. Session authenticated.' 
        : 'Privilège account successfully registered. Welcome to Casa Royale.';
      feedback.classList.remove('hidden');
      setTimeout(() => {
        closeAccountModal();
      }, 1500);
    }