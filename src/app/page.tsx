import Head from "next/head";
import twemoji from "twemoji";

export default function Home() {
  return (
    <>
      <Head>
        <title>dachi</title>

        {/* ogp */}
        <meta property="og:url" content="https://www.dachi.one" />
        <meta property="og:title" content="dachi" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
      </Head>

      <main className="px-16 bg-[#F5F5DC] min-w-full min-h-screen">
        <h1 className="pt-12 font-pacifico text-5xl">dachi</h1>

        <div className="mt-16 flex flex-col gap-12">
          <section className="flex items-center gap-6">
            <div
              className="basis-12 w-12 h-12"
              dangerouslySetInnerHTML={{ __html: twemoji.parse("👨‍💻") }}
            ></div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold">Web Developer</p>
            </div>
          </section>

          <section className="flex items-center gap-6">
            <div
              className="basis-12 w-12 h-12"
              dangerouslySetInnerHTML={{ __html: twemoji.parse("✅") }}
            ></div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold">Go / Node.js / PHP</p>
            </div>
          </section>

          <section className="flex items-center gap-6">
            <div
              className="basis-12 w-12 h-12"
              dangerouslySetInnerHTML={{ __html: twemoji.parse("🏢") }}
            ></div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold">MOSH, Inc.</p>
            </div>
          </section>

          <section className="flex items-center gap-6">
            <div
              className="basis-12 w-12 h-12"
              dangerouslySetInnerHTML={{ __html: twemoji.parse("🖊️") }}
            ></div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold">
                <a
                  className="underline"
                  href="https://amzn.to/41gkI1V"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  フロントエンド開発入門
                </a>
              </p>
            </div>
          </section>

          <section className="flex items-center gap-6">
            <div
              className="basis-12 w-12 h-12"
              dangerouslySetInnerHTML={{ __html: twemoji.parse("🔗") }}
            ></div>
            <div className="flex flex-col gap-2">
              <p className="flex gap-1 text-base font-semibold">
                <a
                  className="underline"
                  href="https://twitter.com/dachi_023"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <span>/</span>
                <a
                  className="underline"
                  href="https://github.com/dachi023"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
