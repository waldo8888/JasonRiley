"use client";

import { useState } from "react";
import Overline from "@/components/atoms/Overline";
import Button from "@/components/atoms/Button";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <form className="bg-paper-bright border border-ink-900 p-8 max-w-[560px]">
        <div className="py-10 text-center">
          <Overline>Message Sent</Overline>
          <h3 className="font-display uppercase text-[40px] sm:text-[44px] m-0 mt-2 mb-3 leading-none">
            Thanks — I&apos;ll be in touch.
          </h3>
          <p className="font-serif italic text-fg-2 m-0">
            Usually within 48 hours. Faster if you mention the camp.
          </p>
        </div>
      </form>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="bg-paper-bright border border-ink-900 p-6 sm:p-8 max-w-[560px]"
    >
      <Overline>Booking Inquiry</Overline>
      <h3 className="font-display uppercase text-[32px] sm:text-[40px] leading-none m-0 mt-2 mb-5">
        Get in touch.
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your Name">
          <input className={inputClasses} name="name" autoComplete="name" />
        </Field>
        <Field label="Organization">
          <input className={inputClasses} name="org" autoComplete="organization" />
        </Field>
      </div>
      <Field label="Email">
        <input className={inputClasses} type="email" name="email" autoComplete="email" />
      </Field>
      <Field label="What's the ask?">
        <select className={inputClasses} name="ask" defaultValue="Keynote / speaking">
          <option>Keynote / speaking</option>
          <option>Coaching clinic</option>
          <option>Up-Front Camp inquiry</option>
          <option>Book event</option>
          <option>Media / press</option>
        </select>
      </Field>
      <Field label="Tell me about the event">
        <textarea className={inputClasses} rows={4} name="message" />
      </Field>

      <Button>Send the note →</Button>
    </form>
  );
}

const inputClasses =
  "w-full font-serif text-[16px] px-3.5 py-3 bg-paper-bright " +
  "border border-ink-900 rounded-[2px] text-ink-900 " +
  "focus:outline focus:outline-2 focus:outline-gold-400 focus:outline-offset-2";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label className="font-mono text-[11px] tracking-[0.18em] uppercase text-fg-2">
        {label}
      </label>
      {children}
    </div>
  );
}
