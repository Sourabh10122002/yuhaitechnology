
import {motion} from "framer-motion"
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <>
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
                Privacy Policy
              </h1>
              <div className="mt-4 inline-block px-6 py-3 bg-white rounded-md shadow-sm">
                <Link
                  href="/"
                  className="font-semibold text-green-500 hover:underline"
                >
                  Home
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <span className="font-semibold text-[#1A2C62]">
                  Privacy Policy
                </span>
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
                    <strong>YourCoachingBrand</strong> is
                    committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you visit our website.
                  </p>
                </div>

                <div className="space-y-10">
                  <article className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                      1. Information We Collect
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may collect information about you in a variety of ways.
                      The information we may collect on the Site includes:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                      <li>
                        <strong>Personal Data:</strong> Personally identifiable
                        information, such as your name, shipping address, email
                        address, and telephone number, that you voluntarily give
                        to us when you register with the Site, make a purchase,
                        or enroll in a program.
                      </li>
                      <li>
                        <strong>Payment Data:</strong> Data necessary to process
                        your payment if you make purchases, such as your payment
                        instrument number (e.g., a credit card number) and the
                        security code. All payment data is stored by our payment
                        processor (e.g., Stripe, PayPal), and you should review
                        their privacy policies.
                      </li>
                      <li>
                        <strong>Derivative Data:</strong> Information our
                        servers automatically collect when you access the Site,
                        such as your IP address, your browser type, your
                        operating system, and the pages you have viewed.
                      </li>
                    </ul>
                  </article>

                 
                  <article className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                      2. How We Use Your Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Having accurate information about you permits us to
                      provide you with a smooth, efficient, and customized
                      experience. Specifically, we may use information collected
                      about you to:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                      <li>Create and manage your account.</li>
                      <li>Process your payments and refunds.</li>
                      <li>Email you regarding your account or order.</li>
                      <li>
                        Deliver targeted advertising, newsletters, and other
                        promotional information.
                      </li>
                      <li>
                        Monitor and analyze usage and trends to improve your
                        experience with the Site.
                      </li>
                    </ul>
                  </article>

                
                  <article className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                      3. Disclosure of Your Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We do not sell your personal information. We may share
                      information we have collected about you in certain
                      situations:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                      <li>
                        <strong>By Law or to Protect Rights:</strong> If we
                        believe releasing information is necessary to respond to
                        legal process, investigate potential policy violations,
                        or protect the rights, property, and safety of others.
                      </li>
                      <li>
                        <strong>Third-Party Service Providers:</strong> We may
                        share your information with third parties that perform
                        services for us, including payment processing, email
                        delivery, hosting services, and marketing assistance.
                      </li>
                    </ul>
                  </article>

               
                  <article className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                      4. Cookies and Tracking Technologies
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may use cookies, web beacons, and other tracking
                      technologies on the Site to help customize and improve
                      your experience. Your personal information is not
                      collected through tracking technology. Most browsers are
                      set to accept cookies by default, but you can choose to
                      remove or reject cookies, which could affect the
                      functionality of the Site.
                    </p>
                  </article>

                
                  <article className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                      5. Your Data Protection Rights
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Depending on your location, you may have rights regarding
                      your personal data, including the right to access,
                      rectify, or request erasure of your data. To exercise
                      these rights, please contact us using the information
                      below.
                    </p>
                  </article>

               
                  <article className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                      6. Contact Us
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      If you have questions or comments about this Privacy
                      Policy, please contact us at:{" "}
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
    </>
  );
};

export default PrivacyPolicyPage;
