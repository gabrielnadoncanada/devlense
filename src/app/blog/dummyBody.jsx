export function DummyBody() {
    return <>
        <div className="max-w-2xl xl:mx-auto">
            <p className="my-10 text-base/8 first:mt-0 last:mb-0">
                Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do
                it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically
                illegal to write a detailed guide about acquiring sensitive personal information on strangers.
                So, instead, this post is about demonstrating all the styles you can use in the blog post template.
            </p>
            <h2
                className="mb-10 mt-12 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is
                a
                heading
            </h2>
            <p className="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind
                you.
                Some would say it's just the right size at <span aria-hidden="true">`</span><code
                    className="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">`</span>.
                Did
                you
                notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong
                    className="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard
                stuff, to be
                honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead,
                try
                it.
            </p>
            <p className="my-10 text-base/8 first:mt-0 last:mb-0"></p>
            <p
                className="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those
                are
                pretty useful in a blog post:
            </p>
            <img alt=""
                 src="/blog/post-single.webp"
                 className="w-full rounded-2xl"/>
            <h3
                className="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is
                a
                subheading
            </h3>
            <p className="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than
                the big
                heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot
                of
                line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole
                thing.
                There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy
                feeling.
            </p>
            <p className="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote
                something
                important someone said. You can use a block-quote for that:
            </p>
            <blockquote
                className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This
                is a block-quote. You can use it to quote other people or to just make something stand out from the rest
                of the
                post. It's visually separated from the rest of the article because it's indented and has a lovely little
                border
                on the left. If you want, you can make this <em>italic</em> too.
            </blockquote>
            <p className="my-10 text-base/8 first:mt-0 last:mb-0"></p>
            <p
                className="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information
                down in
                list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:
            </p>
            <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
                <li className="my-2 pl-2 has-[br]:mb-8"><strong
                    className="font-semibold text-gray-950">Organization</strong>:
                    Lists help to organize information clearly, making it easier to read, understand, and remember.
                </li>
                <li className="my-2 pl-2 has-[br]:mb-8"><strong
                    className="font-semibold text-gray-950">Prioritization</strong>:
                    They allow users to easily prioritize items, which can be crucial for productivity.
                </li>
                <li className="my-2 pl-2 has-[br]:mb-8"><strong className="font-semibold text-gray-950">Clarity</strong>:
                    Lists
                    break down complex information into manageable, discrete items, which can simplify communication.
                </li>
                <li className="my-2 pl-2 has-[br]:mb-8"><strong
                    className="font-semibold text-gray-950">Motivation</strong>:
                    Completing items on a list can provide a psychological boost. The act of checking things off as done
                    is
                    satisfying.
                </li>
            </ol>
            <p className="my-10 text-base/8 first:mt-0 last:mb-0"></p>
            <p
                className="my-10 text-base/8 first:mt-0 last:mb-0">It
                can be a bit weird if an article just sort of ends, so we added separators. That way you can add your
                conclusion
                right after.
            </p>
            <hr className="my-8 border-t border-gray-200"/>
            <p className="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of
                lines
                here that sum everything up, and then the article can just sort of stop. No one reads down here anyway;
                it just
                needs to visually look like something is happening.
            </p>
            <div className="mt-10">
                <a
                    className="inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)] rounded-lg border border-transparent shadow ring-1 ring-black/10 whitespace-nowrap text-sm font-medium text-gray-950 data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40"
                    data-headlessui-state="" href="/blog">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"
                         data-slot="icon" className="size-4">
                        <path fillRule="evenodd"
                              d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                              clipRule="evenodd"></path>
                    </svg>
                    Back to blog
                </a>
            </div>
        </div>
    </>
}

