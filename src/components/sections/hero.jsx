export default function Hero({ contents }) {
  return (
    <>
      {contents?.map((item) => (
        <header
          key={item._key}
          class="px-12 mx-auto max-lg:px-5 h-screen max-h-screen overflow-hidden"
        >
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="object-cover absolute inset-0 size-full"
            alt=""
          />
          <div class="bg-black/80 absolute inset-0"></div>
          <nav class="absolute top-0 flex relative gap-5 justify-between items-center py-8 w-full text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div class="max-lg:hidden flex gap-12 justify-start self-stretch my-auto font-light leading-5 w-1/3 uppercase tracking-widest text-sm">
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
            <h1 class="text-center my-auto text-3xl leading-5 max-md:text-xl w-1/3">
              CHISOMPRINCE
            </h1>
            <div class="w-1/3 flex justify-end">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bfa6e31d071883ccf72491bae9ba9557b39bdb8bbbcbd1fc3000c8b994d315?apiKey=894bf0ae73b747b18982e9c406ce99e1&"
                class="shrink-0 self-stretch w-6 aspect-square"
                alt="Logo"
              />
            </div>
          </nav>
          <div class="flex relative gap-5 justify-between mt-48 max-md:flex-wrap max-md:max-w-full">
            <h1
              dangerouslySetInnerHTML={{ __html: item.heading }}
              class="max-lg:w-full w-6/12 text-6xl font-light leading-[68px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            />

            <div class="space-y-2.5 max-lg:hidden">
              <div class="flex items-center justify-center text-white border border-white/25 size-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div class="flex items-center justify-center text-white border border-white/25 size-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div class="flex items-center justify-center text-white border border-white/25 size-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <div class="flex items-center justify-center text-white border border-white/25 size-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </div>
            </div>
          </div>
          {item?.actions?.actions?.map((action) => (
            <button
              tabindex="0"
              class="mt-12 relative tracking-widest text-white/90 px-8 py-3 text-xs font-light text-white uppercase border border-white/50 border-solid rounded-full"
            >
              {action.label}
            </button>
          ))}
        </header>
      ))}
    </>
  );
}
