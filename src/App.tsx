import {
  ChevronDown,
  Settings,
  UserIcon,
  UserRoundIcon,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { FaGear } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";

type Page =
  | "accounts"
  | "interest"
  | "transfer"
  | "cards"
  | "support"
  | "details"
  | "profile";
type IconName =
  | "home"
  | "swap"
  | "chart"
  | "card"
  | "help"
  | "profile"
  | "plus"
  | "back"
  | "copy"
  | "more"
  | "phone"
  | "bank"
  | "briefcase"
  | "sparkle"
  | "send"
  | "lock"
  | "eye";

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-7h6v7" />
    </>
  ),
  swap: (
    <>
      <path d="M5 7h14l-4-4M19 17H5l4 4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V9m6 10V5m6 14v-7m5 7H2" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3 10h18" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.8 9a2.3 2.3 0 1 1 3.5 2c-.9.6-1.3 1.1-1.3 2M12 17h.01" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c.8-4.2 3.4-6 8-6s7.2 1.8 8 6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  back: <path d="m15 18-6-6 6-6" />,
  copy: (
    <>
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
    </>
  ),
  more: (
    <>
      <circle cx="5" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
    </>
  ),
  phone: (
    <>
      <path d="M7 3h3l2 5-2 1.5a14 14 0 0 0 4.5 4.5L16 12l5 2v3c0 2-2 4-4 4C9 21 3 15 3 7c0-2 2-4 4-4Z" />
    </>
  ),
  bank: (
    <>
      <path d="m3 9 9-5 9 5M5 10h14M6 10v7m4-7v7m4-7v7m4-7v7M3 20h18" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V4h6v3M3 12h18" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2Z" />
      <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
    </>
  ),
  send: <path d="m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2" />,
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
};

