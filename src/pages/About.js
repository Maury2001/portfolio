import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profile_pic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const SpringValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    SpringValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [SpringValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>MyPortfolio | About</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="mb-16 !text-4xl"
          />
          <div className="grid grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start ">
              <h2 className="mb-4 text-base font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-6">
                I believe that design is about more than just making things look
                pretty it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium ">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max border-2 border-solid border-dark rounded-full bg-light p-8">
              <div className="">
                <Image
                  src={profile_pic}
                  alt="something"
                  className="w-full h-auto rounded-full"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-center">
              <div className="flex flex-col items-end justify-center p-6">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>

                <h2 className=" text-xl font-medium capitalize text-dark/75">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center p-6">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center p-6">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75">
                  Years of Experience{" "}
                </h2>
              </div>
            </div>
          </div>
        </Layout>
        <Skills />
        <Experience />
        <Education/>
      </main>
    </>
  );
};

export default About;
