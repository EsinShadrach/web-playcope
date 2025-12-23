"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function FAQs() {
  const faqs = [
    {
      title: "Is Playcope a betting company?",
      subtitle: (
        <span>
          No.
          <br />
          Playcope does not operate as a betting platform and does not accept
          wagers.
          <br />
          We build tools that analyze football data and present insights.
        </span>
      ),
    },
    {
      title: "What products does Playcope have?",
      subtitle: (
        <span>
          Playcope houses multiple football-focused products, including:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Puntrr – a predictions and match-insights platform</li>
            <li>
              Other upcoming tools focused on football, stats, and football
              analytics
            </li>
          </ul>
        </span>
      ),
    },
    {
      title: "What is Puntrr by Playcope?",
      subtitle:
        "Puntrr is a Playcope product designed to help users understand football matches through AI-powered predictions, data insights.",
    },
    {
      title: "Does Playcope place bets for users?",
      subtitle: (
        <span>
          No.
          <br />
          Neither Playcope nor its products place bets or handle betting
          transactions.
        </span>
      ),
    },
    {
      title: "Who is Playcope for?",
      subtitle: (
        <span>
          Playcope products are built for:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Football fans</li>
            <li>Data-driven users</li>
            <li>Analysts and enthusiasts looking for clarity, not noise</li>
          </ul>
        </span>
      ),
    },
    {
      title: "Is Playcope focused on predictions only?",
      subtitle: (
        <span>
          No.
          <br />
          Predictions are one part of a wider football-intelligence ecosystem.
          <br />
          Playcope&apos;s long-term vision includes, performance insights, and
          fan-focused tools.
        </span>
      ),
    },
  ];

  return (
    <section id="faq" className="min-h-screen max-md:mt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={staggerContainer}
        className="container mx-auto p-4"
      >
        <motion.div
          variants={fadeInUp}
          className="px-6 py-2 bg-light-grey rounded-full w-fit mx-auto"
        >
          <span className="md:text-lg text-sm text-light-black font-normal uppercase tracking-wide">
            FAQs
          </span>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center text-light-black text-4xl md:text-7xl font-normal capitalize mt-10 max-md:leading-12 leading-20"
        >
          Everything You Need <br className="max-md:hidden" />
          To Know
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="flex flex-col gap-6 mt-10 max-w-5xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <FaqTile key={index} {...faq} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function FaqTile({
  title,
  subtitle,
}: {
  title: string;
  subtitle: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeInUp} className="w-full">
      <motion.div
        className={`py-5 px-8 md:px-12 w-full border border-grey-1 rounded-[50px] capitalize transition-colors cursor-pointer text-dark-grey overflow-hidden`}
        animate={{
          backgroundColor: open ? "#F8F8F8" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen((prev) => !prev);
          }
        }}
      >
        <div className="w-full focus:outline-none flex items-center justify-between bg-transparent pointer-events-none">
          <div
            className={`text-base md:text-xl text-left pointer-events-none transition-colors duration-300 ${
              open ? "text-foreground" : "text-dark-grey"
            }`}
          >
            {title}
          </div>
          <div className="flex items-center ml-6 pointer-events-none">
            <motion.div
              className={`bg-dark-grey h-6 md:h-8 w-0.5 box-border rounded`}
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            />
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="text-base">{subtitle}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
