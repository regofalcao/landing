import Image from "next/image";
import YoutubeVideo from "@/components/player";

const mapeado = [
  { imagem: "daniel.jpg" },
  { imagem: "daniel.jpg" },
  { imagem: "daniel.jpg" },
  { imagem: "carro.jpg" },
  { imagem: "carro.jpg" },
  { imagem: "carro.jpg" },
];

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center ">
      <div className=" flex gap-1 h-screen w-full ">
        <div className=" relative w-1/2">
          <Image src="/daniel.jpg" fill alt="carro" />
        </div>
        <div className=" relative w-1/2">
          <Image src="/daniel.jpg" fill alt="carro" />
        </div>

        <div className="absolute top-[140px] left-[27%]  ">
          {/* <YoutubeVideo /> */}
        </div>
      </div>

      <div className="container flex items-center border-2 rounded-3xl mt-5 flex-col">
        <h1 className="text-2xl"> Sua netflix de conteudos Grátis </h1>
        <div className="flex items-center justify-center flex-wrap w-full overflow-x-hidden scrollbar-hide rounded-lg gap-5 px-2 mb-2 ">
          {mapeado.map((post, index) => {
            return (
              <div
                key={index}
                id={index}
                className="flex item-center justify-center  shadow-lg text-black rounded-lg font-semibold p-1"
              >
                <Image
                  src={`/${post?.imagem}`}
                  width={300}
                  height={300}
                  alt="Foto Perfil"
                  className="rounded-lg object-contain  "
                />
                <div className=" w-[90%]  ml-2"></div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full items-center animate-bounce mt-4 justify-center">
          <button className="bg-orange-500 text-black mx-auto rounded-full px-2 py-1 text-xl font-bold">
            Clique Aqui
          </button>
        </div>
      </div>

      <div>AQUI VAI FICAR A IMAGEM DE ATENÇÃO QUE NÃO DÁ PRA FAZER NO CSS</div>

      <div className="flex flex-col md:flex-row items-center p-1 gap-10">
        <div>
          <Image
            src="/daniel.jpg"
            width="300"
            height="300"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-[500px] flex flex-col text-xl">
          <span> Prazer, Daniel K.</span>
          <div className=" flex flex-col gap-5">
            <h3>
              Especialista no mercado digital, iniciei como afiliado através de
              grupos pelo Facebook.
            </h3>
            <h3>
              Atualmente já trabalho com marketing há 3 anos e graças a ele,
              pude morar sozinho com apenas 17 anos!
            </h3>
            <h3>
              Hoje em dia, já faturo mais de R$500.000,00 por mês com vendas
              pela internet e ajudo meus seguidores a começarem a faturar com
              vendas sem sair de casa!
            </h3>
            <h3>
              Com mais de 400 mil inscritos no YouTube, atualmente me dedico a
              ajudar todos os que desejam sair da CLT para começar a ganhar a
              vida com a internet.
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
