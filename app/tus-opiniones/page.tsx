import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack black",
    username: "@jack_0",
    body: "Lo mejor que he visto, lo uso todos los dias",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Lamine Yamal",
    username: "@FC_lamineyamal",
    body: "Gracias, ahora llego temprano a todos lados",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Messi",
    username: "@Leonel",
    body: "La mejor App, me encanta",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Shakira",
    username: "@Shakira_Oficial",
    body: "Ya no me pierdo jajaja",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Steven Hawkings",
    username: "@StevenHawkingsOficial",
    body: "The best OMG!!! This is amazing. I love it",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Duki",
    username: "@dukoyouknow",
    body: "Increible, ya quiero ver que más ponen en esta app",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Manuel Turizo",
    username: "@manuelturizo_Oficial",
    body: "Ya solo uso esta app cada que necesito ir a un lugar",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Feid",
    username: "@ferxxo",
    body: "Parse, tremenda app, lo llevo en la jepeta siempre",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};


export default function Page() {
  return (
    <div>
      <div className="bg-[#37cbbf] rounded-md grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="mt-30 mb-1 mr-10 justify-center text-center">
          <h1 className="text-7xl text-white font-bold pb-5">Tus opiniones</h1> {/* Titulo */}
          <h5 className="text-3xl text-white ">Nos interesa saber como mejorar sus expectativas</h5> {/* Subtema */}
        </div>
      </div>
      <div className="justify-self-start m-10">
        <h1 className="text-2xl font-bold">Los comentarios y reseñas de tus problemas, Gracias a todos!!!</h1>
      </div>
      <div className="flex w-full items-center justify-center overflow-hidden px-10 py-10">
        <div className="relative flex w-[75%] flex-col items-center justify-center overflow-hidden px-30">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  )
}