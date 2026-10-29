"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { copy, faqs } from "@/data/siteContent";
import { MediaFrame } from "./MediaFrame";

export function FaqExperience() {
  const [activeIndex, setActiveIndex] = useState(2);
  const active = faqs[activeIndex];

  return (
    <section id="faq" className="faq-experience page-frame section-space" aria-labelledby="faq-title" data-page-region="faq">
      <div className="faq-heading"><p className="eyebrow">FAQ</p><h2 id="faq-title" className="section-title">YOUR QUESTIONS.<br />OUR ANSWERS.</h2></div>
      <p className="body-copy faq-intro">{copy.faq}</p>
      <MediaFrame label="FAQ" detail="HELMET / RIDER LIFESTYLE" className="faq-media" src="/images/Rider%20on%20White%20Ninja%20300.png" imageAlt="Motorcyclist riding a white sport motorcycle on a mountain road" />
      <div id="faq-answer" className="faq-answer" role="region" aria-labelledby={`faq-question-${active.id}`} aria-live="polite" aria-atomic="true">
        <span className="faq-active-index" aria-hidden="true">/0{activeIndex + 1}</span>
        <div><h3>{active.question}</h3><p>{active.answer}</p></div>
      </div>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <button type="button" id={`faq-question-${item.id}`} key={item.id} aria-expanded={activeIndex === index} aria-controls="faq-answer" className="faq-row" onClick={() => setActiveIndex(index)}>
            <span className="faq-row-index">/0{index + 1}</span>
            <span>{item.question}</span>
            {activeIndex === index ? <Minus size={17} strokeWidth={1.5} aria-hidden="true" /> : <Plus size={17} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </section>
  );
}
