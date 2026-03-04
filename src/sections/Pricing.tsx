"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-2 text-sm text-gray-600">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center mt-6 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={twMerge(
                  "card transition-all duration-300 hover:shadow-lg p-4 rounded-lg w-full max-w-sm",
                  inverse && "border-black bg-black text-white"
                )}
              >
                {/* Title & Popular */}
                <div className="flex justify-between items-center">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/70",
                      inverse && "text-white/70"
                    )}
                  >
                    {title}
                  </h3>

                  {popular && (
                    <div className="inline-flex text-sm px-3 py-1 rounded-xl border border-white/20">
                      <motion.span
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-3xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50 text-sm",
                      inverse && "text-white/60"
                    )}
                  >
                    /month
                  </span>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={twMerge(
                    "btn btn-primary w-full mt-4 transition-all duration-300 shadow-md hover:shadow-lg text-sm py-2",
                    inverse && "bg-white text-black hover:bg-gray-200"
                  )}
                >
                  {buttonText}
                </motion.button>

                {/* Features List */}
                <ul className="flex flex-col gap-2 mt-4 text-sm">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};