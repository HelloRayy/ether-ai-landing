export function ContainerCard() {
  return (
    <section
      aria-label="Features and synthesis tools"
      className="relative z-10 mx-auto mt-28 mb-32 flex w-full max-w-[1084px] flex-col items-center justify-center gap-6 lg:flex-row"
    >
      {/* Card 1: Automated Image Synthesis and Design (530x357 in Pen) */}
      <div className="relative flex h-[357px] w-full max-w-[530px] flex-col justify-between rounded-[14px] bg-[#19161c] px-7 py-8 shadow-[0_58px_70px_rgba(0,0,0,0.16)] sm:px-[44px] sm:pt-[42px] sm:pb-[40px]">
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-[family-name:var(--font-darker)] text-[40px] font-normal leading-[0.95] text-white max-w-[342px]">
            Automated Image Synthesis and Design
          </h3>
          <p className="font-[family-name:var(--font-work)] text-[16px] font-normal leading-[1.71] text-[#c4c4c4] max-w-[441px]">
            With AI-powered image generation, designers and creatives can
            streamline their workflows and unlock new levels of efficiency.
          </p>
        </div>

        {/* Buttons Row: YouTube & Podcast */}
        <div className="flex items-center gap-[22px]">
          {/* YouTube Pill */}
          <a
            href="#youtube"
            className="flex h-[44px] w-[189px] items-center justify-between rounded-[24px] border border-white px-5 text-white cursor-pointer select-none"
          >
            <span className="font-[family-name:var(--font-work)] text-[15px] font-normal leading-[1.33]">
              YouTube
            </span>
            <svg
              className="h-[19px] w-[26px] shrink-0"
              viewBox="0 0 26 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.4567 2.85063c-0.299-1.12212-1.1799-2.00573-2.2987-2.30562-2.0275-0.54501-10.158-0.54501-10.158-0.54501 0 0-8.13042 0-10.15804 0.54501-1.11863 0.29989-1.99968 1.1835-2.29866 2.30562-0.5433 2.03374-0.5433 6.27698-0.5433 6.27698 0 0 0 4.2433 0.5433 6.2772 0.29897 1.122 1.18003 2.0056 2.29866 2.3056 2.02762 0.5449 10.15804 0.5449 10.15804 0.5449 0 0 8.1305 0 10.158-0.5449 1.1188-0.3 1.9997-1.1836 2.2987-2.3056 0.5433-2.0339 0.5433-6.2772 0.5433-6.2772 0 0 0-4.24324-0.5433-6.27698z"
                fill="#ed1d24"
              />
              <path
                d="M10.473 13.545l6.795-3.852-6.795-3.853v7.705z"
                fill="#ffffff"
              />
            </svg>
          </a>

          {/* Podcast Pill */}
          <a
            href="#podcast"
            className="flex h-[44px] w-[189px] items-center justify-between rounded-[24px] border border-white px-5 text-white cursor-pointer select-none"
          >
            <span className="font-[family-name:var(--font-work)] text-[14px] font-normal leading-[1.43]">
              Podcast
            </span>
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="podcast-grad"
                  x1="0"
                  y1="24"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#832bc1" />
                  <stop offset="100%" stopColor="#f452ff" />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5253 20.8018c-0.2333 0.5926-0.7716 1.4269-1.535 2.0147-0.4408 0.3395-0.967 0.664-1.6897 0.8781-0.7705 0.2283-1.7195 0.3055-2.9007 0.3055l-10.79992 0c-1.18107 0-2.13008-0.0772-2.90064-0.3055-0.72278-0.2141-1.24888-0.5386-1.68972-0.8781-0.76331-0.5878-1.30172-1.422-1.53502-2.0147-0.46983-1.194-0.4746-2.5487-0.4746-3.4018l0-10.80002c0-0.85307 0.00477-2.20782 0.4747-3.40176 0.23329-0.59258 0.77161-1.42695 1.53501-2.01467 0.44075-0.33945 0.96695-0.66393 1.68963-0.87805 0.77056-0.22834 1.71957-0.3055 2.90064-0.3055l10.80002 0c1.1811 0 2.1301 0.07716 2.9007 0.3055 0.7227 0.21412 1.2488 0.5387 1.6897 0.87805 0.7633 0.58781 1.3017 1.42209 1.535 2.01467 0.4698 1.19394 0.4746 2.54869 0.4746 3.40176l0 10.79992c0 0.8532-0.0048 2.2079-0.4747 3.4019z"
                fill="url(#podcast-grad)"
              />
              <path
                d="M14.077 14.168c-.36-.38-.993-.624-1.74-.624s-1.38.244-1.74.624c-.188.198-.287.402-.319.691-.06.561-.026 1.044.04 1.816.062.735.181 1.716.336 2.715.11.711.2 1.095.282 1.37.132.445.627.835 1.401.835s1.268-.39 1.4-.835c.082-.275.172-.659.282-1.37.155-.999.274-1.98.337-2.715.065-.772.1-1.255.039-1.816-.031-.29-.131-.493-.319-.691zm-3.702-3.383c0 1.085.88 1.964 1.965 1.964s1.964-.879 1.964-1.964-.88-1.964-1.964-1.964-1.965.88-1.965 1.964zm1.94-7.751c-4.594.013-8.358 3.74-8.415 8.333-.046 3.721 2.33 6.904 5.646 8.07.08.029.162-.038.15-.122-.044-.289-.085-.58-.123-.865-.013-.101-.077-.188-.17-.229-2.622-1.145-4.453-3.775-4.423-6.82.038-3.997 3.302-7.255 7.299-7.287 4.086-.034 7.42 3.28 7.42 7.359 0 3.015-1.822 5.612-4.423 6.748-.093.041-.157.128-.17.229-.038.285-.079.576-.123.864-.012.085.07.152.15.123 3.285-1.155 5.646-4.289 5.646-7.964 0-4.662-3.8-8.453-8.464-8.44zm-.153 3.872c2.604-.1 4.755 1.988 4.755 4.57 0 1.314-.557 2.5-1.446 3.334-.075.071-.116.172-.11.275.018.314.011.62-.01.964-.005.092.098.15.174.099 1.491-1.02 2.472-2.733 2.472-4.671 0-3.192-2.659-5.775-5.878-5.65-2.991.116-5.391 2.583-5.43 5.576-.025 1.969.962 3.713 2.472 4.745.076.052.179-.007.173-.099-.021-.345-.027-.65-.01-.964.006-.103-.034-.204-.11-.274-.917-.861-1.48-2.095-1.444-3.457.063-2.397 1.995-4.355 4.392-4.448z"
                fill="#ffffff"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Card 2: Create stunning visual in seconds (530x357 in Pen) */}
      <div className="relative flex h-[357px] w-full max-w-[530px] flex-col justify-between rounded-[14px] bg-[#19161c] px-7 py-8 shadow-[0_58px_70px_rgba(0,0,0,0.16)] sm:px-[54px] sm:pt-[49px] sm:pb-[40px]">
        <div className="flex flex-col gap-4">
          <h3 className="font-[family-name:var(--font-darker)] text-[40px] font-normal leading-[0.95] tracking-[1px] text-white max-w-[423px]">
            Create stunning visual in seconds
          </h3>
          <p className="font-[family-name:var(--font-work)] text-[16px] font-normal leading-[1.71] text-[#c4c4c4] max-w-[410px]">
            Generating innovative ideas is a crucial aspect of any creative
            endeavor. AI tools can help spark inspiration by analyzing vast
            amounts of data
          </p>
        </div>

        {/* Input Simulation Pill */}
        <div className="flex h-[64px] w-full max-w-[423px] items-center justify-between rounded-full bg-[#0a0a0a] py-[9px] pl-[21px] pr-[10px]">
          <span className="font-[family-name:var(--font-work)] text-[15px] font-normal leading-[1.33] text-[#848895]">
            Write Prompt to generate image
          </span>
          <button
            type="button"
            className="flex h-[46px] w-[104px] items-center justify-center rounded-full bg-[#d2ff3a] border border-black font-[family-name:var(--font-work)] text-[15px] font-medium leading-[1.33] text-black cursor-pointer select-none"
          >
            Generate
          </button>
        </div>
      </div>
    </section>
  )
}
