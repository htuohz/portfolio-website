"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate and dedicated web developer with a strong foundation
        in creating dynamic, user-friendly web applications. My journey in
        technology began with a fascination for how things work behind the
        scenes, evolving into a love for crafting seamless digital experiences.
      </p>
      <p className="mb-3">
        I specialize in full-stack development using the{" "}
        <strong>MERN stack</strong>
        (MongoDB, Express, React, Node.js), allowing me to build comprehensive
        web solutions that are both robust and efficient. With a solid grasp of
        front-end technologies like HTML, CSS, and JavaScript, I focus on
        creating intuitive user interfaces while leveraging back-end
        technologies to ensure smooth data handling and application performance.
      </p>
    </motion.section>
  );
}
