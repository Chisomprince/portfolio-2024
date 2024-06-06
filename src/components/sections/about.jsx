export default function About() {
  return (
    <section class="px-12 mx-auto max-lg:px-5 py-20 lg:py-32">
      <div class="flex max-lg:flex-wrap gap-24 lg:gap-40 items-center">
        <div class="lg:w-6/12">
          <h2 class="text-[46px] text-black leading-[68.16px] max-md:max-w-full max-md:text-4xl">
            About
          </h2>
          <p class="mt-8 font-light text-black/50 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            delectus illum, sit, nemo inventore ratione est harum accusamus
            aliquam rerum iste eligendi aut repellendus, facere tempore
            blanditiis amet voluptatum? Fuga animi aliquid natus perspiciatis,
            harum odio voluptate laudantium atque accusantium ullam dolor dolore
            aliquam a optio, facere maxime? Quibusdam assumenda culpa suscipit
            officia officiis fugiat.
          </p>

          <button class="border-b border-black/50 mt-12 text-xs uppercase tracking-widest py-1">
            Connect with me
          </button>
        </div>
        <div class="lg:w-6/12">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="object-cover size-full max-h-[500px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