function Icon({ name, size = 26 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Avatar({ agent = false }: { agent?: boolean }) {
  const bg = agent
    ? "bg-gradient-to-br from-[#edc3a7] to-[#4f2a29]"
    : "bg-gradient-to-br from-[#d9a88c] to-[#684337]";
  const hairColor = agent ? "bg-[#261d18]" : "bg-[#38271f]";
  return (
    <span
      className={`relative flex-none w-[42px] h-[42px] overflow-hidden rounded-full ${bg}`}
    >
      <i className="absolute top-[7px] left-[13px] w-[15px] h-[17px] rounded-full bg-[#edba99]" />
      <i
        className={`absolute -bottom-[3px] left-2 w-[31px] h-[23px] rounded-t-full ${hairColor}`}
      />
    </span>
  );
}

const meta: Record<Page, { title: string; back?: boolean }> = {
  accounts: { title: "Teresita Karina Di Costa" },
  interest: { title: "Zinskonto", back: true },
  transfer: { title: "Überweisen", back: true },
  cards: { title: "Karten", back: true },
  support: { title: "Vivid Support" },
  details: { title: "Kontodetails", back: true },
  profile: { title: "Profil" },
};

function Header({
  page,
  navigate,
}: {
  page: Page;
  navigate: (page: Page) => void;
}) {
  const item = meta[page];
  const headerBg =
    page === "transfer"
      ? "bg-[#c7ace4] border-transparent"
      : page === "cards"
        ? "bg-[rgba(238,211,240,0.78)] border-transparent text-[#3b174b]"
        : "bg-white/96 border-[#f4eff5]";

  return (
    <header
      className={`absolute z-20 top-0 right-0 left-0 h-[116px] px-4 pt-2 pb-3 border-b backdrop-blur-xl ${headerBg}`}
    >
      <div className="h-[72px] flex items-center gap-3">
        {item.back ? (
          <button
            className="w-[42px] h-[42px] border-0 rounded-full grid place-items-center text-[#4a3b50] bg-[#f7f2f8]"
            onClick={() => navigate("accounts")}
            aria-label="Zurück"
          >
            <Icon name="back" />
          </button>
        ) : (
          <span className="relative inline-block ">
            <UserIcon className=" fill-black/90" />
            <span className="absolute -top-1 -right-1.5 flex items-center justify-center w-4 h-4 text-xs font-medium leading-none text-white bg-red-500 rounded-full z-10">
              3
            </span>
            <div className="absolute top-0 w-6 h-6 rounded-full border-3 border-white" />
          </span>
        )}
        <div className="min-w-0 flex-1">
          {/* Title is now a button that navigates to the profile page */}
          <button
            onClick={() => navigate("profile")}
            aria-label="Profil öffnen"
            className="flex items-center text-[16px] font-medium px-2 py-1 rounded-full bg-white w-max border-0 cursor-pointer"
          >
            {item.title} <ChevronDown size={24} />
          </button>
          <small
            className={`block mt-0.5 text-[17px] truncate ${
              page === "transfer" || page === "cards"
                ? "text-[#705778]"
                : "text-[#8d8490]"
            }`}
          >
            {page === "accounts"
              ? ""
              : page === "support"
                ? "In der Regel sofort erreichbar"
                : "Vivid Money"}
          </small>
        </div>

        <div className="flex gap-6 bg-white px-2 py-1  rounded-full">
          {page === "accounts" && (
            <button
              className="relative inline-flex items-center justify-center text-white"
              aria-label="Help"
            >
              <LuMessageSquare
                size={20}
                className="absolute fill-[#7c21dc] text-[#7c21dc]"
              />
              <span className="relative text-[10px] font-bold leading-none text-white">
                ?
              </span>
            </button>
          )}
          <button
            className={` ${
              page === "support"
                ? "text-white bg-[#7c21dc]"
                : "text-[#4a3b50] bg-[#f7f2f8]"
            }`}
            onClick={() => navigate("support")}
            aria-label="Support-Chat"
          >
            <FaGear size={20} className="text-[#7c21dc]" />
          </button>
        </div>
      </div>
    </header>
  );
}

const nav: { page: Page; label: string; icon: IconName }[] = [
  { page: "accounts", label: "Konten", icon: "home" },
  { page: "interest", label: "Zinsen", icon: "chart" },
  { page: "transfer", label: "Zahlen", icon: "swap" },
  { page: "cards", label: "Karten", icon: "card" },
];

function BottomNav({
  page,
  navigate,
}: {
  page: Page;
  navigate: (page: Page) => void;
}) {
  const selected =
    page === "details"
      ? "accounts"
      : page === "support" || page === "profile"
        ? null
        : page;
  return (
    <nav className="absolute z-30 right-0 bottom-0 left-0 h-[96px] px-1.5 pt-1.5 pb-[max(10px,env(safe-area-inset-bottom))] flex items-center bg-white/96 border-t border-[#eee8f0] shadow-[0_-8px_25px_rgba(52,31,57,0.05)] backdrop-blur-lg">
      {nav.map((item) => (
        <button
          key={item.page}
          className={`relative w-1/4 h-[72px] border-0 flex flex-col items-center justify-center gap-1 bg-transparent ${
            selected === item.page ? "text-[#7924d7]" : "text-[#918a94]"
          }`}
          onClick={() => navigate(item.page)}
        >
          {selected === item.page && (
            <span className="absolute top-0 w-[36px] h-1 rounded bg-[#8124df]" />
          )}
          <Icon name={item.icon} size={30} />
          <span className="text-[17px] font-semibold">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function AccountsPage({ navigate }: { navigate: (page: Page) => void }) {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [investOpen, setInvestOpen] = useState(true);

  return (
    <div className="min-h-full bg-white pb-4">
      {/* Cashback banner */}
      {bannerOpen && (
        <section className="relative mx-3 mt-3 mb-4 px-4 py-4 rounded-2xl bg-white shadow-[0_8px_16px_-4px_rgba(62,39,68,0.18)]">
          <div className="flex items-center justify-center gap-2.5">
            <img src="/alert.jpg" alt="" className="w-10 h-10" />

            <div className="pr-7">
              <strong className="block text-[15px] font-bold text-[#211a25]">
                Du hast ein Recht auf Cashback
              </strong>
              <p className="mt-1 m-0 text-[13px] leading-[1.35] text-[#59535b]">
                Wähle deine Kategorien und fange im Oktober an, Cashback zu
                verdienen. 🎉
              </p>
            </div>
          </div>
          <button
            onClick={() => setBannerOpen(false)}
            aria-label="Schließen"
            className="absolute top-3 right-3 w-6 h-6 rounded-full grid place-items-center border-0 text-white bg-[#96939e] text-xs leading-none"
          >
            <X className="p-1 text-white font-bold" />
          </button>
        </section>
      )}

      {/* Balance + add money */}
      <section className="flex items-center justify-between px-4 pt-3 pb-4">
        <div>
          <strong className="block text-[32px] tracking-[-0.045em] text-[#211a25]">
            255,57 €
          </strong>
          <small className="block -mt-2 text-[#8d8590] text-sm">
            Gesamtsaldo
          </small>
        </div>

        <button
          onClick={() => navigate("transfer")}
          className="flex items-center gap-1.5 px-4 py-[11px] border-0 rounded-2xl text-[#7c21dd] bg-[#f0eff1]/50 text-xs font-extrabold"
        >
          <Icon name="plus" size={18} />
          <span className="text-xs font-extrabold"> Geld hinzufügen</span>
        </button>
      </section>

      {/* Pockets grid */}
      <section className="grid grid-cols-2 gap-x-3 gap-y-5 px-3">
        {/* Money pocket */}
        <button
          onClick={() => navigate("details")}
          className="min-w-0 p-0 border-0 text-center bg-transparent"
        >
          <div className="relative h-[min(42vw,180px)] max-h-[180px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#c39cf0] to-[#9a6be0] shadow-[inset_0_1px_rgba(255,255,255,0.35)]">
            <span className="absolute inset-0 grid place-items-center">
              <span className="relative block w-[62%] aspect-square">
                <img
                  src="/goldenm-metallic.png"
                  alt=""
                  className="object-contain h-34 flex items-center justify-center"
                />
              </span>
            </span>
          </div>
          <strong className="block mt-2 text-[15px] text-[#211a25]">
            Money pocket
          </strong>
          <small className="block -mt-0.5 text-[#8d8590] text-[13px]">
            5.000,00 €
          </small>
        </button>

        {/* Cashback */}
        <button
          onClick={() => navigate("details")}
          className="min-w-0 p-0 border-0 text-center bg-transparent"
        >
          <div className="relative h-[min(42vw,180px)] max-h-[180px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#c39cf0] to-[#9a6be0] shadow-[inset_0_1px_rgba(255,255,255,0.35)]">
            <span className="absolute inset-0 grid place-items-center">
              <span className="relative block w-[62%] aspect-square">
                <img
                  src="/star.png"
                  alt=""
                  className="object-contain h-34 flex items-center justify-center"
                />
              </span>
            </span>
          </div>
          <strong className="block mt-2 text-[15px] text-[#211a25]">
            Cashback
          </strong>
          <small className="block -mt-0.5 text-[#22a06b] text-[13px] font-semibold">
            Hol dir deine Prämie
          </small>
        </button>

        {/* Interest Rate Pocket */}
        <button
          onClick={() => navigate("interest")}
          className="min-w-0 p-0 border-0 text-center bg-transparent"
        >
          <div className="relative h-[min(42vw,180px)] max-h-[180px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#c9a6ee] to-[#9a6be0] shadow-[inset_0_1px_rgba(255,255,255,0.35)]">
            <span className="absolute inset-0 grid place-items-center">
              <span className="relative block w-[62%] aspect-square">
                <img
                  src="/golden-money.png"
                  alt=""
                  className="object-contain h-34 flex items-center justify-center"
                />
              </span>
            </span>
          </div>
          <strong className="block mt-2 text-[15px] text-[#211a25]">
            Interest Rate Pocket
          </strong>
          <small className="block -mt-0.5 text-[#8d8590] text-[13px]">
            0,00 €
          </small>
        </button>

        {/* Invest-Pocket */}
        <button
          onClick={() => navigate("details")}
          className="relative min-w-0 p-0 border-0 text-center bg-transparent"
        >
          <div className="relative h-[min(42vw,180px)] max-h-[180px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#c39cf0] to-[#9a6be0] shadow-[inset_0_1px_rgba(255,255,255,0.35)]">
            <span className="absolute inset-0 grid place-items-center">
              <span className="relative block w-[62%] aspect-square">
                <img
                  src="/Glossycoin.png"
                  alt=""
                  className="object-contain h-34 flex items-center justify-center"
                />
              </span>
            </span>
          </div>
          <strong className="block mt-2 text-[15px] text-[#211a25]">
            Invest-Pocket
          </strong>
          <small className="block mt-0.5 text-[#9a54d6] text-[9px] font-semibold">
            Werde Eigentümer deiner Aktien und ETFs
          </small>
        </button>
      </section>
    </div>
  );
}

function Transaction({ date, amount }: { date: string; amount: string }) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <span className="w-[42px] h-[42px] rounded-full grid place-items-center text-white bg-[#39b987] text-xl font-bold">
        €
      </span>
      <div className="flex-1">
        <strong className="block text-xl">Zinsen</strong>
        <small className="block mt-0.5 text-[#9a929d] text-[17px]">
          {date} ausgezahlt
        </small>
      </div>
      <b className="text-[#29a774] text-lg">{amount}</b>
    </div>
  );
}

function InterestPage() {
  return (
    <div className="min-h-full bg-[#faf8fa]">
      <section className="h-[240px] grid place-items-center bg-gradient-to-br from-[#9260dc] to-[#d9bde9]">
        <img
          src="/golden-money.png"
          alt=""
          className="object-contain h-54 flex items-center justify-center"
        />
      </section>
      <section className="px-[17px] pt-4 pb-4 bg-white">
        <small className="block text-[#756f78] text-lg">
          <b className="text-[#30a66f]">↗ 473 €</b> · 4 % p.a.
        </small>
        <strong className="block mt-1 text-[52px] tracking-[-0.06em]">
          233.67<span className="text-2xl">. 77</span> €
        </strong>
      </section>
      <section className="px-[17px] py-4">
        <Transaction date="Heute" amount="+18,82 €" />
        <Transaction date="Vergangener Monat" amount="+16,92 €" />
        <p className="text-[#98909a] text-[17px] leading-[1.4]">
          Deine Zinsen werden täglich berechnet und monatlich gutgeschrieben.
        </p>
      </section>
    </div>
  );
}

function TransferPage() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [amount, setAmount] = useState("99");

  function pressKey(key: string) {
    if (key === "back") {
      setAmount((current) => current.slice(0, -1));
      return;
    }
    setAmount((current) => {
      if (key === "," && current.includes(",")) return current;
      if (current === "0" && key !== ",") return key;
      return current + key;
    });
  }

  const options: { icon: IconName; title: string; detail: string }[] = [
    { icon: "phone", title: "Handynummer", detail: "An einen Kontakt senden" },
    { icon: "bank", title: "Neue IBAN", detail: "Neue Bankverbindung" },
    {
      icon: "sparkle",
      title: "Gespeicherte IBAN",
      detail: "Bekannte Empfänger",
    },
    {
      icon: "briefcase",
      title: "Unternehmen",
      detail: "Geschäftlich bezahlen",
    },
  ];

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ",", "0", "back"];

  return (
    <div className="relative min-h-full bg-[#c7ace4] overflow-hidden">
      <section className="pt-[18px] pb-6">
        <div className="text-center text-[88px] font-bold tracking-[-0.08em] text-[#7723dc]">
          {amount || "0"}
          <sup className="ml-2 text-4xl align-top">€</sup>
        </div>
        <div className="w-max mx-auto mt-4 flex items-center gap-3">
          <div className="w-[48px] h-[48px] rounded-xl overflow-hidden relative bg-gradient-to-br from-[#9c55e4] to-[#c89cf3]">
            <span className="absolute top-[54%] left-1/2 scale-[0.25]">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <i
                  key={n}
                  className="absolute bottom-0 -left-3 w-6 h-[65px] rounded-[55%_55%_35%_35%] bg-gradient-to-b from-[#fffbd7] to-[#c6b776] origin-[12px_100%]"
                  style={{ transform: `rotate(${n * 51.4}deg)` }}
                />
              ))}
            </span>
          </div>
          <span>
            <strong className="block text-xl">Vivid Rewards</strong>
            <small className="block text-[#765f7b] text-[17px]">
              Endet auf 6412
            </small>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-y-3 mt-6 px-3">
          {keys.map((key) => (
            <button
              key={key}
              onClick={() =>
                key === "back" ? pressKey("back") : pressKey(key)
              }
              className="border-0 bg-transparent text-[#58465d] text-[42px] font-medium h-16 grid place-items-center"
              aria-label={key === "back" ? "Löschen" : key}
            >
              {key === "back" ? (
                <span className="text-[42px] leading-none">⌫</span>
              ) : (
                key
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setSheetOpen(true)}
          className="mx-auto mt-6 block px-8 py-4 border-0 rounded-[14px] bg-[#7c21dd] text-white text-xl font-bold shadow-[0_5px_15px_rgba(118,24,211,0.3)]"
        >
          Überweisen
        </button>
      </section>

      {sheetOpen && (
        <div
          className="absolute inset-0 z-[10] bg-black/30"
          onClick={() => setSheetOpen(false)}
        />
      )}
      <section
        className={`absolute z-[11] right-0 bottom-0 left-0 min-h-[400px] px-5 pt-5 pb-6 rounded-t-2xl bg-white transition-transform duration-300 ${
          sheetOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-12 h-1.5 mx-auto mb-4 rounded-full bg-[#e0d8e3]" />
        <h2 className="mt-0 mb-3 text-3xl">Überweisen</h2>
        {options.map((option) => (
          <button
            key={option.title}
            className="w-full py-3 border-0 flex items-center text-left bg-transparent"
          >
            <span className="w-[48px] h-[48px] grid place-items-center rounded-xl text-[#7a24d8] bg-[#f5ecfa]">
              <Icon name={option.icon} size={26} />
            </span>
            <div className="flex-1 pl-4">
              <strong className="block text-xl">{option.title}</strong>
              <small className="block mt-0.5 text-[#9b939d] text-[17px]">
                {option.detail}
              </small>
            </div>
            <b className="text-[#b0a7b3] text-4xl">›</b>
          </button>
        ))}
      </section>
    </div>
  );
}

function PaymentCard({ accent }: { accent: string }) {
  return (
    <div
      className="relative w-[min(63vw,245px)] aspect-[0.64] m-auto overflow-hidden rounded-[13px] text-white shadow-[0_15px_31px_rgba(63,18,88,0.27)] transition-[background] duration-[250ms]"
      style={
        {
          "--card-accent": accent,
          background: `radial-gradient(circle at 70% 15%, color-mix(in srgb, ${accent}, white 35%), transparent 28%), linear-gradient(140deg, #100922, ${accent} 49%, #230747)`,
        } as React.CSSProperties
      }
    >
      <span className="absolute z-[2] top-[11%] left-[46%] w-[40px] h-[49px] rounded-[7px] bg-gradient-to-br from-[#eee2c9] to-[#af9a77] shadow-[inset_0_0_0_1px_#8f7c5f]">
        <i className="absolute top-4 w-full h-px bg-[#887658]" />
        <i className="absolute left-[19px] w-px h-full bg-[#887658]" />
      </span>
      <strong className="absolute z-[2] top-[43%] left-[7%] text-white/31 text-[51px] tracking-[-0.09em]">
        vivid
      </strong>
      <span className="absolute top-[45%] right-[7%] rotate-90">)))</span>
      <span className="absolute right-[7%] bottom-[6%] text-right">
        <b className="block text-4xl italic tracking-[-0.06em]">VISA</b>
        <small className="block -mt-1 text-[11px]">PLATINUM DEBIT</small>
      </span>
    </div>
  );
}

function CardsPage() {
  const [virtual, setVirtual] = useState(false);
  const [color, setColor] = useState("#7623dc");
  const colors = ["#7623dc", "#3acbb9", "#f14b76", "#f59a31", "#d8c832"];
  return (
    <div className="min-h-full px-3 pt-8 pb-6 text-center bg-gradient-to-br from-[#d3aff0] via-[#f4dfe8] to-[#d6a4ef]">
      <div className="w-[280px] mx-auto mb-7 p-1 flex rounded-[20px] bg-white/22">
        <button
          className={`flex-1 p-3 border-0 rounded-[17px] text-lg ${
            !virtual
              ? "text-[#3b2841] bg-white/80 shadow-[0_2px_10px_rgba(82,46,87,0.08)]"
              : "text-[#715978] bg-transparent"
          }`}
          onClick={() => setVirtual(false)}
        >
          Physisch
        </button>
        <button
          className={`flex-1 p-3 border-0 rounded-[17px] text-lg ${
            virtual
              ? "text-[#3b2841] bg-white/80 shadow-[0_2px_10px_rgba(82,46,87,0.08)]"
              : "text-[#715978] bg-transparent"
          }`}
          onClick={() => setVirtual(true)}
        >
          Virtuell
        </button>
      </div>
      <div
        className={`transition-transform duration-300 ${
          virtual ? "scale-[0.92] -rotate-y-[9deg]" : ""
        }`}
        style={{ perspective: "700px" }}
      >
        <PaymentCard accent={color} />
      </div>
      <div className="flex justify-center gap-3 mx-auto mt-6 mb-5">
        {colors.map((item) => (
          <button
            key={item}
            onClick={() => setColor(item)}
            className={`w-10 h-10 p-0 border-0 rounded-full ${
              color === item
                ? "outline-2 outline-white outline-offset-[3px]"
                : ""
            }`}
            style={{ background: item }}
          />
        ))}
      </div>
      <button className="px-6 py-3 border-0 rounded-[19px] bg-white shadow-[0_4px_13px_rgba(80,49,82,0.1)] text-xl">
        <b className="text-[#4285f4] text-2xl">G</b> Pay
      </button>
    </div>
  );
}

function SupportPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  function send() {
    if (!message.trim()) return;
    setMessages((current) => [...current, message.trim()]);
    setMessage("");
  }
  return (
    <div className="min-h-full flex flex-col bg-white">
      <section className="flex-1 px-[15px] pt-[17px] pb-[100px]">
        <div className="flex justify-end my-3">
          <p className="max-w-[79%] m-0 px-4 py-3.5 rounded-[18px_8px_18px_18px] text-white bg-[#7b1ddd] text-lg leading-[1.4] shadow-[0_3px_9px_rgba(111,22,200,0.15)]">
            Guten Morgen, ich brauche Hilfe mit einer Zahlung.
          </p>
        </div>
        <div className="flex items-center gap-3 my-4 mb-2">
          <span className="relative flex-none w-[42px] h-[42px] overflow-hidden rounded-full bg-gradient-to-br from-[#edc3a7] to-[#4f2a29]">
            <i className="absolute top-[7px] left-[13px] w-[15px] h-[17px] rounded-full bg-[#edba99]" />
            <i className="absolute -bottom-[3px] left-2 w-[31px] h-[23px] rounded-t-full bg-[#261d18]" />
          </span>
          <span>
            <strong className="block text-lg">Amelie</strong>
            <small className="block text-[#968e99] text-base">
              Vivid Support
            </small>
          </span>
        </div>
        <div className="flex my-3">
          <p className="max-w-[79%] m-0 px-4 py-3.5 rounded-[8px_18px_18px_18px] text-[#514754] bg-[#f3eef5] text-lg leading-[1.4]">
            Hallo Leonard! Schön, dass du dich meldest. Wie kann ich dir helfen?
          </p>
        </div>
        <div className="flex justify-end my-3">
          <p className="max-w-[79%] m-0 px-4 py-3.5 rounded-[18px_8px_18px_18px] text-white bg-[#7b1ddd] text-lg leading-[1.4] shadow-[0_3px_9px_rgba(111,22,200,0.15)]">
            Eine Überweisung wird noch als ausstehend angezeigt. Könnt ihr das
            prüfen?
          </p>
        </div>
        <div className="flex my-3">
          <p className="max-w-[79%] m-0 px-4 py-3.5 rounded-[8px_18px_18px_18px] text-[#514754] bg-[#f3eef5] text-lg leading-[1.4]">
            Natürlich. Die Überweisung wird gerade verarbeitet und sollte
            spätestens heute abgeschlossen sein. Ich behalte sie für dich im
            Blick.
          </p>
        </div>
        {messages.map((item, index) => (
          <div className="flex justify-end my-3" key={`${item}-${index}`}>
            <p className="max-w-[79%] m-0 px-4 py-3.5 rounded-[18px_8px_18px_18px] text-white bg-[#7b1ddd] text-lg leading-[1.4] shadow-[0_3px_9px_rgba(111,22,200,0.15)]">
              {item}
            </p>
          </div>
        ))}
      </section>
      <section className="absolute z-[5] right-0 bottom-0 left-0 px-3 pt-3 pb-4 bg-gradient-to-b from-transparent to-white">
        <div className="h-[64px] p-1.5 flex items-center rounded-[32px] bg-[#f5f1f6]">
          <button className="w-14 h-14 border-0 grid place-items-center text-[#7b27d4] bg-transparent">
            <Icon name="plus" size={26} />
          </button>
          <input
            className="min-w-0 flex-1 border-0 outline-none text-[#342a37] bg-transparent text-lg placeholder:text-[#a69ea8]"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && send()}
            placeholder="Nachricht schreiben"
          />
          <button
            className="w-14 h-14 border-0 grid place-items-center rounded-full text-white bg-[#7d21db]"
            onClick={send}
          >
            <Icon name="send" size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}

