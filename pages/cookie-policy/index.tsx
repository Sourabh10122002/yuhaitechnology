
import {motion} from "framer-motion"
import Link from "next/link";

const CookiePolicyPage = () => {
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
              Cookie Policy
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
                Cookie Policy
              </span>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 md:p-16">
              <div className="lg:text-center mb-10">
                <p className="text-sm text-gray-500">
                  Last Updated: October 26, 2023
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    This Cookie Policy explains what cookies are and how 
                  <strong>YourCoachingBrand</strong>
                  uses them on our website. We encourage you to read this policy
                  fully so that you can understand what information we collect
                  using cookies and how that information is used.
                </p>
              </div>

              <div className="space-y-10">
                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    1. What Are Cookies?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Cookies are small text files that are stored on your browser
                    or device by websites, apps, online media, and
                    advertisements. They are widely used to remember you and
                    your preferences, either for a single visit through a
                    session cookie or for multiple repeat visits using a
                    persistent cookie. They ensure a consistent and efficient
                    experience for visitors and perform essential functions.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    2. How We Use Cookies
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies for several purposes. Some cookies are
                    required for technical reasons in order for our website to
                    operate, and we refer to these as essential or strictly
                    necessary cookies. Other cookies enable us to track and
                    target the interests of our users to enhance the experience
                    on our online properties.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                    <li>
                      <strong>Strictly Necessary Cookies:</strong> These are
                      essential for you to browse the website and use its
                      features, such as accessing secure areas of the site or
                      processing a purchase.
                    </li>
                    <li>
                      <strong>Performance Cookies:</strong> These cookies
                      collect information about how you use our website, like
                      which pages you visited and which links you clicked on.
                      This data is aggregated and anonymized and is only used to
                      improve how our website functions.
                    </li>
                    <li>
                      <strong>Functionality Cookies:</strong> These cookies
                      allow our website to remember choices you have made in the
                      past, like what language you prefer or your user name and
                      password so you can automatically log in.
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> These cookies track
                      your online activity to help advertisers deliver more
                      relevant advertising or to limit how many times you see an
                      ad. These cookies can share that information with other
                      organizations or advertisers.
                    </li>
                  </ul>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    3. Third-Party Cookies
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    In addition to our own cookies, we may also use various
                    third-parties cookies to report usage statistics of the
                    service, deliver advertisements on and through the service,
                    and so on. For example, we use Google Analytics to help us
                    understand how our customers use the Site.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    4. Your Choices Regarding Cookies
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You have the right to decide whether to accept or reject
                    cookies. You can exercise your cookie preferences by setting
                    or amending your web browser controls. If you choose to
                    reject cookies, you may still use our website though your
                    access to some functionality and areas may be restricted. As
                    the means by which you can refuse cookies through your web
                    browser controls vary from browser-to-browser, you should
                    visit your browsers help menu for more information.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    5. Changes to This Cookie Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Cookie Policy from time to time in order
                    to reflect, for example, changes to the cookies we use or
                    for other operational, legal, or regulatory reasons. Please
                    therefore re-visit this Cookie Policy regularly to stay
                    informed about our use of cookies and related technologies.
                  </p>
                </article>

                <article className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2C62] border-l-4 border-[var(--btn-color)] pl-4">
                    6. Contact Us
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about our use of cookies or other
                    technologies, please email us at:{" "}
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

export default CookiePolicyPage;
