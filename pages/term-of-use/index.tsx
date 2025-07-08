import { motion } from "framer-motion";
import Link from "next/link";

const TermsOfUsePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <main className="w-full bg-slate-50">
        <section
          style={{ backgroundImage: "url('/contact-top.png')" }}
          className="bg-cover bg-center text-center py-24 sm:py-32 relative"
        >
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A2C62]">
              Terms of Use
            </h1>
            <div className="mt-4 inline-block px-6 py-3 bg-white rounded-md shadow-sm">
              <Link
                href="/"
                className="font-semibold text-green-500 hover:underline"
              >
                Home
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="font-semibold text-[#1A2C62]">Terms of Use</span>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 md:p-16">
              <div className="lg:text-center mb-10">
                <p className="text-sm text-gray-500">
                  Last Updated: June 20, 2025
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Welcome to <strong>YourCoachingBrand</strong>. By accessing
                  our website, purchasing our products, or using our services,
                  you agree to be bound by the following terms and conditions.
                  Please read them carefully.
                </p>
              </div>

              <div className="space-y-10">
                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By using this website Site, including all materials
                    presented herein and all online services provided by
                    <strong>YourCoachingBrand</strong>, you agree to these Terms
                    of Use and our Privacy Policy. If you do not agree to be
                    bound by these terms, please do not use our Site or
                    services. We reserve the right to modify these terms at any
                    time, and your continued use constitutes acceptance of those
                    changes.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    2. Coaching Services & Disclaimer
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services include, but are not limited to, one-on-one
                    coaching, group programs, workshops, and digital courses,
                    all for educational and informational purposes only.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                    <li>
                      <strong>No Guarantees:</strong> You understand that we
                      offer no guarantee of any specific results or outcomes
                      from our coaching services. Your success is dependent on
                      your own effort, motivation, commitment, and
                      follow-through.
                    </li>
                    <li>
                      <strong>Not Professional Advice:</strong> The information
                      provided through our services is not a substitute for
                      professional legal, financial, medical, or psychological
                      advice. Always seek the advice of a qualified professional
                      for such matters. The client-coach relationship is not a
                      protected or privileged relationship (unlike with a doctor
                      or lawyer).
                    </li>
                  </ul>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    3. Payments, Refunds, and Cancellation
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All payments for services are required in advance as per the
                    terms specified at the time of purchase. We use secure
                    third-party payment processors to handle all transactions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Refund Policy:</strong> Due to the nature of digital
                    products and live services, we generally maintain a
                    no-refund policy. Specific refund terms for a particular
                    course or package will be clearly stated on its sales page.
                    For one-on-one coaching, a cancellation policy (e.g.,
                    24-hour notice) will be agreed upon in our separate coaching
                    agreement.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    4. Intellectual Property
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All content on this Site and within our programs—including
                    text, graphics, logos, images, course materials, and
                    videos—is the property of <strong>YourCoachingBrand</strong>{" "}
                    and is protected by copyright and other intellectual
                    property laws. You are granted a limited, non-transferable
                    license to use this material for personal, non-commercial
                    use. You may not reproduce, distribute, or create derivative
                    works from any of our content without our express written
                    permission.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    5. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    In no event shall <strong>YourCoachingBrand</strong> or its
                    affiliates be liable for any direct, indirect, incidental,
                    special, or consequential damages arising out of your use
                    of, or inability to use, the Site or services provided. Our
                    total liability is limited to the amount you have paid us
                    for services.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    6. Governing Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms of Use shall be governed by and construed in
                    accordance with the laws of{" "}
                    <strong>[Your Country/State]</strong>, without regard to its
                    conflict of law principles.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    7. Contact Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms of Use, please
                    contact us at:{" "}
                    <a
                      href="mailto:contact@yourcoachingbrand.com"
                      className="font-semibold text-[var(--btn-color)] hover:underline"
                    >
                      contact@yourcoachingbrand.com
                    </a>
                    .
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default TermsOfUsePage;