function DetailsPage({ navigate }: { navigate: (page: Page) => void }) {
  const [copied, setCopied] = useState("");
  function copy(value: string, label: string) {
    navigator.clipboard?.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1400);
  }
  const details = [
    { label: "Kontoinhaber", value: "Teresita Karina Di Costa" },
    { label: "IBAN", value: "DE89 3704 0044 0532 0130 00" },
    { label: "BIC / SWIFT", value: "VIVIDEFFXXX" },
    { label: "Bank", value: "Vivid Money S.A." },
  ];
  return (
    <div className="min-h-full px-[14px] pt-[18px] pb-6 bg-[#f8f5f9]">
      <section className="px-5 py-6 rounded-2xl text-white text-center bg-gradient-to-br from-[#5613ae] to-[#9035e8] shadow-[0_10px_25px_rgba(104,29,176,0.2)]">
        <span className="w-16 h-16 mx-auto grid place-items-center rounded-2xl bg-white/15">
          <Icon name="bank" size={32} />
        </span>
        <small className="block mt-3 opacity-75 text-[17px]">Hauptkonto</small>
        <strong className="block mt-1 text-[54px] tracking-[-0.05em]">
          8.620,00 €
        </strong>
        <p className="m-0 mt-1.5 opacity-70 text-[17px]">Deutsche IBAN</p>
      </section>
      <section className="mt-4 p-5 rounded-2xl bg-white shadow-[0_5px_17px_rgba(62,39,68,0.06)]">
        <h2 className="mt-0 mb-2 text-2xl">Kontodaten</h2>
        {details.map((detail) => (
          <button
            key={detail.label}
            className="w-full py-4 border-0 border-b border-[#f0ebf1] last:border-b-0 flex items-center text-left text-[#746b77] bg-transparent"
            onClick={() => copy(detail.value, detail.label)}
          >
            <span className="flex-1">
              <small className="block text-[#98909b] text-base">
                {detail.label}
              </small>
              <strong className="block mt-1 text-[#2a222d] text-xl">
                {detail.value}
              </strong>
            </span>
            <Icon name="copy" size={26} />
          </button>
        ))}
      </section>
      <section className="grid grid-cols-2 gap-3 mt-4">
        <button
          className="px-2 py-5 border-0 rounded-2xl text-[#6920ba] bg-white"
          onClick={() => navigate("transfer")}
        >
          <span className="w-[52px] h-[52px] mx-auto grid place-items-center rounded-2xl bg-[#f3e9fa]">
            <Icon name="swap" size={28} />
          </span>
          <strong className="block mt-2 text-lg">Überweisen</strong>
        </button>
        <button className="px-2 py-5 border-0 rounded-2xl text-[#6920ba] bg-white">
          <span className="w-[52px] h-[52px] mx-auto grid place-items-center rounded-2xl bg-[#f3e9fa]">
            <Icon name="lock" size={28} />
          </span>
          <strong className="block mt-2 text-lg">Einstellungen</strong>
        </button>
      </section>
      {copied && (
        <div className="fixed z-50 bottom-[110px] left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl text-white bg-[#2c2630] text-lg">
          {copied} kopiert
        </div>
      )}
    </div>
  );
}

