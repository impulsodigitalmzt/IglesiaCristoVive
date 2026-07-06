import type { Devotional } from "@/types";

import { RichParagraph } from "@/components/sections/devotionals/rich-paragraph";

type DevotionalArticleProps = {
  devotional: Devotional;
};

function DevotionalArticle({ devotional }: DevotionalArticleProps) {
  return (
    <article className="min-w-0">
      <p className="font-montserrat text-lg font-bold text-[#5c4a3d]">Devocional de Hoy</p>
      {devotional.publishedLabel ? (
        <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {devotional.publishedLabel}
        </p>
      ) : null}

      <h2 className="mt-4 font-montserrat text-3xl font-black leading-tight tracking-tight text-[#c45a28] md:text-[2.35rem]">
        {devotional.title}
      </h2>

      {devotional.scriptureQuote ? (
        <blockquote className="mt-8 rounded-2xl bg-[#f3ece2] px-6 py-5 font-serif text-lg leading-relaxed text-[#4a4038] md:px-8 md:py-6 md:text-xl">
          {devotional.scriptureQuote}
        </blockquote>
      ) : null}

      <div className="mt-8 space-y-5 text-base leading-8 text-text/90 md:text-[1.05rem]">
        {devotional.bodyParagraphs?.map((paragraph) => (
          <RichParagraph key={paragraph} text={paragraph} />
        ))}
      </div>

      {devotional.subheading ? (
        <h3 className="mt-10 font-montserrat text-2xl font-bold text-[#5c4a3d]">
          {devotional.subheading}
        </h3>
      ) : null}

      {devotional.bulletPoints?.length ? (
        <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-8 text-text/90">
          {devotional.bulletPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}

      {devotional.prayer ? (
        <div className="mt-10">
          <p className="font-montserrat text-lg font-bold text-[#5c4a3d]">Para orar:</p>
          <p className="mt-3 text-base leading-8 text-text/90 italic">{devotional.prayer}</p>
        </div>
      ) : null}
    </article>
  );
}

export { DevotionalArticle };
