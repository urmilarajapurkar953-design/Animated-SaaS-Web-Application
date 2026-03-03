"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

/* =========================
   Testimonial Type
========================= */

type Testimonial = {
  text: string;
  imageSrc: any;
  name: string;
  username: string;
};

/* =========================
   Testimonials Data
========================= */

const testimonials: Testimonial[] = [
  {
    text: "This product completely changed how our team works.",
    imageSrc: avatar1,
    name: "John Carter",
    username: "@johncarter",
  },
  {
    text: "Super smooth experience and amazing UI.",
    imageSrc: avatar2,
    name: "Emma Wilson",
    username: "@emmawilson",
  },
  {
    text: "Highly recommend to anyone building SaaS tools.",
    imageSrc: avatar3,
    name: "David Lee",
    username: "@davidlee",
  },
  {
    text: "Customer support is next level!",
    imageSrc: avatar4,
    name: "Sophia Brown",
    username: "@sophiabrown",
  },
  {
    text: "Best investment we made this year.",
    imageSrc: avatar5,
    name: "Michael Scott",
    username: "@michaelscott",
  },
  {
    text: "Very intuitive and easy to scale.",
    imageSrc: avatar6,
    name: "Olivia Green",
    username: "@oliviagreen",
  },
  {
    text: "Clean design and powerful features.",
    imageSrc: avatar7,
    name: "Daniel Kim",
    username: "@danielkim",
  },
  {
    text: "Saved us so much development time.",
    imageSrc: avatar8,
    name: "Isabella Clark",
    username: "@isabellaclark",
  },
  {
    text: "Absolutely love using this every day.",
    imageSrc: avatar9,
    name: "Liam Johnson",
    username: "@liamjohnson",
  },
];

/* =========================
   Column Component
========================= */

function TestimonialsColumn({
  className, testimonials, duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, outerIndex) => (
          <div key={outerIndex}>
            {testimonials.map(({ text, imageSrc, name, username }) => (
              <div key={name} className="card">
                <div>{text}</div>

                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full" />

                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight text-black/50">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =========================
   Main Export Component
========================= */

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-description mt-5">
            What our users say about us
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <TestimonialsColumn
            testimonials={testimonials.slice(0, 3)}
            duration={15}
          />
          <TestimonialsColumn
            testimonials={testimonials.slice(3, 6)}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={testimonials.slice(6, 9)}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};