function ProfilePage() {
  const profileDetails = [
    { label: "Vollständiger Name", value: "Teresita Karina Di Costa" },
    { label: "E-Mail-Adresse", value: "leonard.baumann@example.de" },
    { label: "Telefonnummer", value: "+49 151 23456789" },
    { label: "Geburtsdatum", value: "14. September 1992" },
    { label: "Wohnadresse", value: "Rosenthaler Straße 43, 10178 Berlin" },
  ];
  return (
    <div className="min-h-full px-[14px] pt-[18px] pb-6 bg-[#f8f5f9]">
      <section className="pt-2 pb-6 flex flex-col items-center">
        <span className="relative flex-none w-[96px] h-[96px] overflow-hidden rounded-full bg-gradient-to-br from-[#d9a88c] to-[#684337] shadow-[0_6px_18px_rgba(70,42,75,0.16)]">
          <i className="absolute top-[14px] left-[32px] w-9 h-[39px] rounded-full bg-[#edba99]" />
          <i className="absolute -bottom-[7px] left-[18px] w-[70px] h-[52px] rounded-t-full bg-[#38271f]" />
        </span>
        <strong className="mt-3 text-3xl">Teresita Karina Di Costa</strong>
        <small className="mt-1 text-[#8f8792] text-[17px]">
          Privatkunde seit 2022
        </small>
        <span className="mt-3 px-4 py-2 rounded-xl text-[#248a62] bg-[#e8f7f0] text-base font-bold">
          Identität bestätigt
        </span>
      </section>
      <section className="mb-4 px-5 py-5 rounded-2xl bg-white shadow-[0_5px_17px_rgba(62,39,68,0.05)]">
        <h2 className="mt-0 mb-2 text-2xl">Persönliche Angaben</h2>
        {profileDetails.map((detail) => (
          <div
            key={detail.label}
            className="py-4 border-b border-[#f0ebf1] last:border-b-0 flex items-center"
          >
            <span className="min-w-0 flex-1">
              <small className="block text-[#98909b] text-base">
                {detail.label}
              </small>
              <strong className="block mt-1 overflow-hidden text-[#2a222d] text-xl font-semibold text-ellipsis whitespace-nowrap">
                {detail.value}
              </strong>
            </span>
            <b className="text-[#b0a7b3] text-4xl font-normal">›</b>
          </div>
        ))}
      </section>
      <section className="mb-4 px-5 py-3 rounded-2xl bg-white shadow-[0_5px_17px_rgba(62,39,68,0.05)]">
        <button className="w-full py-3 border-0 flex items-center text-[#2a222d] bg-transparent text-left">
          <span className="w-[52px] h-[52px] grid place-items-center rounded-xl text-[#7824d3] bg-[#f4eafa]">
            <Icon name="lock" size={28} />
          </span>
          <strong className="flex-1 pl-4 text-lg">
            Sicherheit und Datenschutz
          </strong>
          <b className="text-[#b0a7b3] text-4xl font-normal">›</b>
        </button>
        <button className="w-full py-3 border-0 flex items-center text-[#2a222d] bg-transparent text-left">
          <span className="w-[52px] h-[52px] grid place-items-center rounded-xl text-[#7824d3] bg-[#f4eafa]">
            <Icon name="help" size={28} />
          </span>
          <strong className="flex-1 pl-4 text-lg">
            Dokumente und Vereinbarungen
          </strong>
          <b className="text-[#b0a7b3] text-4xl font-normal">›</b>
        </button>
      </section>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("accounts");
  function navigate(next: Page) {
    setPage(next);
    document.querySelector(".app-content")?.scrollTo({ top: 0 });
  }
  return (
    <main
      className={`app-shell relative w-full h-dvh overflow-hidden bg-white theme-${page}`}
    >
      <style>{`
        .app-shell {
          --header-h: 116px;
          --nav-h: 96px;
        }
        @media (max-height: 700px) {
          .app-shell {
            --header-h: 104px;
            --nav-h: 86px;
          }
        }
        @media (min-width: 520px) {
          .app-shell {
            width: 430px;
            height: min(900px, 96dvh);
            border-radius: 28px;
            box-shadow: 0 22px 70px rgba(56, 34, 61, 0.2);
          }
        }
      `}</style>
      <Header page={page} navigate={navigate} />
      <div
        className="app-content absolute right-0 left-0 overflow-x-hidden overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ top: "var(--header-h)", bottom: "var(--nav-h)" }}
      >
        {page === "accounts" && <AccountsPage navigate={navigate} />}
        {page === "interest" && <InterestPage />}
        {page === "transfer" && <TransferPage />}
        {page === "cards" && <CardsPage />}
        {page === "support" && <SupportPage />}
        {page === "details" && <DetailsPage navigate={navigate} />}
        {page === "profile" && <ProfilePage />}
      </div>
      <BottomNav page={page} navigate={navigate} />
    </main>
  );
}
