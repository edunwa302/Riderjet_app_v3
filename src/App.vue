<template>
  <!-- ============================================================
       Riderjet Logistics – Landing Page
       Vue 3 <script setup> + Tailwind CSS
       Local SEO optimised for Enugu, Nigeria (2025-2026)
  ============================================================ -->

  <!-- JSON-LD LocalBusiness Schema (injected via useHead / mounted) -->

  <div class="font-sans antialiased bg-white text-gray-800">
    <!-- ============================================================
         FLOATING WHATSAPP BUTTON – visible on all screens
    ============================================================ -->
    <a
      href="https://wa.me/2349015395139?text=Hello%20Riderjet%20Logistics%2C%20I%20want%20to%20book%20a%20delivery%2Fpickup%20in%20Enugu"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Riderjet Logistics on WhatsApp to book a delivery in Enugu"
      class="fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold px-4 py-3 rounded-full shadow-2xl transition-all duration-200 group"
    >
      <!-- WhatsApp SVG icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.94a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.69.97.98-3.61-.24-.37A9.93 9.93 0 0 1 2.06 12C2.06 6.5 6.5 2.06 12 2.06S21.94 6.5 21.94 12 17.5 21.94 12 21.94zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.14 8.14 0 0 1-2.4-1.48 9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
        />
      </svg>
      <span class="text-sm hidden sm:inline">Book on WhatsApp</span>
    </a>

    <!-- ============================================================
         HEADER / NAV
    ============================================================ -->
    <header
      class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm"
    >
      <div
        class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
      >
        <!-- Logo / Brand -->
        <div class="flex items-center gap-2">
          <div
            class="w-9 h-9 rounded-lg bg-linear-to-br from-green-500 to-emerald-700 flex items-center justify-center shadow"
            aria-hidden="true"
          >
            <img
              src="/src/assets/riderjet_logo.jpg"
              alt="riderjet logo"
              class="w-8 h-8 rounded-sm object-cover"
            />
          </div>
          <div>
            <span
              class="font-extrabold text-gray-900 text-lg leading-none tracking-tight"
              >Riderjet</span
            >
            <span
              class="block text-xs text-green-600 font-semibold leading-none -mt-0.5 tracking-wide"
              >LOGISTICS</span
            >
          </div>
        </div>

        <!-- Nav CTA -->
        <a
          href="https://wa.me/2349015395139?text=Hello%20Riderjet%20Logistics%2C%20I%20want%20to%20book%20a%20delivery%2Fpickup%20in%20Enugu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a delivery in Enugu on WhatsApp"
          class="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors duration-200"
        >
          Book Now
        </a>
      </div>
    </header>

    <main>
      <!-- ============================================================
           HERO SECTION
      ============================================================ -->
      <section
        id="hero"
        aria-label="Hero – Riderjet Logistics Enugu delivery service"
        class="relative overflow-hidden bg-linear-to-br from-slate-900 via-gray-900 to-emerald-950 text-white hero-section"
        :style="{
          backgroundImage: `url(${riderjetBike})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }"
      >
        <!-- Dark overlay for text readability -->
        <div
          class="absolute inset-0 bg-black/50 pointer-events-none"
          aria-hidden="true"
        ></div>

        <!-- Decorative background blobs -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            class="absolute -top-24 -right-24 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl"
          ></div>
          <!-- Speed lines pattern -->
          <div
            class="absolute inset-0 opacity-5"
            style="
              background-image: repeating-linear-gradient(
                105deg,
                transparent,
                transparent 40px,
                rgba(255, 255, 255, 0.4) 40px,
                rgba(255, 255, 255, 0.4) 41px
              );
            "
          ></div>
        </div>

        <div
          class="relative max-w-6xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28 text-center"
        >
          <!-- Location badge -->
          <div
            class="inline-flex items-center gap-1.5 bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.01 10 19 10 19s.11.01.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.757.433 5.737 5.737 0 00.28.14l.019.009.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clip-rule="evenodd"
              />
            </svg>
            Serving All of Enugu, Nigeria
          </div>

          <!-- H1 – primary keyword target -->
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4"
          >
            <span class="text-white">Fast Dispatch Riders &amp;</span>
            <span
              class="block text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-300"
            >
              Delivery Service in Enugu
            </span>
          </h1>

          <p
            class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Trusted courier &amp; logistics service across Enugu — food
            delivery, parcel dispatch, document pickup, business errands, and
            more.
            <strong class="text-white"> Safe, Fast and Reliable.</strong>
          </p>

          <!-- Hero CTA buttons -->
          <div
            class="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <a
              href="https://wa.me/2349015395139?text=Hello%20Riderjet%20Logistics%2C%20I%20want%20to%20book%20a%20delivery%2Fpickup%20in%20Enugu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp to book a delivery or pickup in Enugu"
              class="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 active:scale-95 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg shadow-green-900/40 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.94a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.69.97.98-3.61-.24-.37A9.93 9.93 0 0 1 2.06 12C2.06 6.5 6.5 2.06 12 2.06S21.94 6.5 21.94 12 17.5 21.94 12 21.94zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.14 8.14 0 0 1-2.4-1.48 9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
                />
              </svg>
              Chat on WhatsApp to Book Now
            </a>

            <a
              href="tel:+2349015395139"
              aria-label="Call Riderjet Logistics Enugu on +2349015395139"
              class="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold text-base px-6 py-4 rounded-2xl transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              +234 901 539 5139
            </a>
          </div>

          <!-- Trust signals -->
          <div
            class="mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          >
            <span class="flex items-center gap-1.5"
              ><span
                class="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                aria-hidden="true"
              ></span
              >Online &amp; Active Now</span
            >
            <span class="flex items-center gap-1.5" aria-hidden="true">•</span>
            <span>⚡ Instant Dispatch</span>
            <span class="flex items-center gap-1.5" aria-hidden="true">•</span>
            <span>📍 Enugu-Wide Coverage</span>
            <span class="flex items-center gap-1.5" aria-hidden="true">•</span>
            <span>🔒 Safe &amp; Trusted</span>
          </div>
        </div>
      </section>

      <!-- ============================================================
           OUR SERVICES SECTION
      ============================================================ -->
      <section
        id="services"
        aria-labelledby="services-heading"
        class="py-20 bg-gray-50"
      >
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <span
              class="text-green-600 font-bold text-sm uppercase tracking-widest"
              >What We Do</span
            >
            <h2
              id="services-heading"
              class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2"
            >
              Delivery &amp; Logistics Services in Enugu
            </h2>
            <p class="text-gray-500 mt-3 max-w-xl mx-auto text-base">
              From restaurant food delivery to parcel dispatch and business
              errands — we've got Enugu covered.
            </p>
          </div>

          <!-- Services grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Service Card 1: Food Delivery -->
            <article
              class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              aria-label="Food delivery service in Enugu by Riderjet Logistics"
            >
              <div
                class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-6 h-6 text-orange-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-gray-900 text-lg mb-1">
                Food Delivery Enugu
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Hot meals from your favourite Enugu restaurants delivered to
                your door — fast and fresh by our dispatch riders.
              </p>
            </article>

            <!-- Service Card 2: Parcel & Document -->
            <article
              class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              aria-label="Parcel and document dispatch service in Enugu"
            >
              <div
                class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-6 h-6 text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 3H8L4 7h16l-4-4z"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-gray-900 text-lg mb-1">
                Parcel &amp; Document Dispatch
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Secure pickup and same-day delivery of parcels, packages, and
                important documents anywhere in Enugu State.
              </p>
            </article>

            <!-- Service Card 3: Errands & Pickups -->
            <article
              class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              aria-label="Personal and business errand service in Enugu"
            >
              <div
                class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-6 h-6 text-purple-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-gray-900 text-lg mb-1">
                Errands &amp; Pickups Enugu
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Personal or business errands — shopping runs, market pickups,
                bill payments, and more handled by trusted riders in Enugu.
              </p>
            </article>

            <!-- Service Card 4: Warehousing -->
            <article
              class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              aria-label="Warehousing and business logistics in Enugu by Riderjet"
            >
              <div
                class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-6 h-6 text-emerald-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-gray-900 text-lg mb-1">
                Warehousing &amp; Business Logistics
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Flexible short-term storage and B2B delivery fulfilment for
                Enugu businesses — reliable courier &amp; logistics partner.
              </p>
            </article>
          </div>
          <!-- /grid -->
        </div>
      </section>

      <!-- ============================================================
           WHY RIDERJET SECTION
      ============================================================ -->
      <section
        id="why-riderjet"
        aria-labelledby="why-heading"
        class="py-20 bg-white"
      >
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <span
              class="text-blue-600 font-bold text-sm uppercase tracking-widest"
              >Why Choose Us</span
            >
            <h2
              id="why-heading"
              class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2"
            >
              Enugu's Most Trusted Dispatch &amp; Delivery Team
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Benefit: Safe -->
            <div
              class="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-200"
            >
              <div
                class="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-7 h-7 text-green-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-gray-900 text-lg mb-2">
                Safe &amp; Secure
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Every item handled with care. Verified, trusted riders you can
                rely on across Enugu.
              </p>
            </div>

            <!-- Benefit: Fast -->
            <div
              class="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
            >
              <div
                class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-7 h-7 text-blue-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-gray-900 text-lg mb-2">
                Lightning Fast
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Instant pickup dispatch with speed that keeps your deliveries on
                time, every time in Enugu.
              </p>
            </div>

            <!-- Benefit: Reliable -->
            <div
              class="text-center p-6 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors duration-200"
            >
              <div
                class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-7 h-7 text-emerald-600"
                >
                  <path
                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-gray-900 text-lg mb-2">
                Truly Reliable
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Consistent, dependable service you can count on for all your
                Enugu delivery and errand needs.
              </p>
            </div>

            <!-- Benefit: Enugu-Wide -->
            <div
              class="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-200"
            >
              <div
                class="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-7 h-7 text-orange-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-gray-900 text-lg mb-2">
                Enugu-Wide Coverage
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                GRA, Independence Layout, New Haven, Trans-Ekulu, Ogui, Abakpa
                &amp; beyond — we cover all of Enugu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================================
           HOW IT WORKS SECTION
      ============================================================ -->
      <section
        id="how-it-works"
        aria-labelledby="how-heading"
        class="py-20 bg-linear-to-br from-slate-900 to-emerald-950 text-white"
      >
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-12">
            <span
              class="text-green-400 font-bold text-sm uppercase tracking-widest"
              >Simple Process</span
            >
            <h2
              id="how-heading"
              class="text-3xl sm:text-4xl font-extrabold text-white mt-2"
            >
              Book a Delivery in Enugu — 3 Easy Steps
            </h2>
          </div>

          <ol class="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            <!-- Step 1 -->
            <li class="flex flex-col items-center text-center">
              <div class="relative mb-5">
                <div
                  class="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <!-- WhatsApp icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-8 h-8 text-green-400"
                  >
                    <path
                      d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.94a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.69.97.98-3.61-.24-.37A9.93 9.93 0 0 1 2.06 12C2.06 6.5 6.5 2.06 12 2.06S21.94 6.5 21.94 12 17.5 21.94 12 21.94zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.14 8.14 0 0 1-2.4-1.48 9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
                    />
                  </svg>
                </div>
                <span
                  class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-extrabold flex items-center justify-center"
                  aria-hidden="true"
                  >1</span
                >
              </div>
              <h3 class="font-extrabold text-lg text-white mb-2">
                Chat Us on WhatsApp
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Open WhatsApp and send us a message. We're online and ready to
                receive your booking.
              </p>
            </li>

            <!-- Connector arrow (hidden on mobile) -->
            <div
              class="hidden md:flex items-center justify-center text-green-600/40 text-3xl font-thin -mt-8"
              aria-hidden="true"
            >
              →
            </div>

            <!-- Step 2 -->
            <li class="flex flex-col items-center text-center">
              <div class="relative mb-5">
                <div
                  class="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-8 h-8 text-blue-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.751 3.5-8.318a6.5 6.5 0 00-13 0c0 3.567 1.556 6.305 3.5 8.318a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-extrabold flex items-center justify-center"
                  aria-hidden="true"
                  >2</span
                >
              </div>
              <h3 class="font-extrabold text-lg text-white mb-2">
                Share Pickup &amp; Drop-off Details
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Tell us what you need delivered, the pickup address, and your
                destination in Enugu.
              </p>
            </li>

            <!-- Connector arrow (hidden on mobile) -->
            <div
              class="hidden md:flex items-center justify-center text-green-600/40 text-3xl font-thin -mt-8"
              aria-hidden="true"
            >
              →
            </div>

            <!-- Step 3 -->
            <li class="flex flex-col items-center text-center">
              <div class="relative mb-5">
                <div
                  class="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-8 h-8 text-emerald-400"
                  >
                    <path
                      d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875H3.375zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z"
                    />
                    <path
                      d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z"
                    />
                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                  </svg>
                </div>
                <span
                  class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-extrabold flex items-center justify-center"
                  aria-hidden="true"
                  >3</span
                >
              </div>
              <h3 class="font-extrabold text-lg text-white mb-2">
                We Deliver Safe &amp; Fast
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Our rider picks up instantly and delivers safely to your
                location across Enugu. Done!
              </p>
            </li>
          </ol>
        </div>
      </section>

      <!-- ============================================================
           CTA SECTION
      ============================================================ -->
      <section
        id="book-now"
        aria-labelledby="cta-heading"
        class="py-20 bg-white"
      >
        <div class="max-w-2xl mx-auto px-4 text-center">
          <!-- Pulsing online indicator -->
          <div
            class="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            <span
              class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"
              aria-hidden="true"
            ></span>
            We're Online 24/7 in Enugu — Ready to Dispatch!
          </div>

          <h2
            id="cta-heading"
            class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            Need a Delivery or Pickup in Enugu?
          </h2>
          <p class="text-gray-500 text-base mb-8 leading-relaxed">
            Chat us now on WhatsApp to book your delivery, food order, errand,
            or parcel dispatch in Enugu.
            <strong class="text-gray-800"
              >Safe, Fast and Reliable — Riderjet Logistics.</strong
            >
          </p>

          <a
            href="https://wa.me/2349015395139?text=Hello%20Riderjet%20Logistics%2C%20I%20want%20to%20book%20a%20delivery%2Fpickup%20in%20Enugu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp to book a delivery or pickup with Riderjet Logistics in Enugu"
            class="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 active:scale-95 text-white font-extrabold text-xl px-10 py-5 rounded-2xl shadow-lg shadow-green-200 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-7 h-7"
              aria-hidden="true"
            >
              <path
                d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.94a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.69.97.98-3.61-.24-.37A9.93 9.93 0 0 1 2.06 12C2.06 6.5 6.5 2.06 12 2.06S21.94 6.5 21.94 12 17.5 21.94 12 21.94zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.14 8.14 0 0 1-2.4-1.48 9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
              />
            </svg>
            Chat on WhatsApp to Book Now
          </a>

          <!-- NAP for SEO consistency -->
          <address class="not-italic mt-8 text-sm text-gray-400 space-y-1">
            <p>
              <strong class="text-gray-600">Riderjet Logistics</strong> — Enugu,
              Nigeria
            </p>
            <p>
              WhatsApp / Call:
              <a
                href="tel:+2349015395139"
                class="text-green-600 hover:underline font-semibold"
                aria-label="Call Riderjet Logistics Enugu"
                >+234 901 539 5139</a
              >
            </p>
          </address>
        </div>
      </section>
    </main>

    <!-- ============================================================
         FOOTER
    ============================================================ -->
    <footer
      class="bg-gray-950 text-gray-400 pt-12 pb-8"
      role="contentinfo"
      aria-label="Riderjet Logistics footer"
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <!-- Brand column -->
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div
                class="w-9 h-9 rounded-lg bg-linear-to-br from-green-500 to-emerald-700 flex items-center justify-center"
                aria-hidden="true"
              >
                <img
                  src="/src/assets/riderjet_logo.jpg"
                  alt="riderjet logo"
                  class="w-8 h-8 rounded-sm object-cover"
                />
              </div>
              <div>
                <span class="font-extrabold text-white text-lg leading-none"
                  >Riderjet</span
                >
                <span
                  class="block text-xs text-green-500 font-semibold leading-none"
                  >LOGISTICS</span
                >
              </div>
            </div>
            <p class="text-sm leading-relaxed mb-2">
              <em class="text-green-400 not-italic font-semibold"
                >Safe, Fast and Reliable</em
              >
              — your trusted dispatch riders and delivery service in Enugu,
              Nigeria.
            </p>
            <address class="not-italic text-sm text-gray-500 mt-3 space-y-1">
              <p>📍 Enugu, Nigeria</p>
              <p>
                📞
                <a
                  href="tel:+2349015395139"
                  class="hover:text-green-400 transition-colors"
                  aria-label="Call Riderjet Logistics"
                  >+234 901 539 5139</a
                >
              </p>
            </address>
          </div>

          <!-- Services column -->
          <div>
            <h3
              class="text-white font-bold mb-4 text-sm uppercase tracking-widest"
            >
              Our Services in Enugu
            </h3>
            <ul class="space-y-2 text-sm">
              <li>🍔 Food Delivery Enugu</li>
              <li>📦 Parcel &amp; Document Dispatch</li>
              <li>🛒 Errands &amp; Pickups</li>
              <li>🏢 Warehousing &amp; Business Logistics</li>
              <li>🚀 Instant Courier Service Enugu</li>
            </ul>
          </div>

          <!-- Contact / Social column -->
          <div>
            <h3
              class="text-white font-bold mb-4 text-sm uppercase tracking-widest"
            >
              Connect With Us
            </h3>
            <div class="flex flex-col gap-3">
              <!-- WhatsApp -->
              <a
                href="https://wa.me/2349015395139?text=Hello%20Riderjet%20Logistics%2C%20I%20want%20to%20book%20a%20delivery%2Fpickup%20in%20Enugu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat Riderjet Logistics on WhatsApp"
                class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.94a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.69.97.98-3.61-.24-.37A9.93 9.93 0 0 1 2.06 12C2.06 6.5 6.5 2.06 12 2.06S21.94 6.5 21.94 12 17.5 21.94 12 21.94zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.14 8.14 0 0 1-2.4-1.48 9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
                  />
                </svg>
                WhatsApp: +234 901 539 5139
              </a>

              <!-- Instagram -->
              <a
                href="https://instagram.com/riderjet_enugu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Riderjet Logistics on Instagram @riderjet_enugu"
                class="inline-flex items-center gap-2 text-sm hover:text-pink-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
                Instagram: @riderjet_enugu
              </a>

              <!-- TikTok -->
              <a
                href="https://tiktok.com/@riderjet_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Riderjet Logistics on TikTok @riderjet_"
                class="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                  />
                </svg>
                TikTok: @riderjet_
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div
          class="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600"
        >
          <p>
            © 2026 <strong class="text-gray-400">Riderjet Logistics</strong>.
            All rights reserved. Enugu, Nigeria.
          </p>
          <p class="italic text-gray-600">
            Safe, Fast and Reliable — Dispatch &amp; Delivery Service in Enugu
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import riderjetBike from "./assets/riderjet_bike_1.webp";

// ============================================================
// LocalBusiness JSON-LD Schema Markup for Local SEO
// Injected into <head> on mount
// ============================================================
onMounted(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Riderjet Logistics",
    description:
      "Fast, safe dispatch riders in Enugu for food delivery, parcel pickup & delivery, errands, and more. Safe, Fast and Reliable – Riderjet Logistics Enugu.",
    url: "https://riderjetlogistics.com",
    telephone: "+2349015395139",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Enugu",
      addressRegion: "Enugu State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.5244,
      longitude: 7.5086,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://instagram.com/riderjet_enugu",
      "https://tiktok.com/@riderjet_",
    ],
    priceRange: "₦",
    servesCuisine: null,
    areaServed: {
      "@type": "City",
      name: "Enugu",
    },
    keywords:
      "dispatch rider Enugu, food delivery Enugu, courier service Enugu, delivery service Enugu, logistics Enugu, errand service Enugu, pickup and delivery Enugu",
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);

  // Set <title> and <meta description> dynamically
  document.title =
    "Food Delivery & Dispatch Rider in Enugu – Riderjet Logistics | Safe, Fast, Reliable";

  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content =
    "Fast, safe dispatch riders in Enugu for food delivery, parcel pickup & delivery, errands, and more. Book now on WhatsApp! Safe, Fast and Reliable – Riderjet Logistics Enugu.";
});
</script>

<style scoped>
.hero-section {
  background-position: right center;
}

@media (max-width: 768px) {
  .hero-section {
    background-position: 95% center;
  }
}

@media (max-width: 640px) {
  .hero-section {
    background-position: right center;
  }
}
</style>

<!--
  No custom CSS required — all styling via Tailwind utilities.
  For production, ensure tailwind.config.js includes all template paths
  or use the Tailwind CDN script (Play CDN) for prototyping:

  <script src="https://cdn.tailwindcss.com"></script>

  Recommended index.html <head> additions for production SEO:
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://riderjetlogistics.com">
  <meta property="og:title" content="Food Delivery & Dispatch Rider in Enugu – Riderjet Logistics">
  <meta property="og:description" content="Fast, safe dispatch riders in Enugu. Book on WhatsApp!">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://riderjetlogistics.com">
-->
