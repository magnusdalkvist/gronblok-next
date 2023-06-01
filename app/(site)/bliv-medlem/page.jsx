import Image from "next/image";

export default function page() {
  return (
    <div className="text-darkGreen p-4 flex flex-col gap-8 max-w-[1200px] mx-auto">
      <h1 className="text-orangeAccent">Gør en forskel. Bliv medlem.</h1>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_minmax(auto,600px)] gap-8">
        <form action="" className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="firstname" className="flex flex-col ">
              Fornavn
              <input
                className="bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
              />
            </label>
            <label htmlFor="lastname" className="flex flex-col ">
              Efternavn
              <input
                className="bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
              />
            </label>
          </div>
          <label htmlFor="email" className="flex flex-col">
            Email
            <input
              className="bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen"
              type="email"
              name="email"
              id="email"
              placeholder="john@doe.dk"
            />
          </label>
          <div>
            <label htmlFor="message" className="flex flex-col flex-1">
              Hvad er dine mærkesager?
              <div className="flex gap-4 items-center">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen flex-1"
                  placeholder="Dyremishandling, vegetariske retter,"
                />
                <input
                  type="submit"
                  value={"BLIV MEDLEM"}
                  className="bg-darkGreen text-lightBeige rounded py-2 px-6"
                />
              </div>
            </label>
          </div>
        </form>
        <div className="flex flex-col gap-4">
          <div className="w-3/4 max-w-[500px]">
            <h3>Det er gratis at være medlem</h3>
            <div className="mt-4">
              <div className="w-full bg-darkGreen h-[1px]" />
              <div className="w-[7px] h-[7px] bg-darkGreen -translate-y-1" />
            </div>
          </div>
          <div className="ml-auto w-3/4 max-w-[500px] text-right">
            <h3>& du vælger selv, hvor meget du vil engagere dig.</h3>
            <div className="flex justify-end mt-4">
              <div className="w-full bg-darkGreen h-[1px]" />
              <div className="w-[7px] h-[7px] bg-darkGreen -translate-y-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h2>Sådan gør du en forskel</h2>
          <p>
            Når du melder dig ind i GRØN BLOK repræsenterer du en del af danmarks grønne stemme og
            du viser dermed virksomhederne, politikerne og dig selv, at du tager stilling og ønsker
            at bidrage til den grønne omstilling. Dit medlemskab betyder derfor, at vi kan indgå en
            dialog med beslutningstagerne med en større forhandlingsstyrke og danmarks grønne stemme
            i ryggen.
          </p>
          <Image
            src="/markus-spiseske.webp"
            width={500}
            height={500}
            alt="Markus Spiske"
            className="object-cover w-full"
          />
        </div>
        <div className="" datatype="numberedInfoList">
          <div className={"flex border-b border-darkGreen"}>
            <div
              className={
                "text-[80px] w-1/4 flex justify-center items-center font-bold py-8 px-4 items-start relative"
              }
            >
              <div className="sticky top-8 text-orangeAccent text-h2-web">01</div>
            </div>
            <div className="flex flex-col w-3/4 py-8 px-4 border-l border-darkGreen">
              <div>
                <h3>Giv din mening til kende</h3>
                <p>
                  Når du melder dig ind i GRØN BLOK, svarer du på hvilke grønne mærkesager du kæmper
                  for at udvikle. <br /> <br />
                  ■ Det gør du, så vi kan tematisere hvilke grønne tiltag danskerne ønsker at
                  udvikle. <br /> <br /> ■ Meld dig ind nederst på siden
                </p>
              </div>
            </div>
          </div>
          <div className={"flex border-b border-darkGreen flex-row-reverse"}>
            <div
              className={
                "text-[80px] w-1/4 flex justify-center items-center font-bold py-8 px-4 items-start relative"
              }
            >
              <div className="sticky top-8 text-orangeAccent text-h2-web">02</div>
            </div>
            <div className="flex flex-col w-3/4 py-8 px-4 border-r border-darkGreen">
              <div>
                <h3>Giv din mening til kende</h3>
                <p>
                  Når du melder dig ind i GRØN BLOK, svarer du på hvilke grønne mærkesager du kæmper
                  for at udvikle. <br /> <br />
                  ■ Det gør du, så vi kan tematisere hvilke grønne tiltag danskerne ønsker at
                  udvikle. <br /> <br /> ■ Meld dig ind nederst på siden
                </p>
              </div>
            </div>
          </div>
          <div className={"flex"}>
            <div
              className={
                "text-[80px] w-1/4 flex justify-center items-center font-bold py-8 px-4 items-start relative"
              }
            >
              <div className="sticky top-8 text-orangeAccent text-h2-web">03</div>
            </div>
            <div className="flex flex-col w-3/4 py-8 px-4 border-l border-darkGreen">
              <div>
                <h3>Giv din mening til kende</h3>
                <p>
                  Når du melder dig ind i GRØN BLOK, svarer du på hvilke grønne mærkesager du kæmper
                  for at udvikle. <br /> <br />
                  ■ Det gør du, så vi kan tematisere hvilke grønne tiltag danskerne ønsker at
                  udvikle. <br /> <br /> ■ Meld dig ind nederst på siden
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}