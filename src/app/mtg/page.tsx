import Image from "next/image";

export default function Page() {
  return (
    <div className="block">
      <main className="py-8 px-4">
        <div className="flex flex-row flex-wrap items-center gap-8 max-w-5xl m-auto md:flex-nowrap">
          <div className="basis-full grow-0 shrink-0 md:basis-1/2">
            <Image
              className="block m-auto"
              src="/images/magic-lead-pastor.jpg"
              alt="Mark Pettus, Lead Pastor"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="basis-full grow-0 shrink-0 md:basis-1/2">
            <h1 className="text-5xl font-display text-[#E94B3C] underline md:text-7xl">Mark Pettus, Lead Pastor</h1>
            <div className="mt-4 text-lg text-[#007E80] md:text-xl">
              <p>Haste</p>
              <p>When ~ enters the battlefield place a +1/+1 counter on all human creatures.</p>
              <p>2ct: Get fired up. All human creatures gain +1/+1 until the end of turn.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
