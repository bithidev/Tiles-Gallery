import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative  bg-mauve-950">
      <div className="h-px w-full " />

      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      <div className="max-w-7xl mx-auto px-6 py-18">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
         
          <div className="space-y-4">
            <div className="flex items-center ">
               <img src="/logo.png" alt="" className="w-30" />
            </div>

            <p className="text-sm leading-relaxed text-gray-300 dark:text-gray-400 max-w-xs">
              Create production-ready AI visuals in seconds. Built for speed,
              scale, and creativity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-300 dark:text-gray-400">
              <li>
                <Link
                  href="/generate" className=" dark:hover:text-white transition"> Generate </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className=" dark:hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-300 dark:text-gray-400">
              <li>
                <Link
                  href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" > Terms </Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-4 ">
            <h3 className="text-sm font-semibold text-gray-300 dark:text-white">
              Start creating
            </h3>

            <p className="text-sm text-gray-300 pb-3 dark:text-gray-400">
              Generate your first AI image today.
            </p>

            <Link
              href="/signup"
              className="bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-3 px-6 text-black text-lg font-semibold rounded-full">
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-md text-gray-400 dark:text-gray-400 ">
          <p>© {new Date().getFullYear()} TileGallery. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy">
              Privacy
            </Link>
            <Link
              href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;