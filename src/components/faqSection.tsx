import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui"

const FAQSection = () => {
  return (
    <div className="relative z-0 mb-28 mt-16 flex w-full flex-col items-center gap-8">
      <h2 className="hidden text-center text-7xl font-semibold md:block">
        Frequently Asked Questions
      </h2>
      <h2 className="text-7xl font-semibold md:hidden">FAQ</h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">
            What does “YOUR KEYS - YOUR GAMES” really mean?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            It means you finally own what you buy. VECTOR gives you the game key
            — not a temporary license. It’s yours to play, or sell.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">
            Does VECTOR have DRM or platform lock-in?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            No lock-ins. No nonsense. With VECTOR, the keys to the games are
            yours. You hold them. You control them.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">
            Can I resell games I’ve finished?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. VECTOR lets you list your games for resale, and the original
            dev still gets fairly rewarded. You win, they win — and nothing goes
            to waste.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl">
            What makes VECTOR different from other gaming platforms?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            VECTOR gives you actual ownership. When you buy a game, it’s yours —
            to back up, resell, and move. And when you resell it? The developer
            still earns.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl">
            Is VECTOR a Web3 or crypto platform?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            No. VECTOR is a gaming client. We use a blockchain behind the scenes
            to enable real ownership and resale.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-2xl">
            What kind of games are on VECTOR?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Games you actually want to play. VECTOR supports all the traditional
            and new titles — from AAA hits to indie gems.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-2xl">
            Do developers earn on resales?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Absolutely. VECTOR makes sure creators are paid even after the
            initial sale — with every resale, the dev gets a cut. That’s fair by
            design.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FAQSection

