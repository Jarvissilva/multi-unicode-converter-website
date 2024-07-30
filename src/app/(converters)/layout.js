import converters from "data/converters";
import { H1, H2, InternalLink, P } from "components/content";

export default function ArticleLayout({ children }) {
  const foundConverter = converters.find(
    (converter) => converter.slug === children.props.childProp.segment
  );

  const otherConverters = converters.filter(
    (converter) => converter.slug !== foundConverter.slug
  );

  return (
    <>
      <div className="text-center py-[clamp(1rem,5vw,2.25rem)]">
        <H1>{foundConverter.title}</H1>
        <P>{foundConverter.description}</P>
      </div>

      {children}
      <div className="mt-5 space-y-5">
        <H2>More converters</H2>
        <div className="flex flex-wrap items-start gap-5">
          {otherConverters.map((otherConverter) => (
            <div className="p-3 bg-sky-50 border border-gray-200 rounded-md">
              <InternalLink href={`/${otherConverter.slug}`}>
                {otherConverter.title}
              </InternalLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
