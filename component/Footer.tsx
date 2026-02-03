export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-gray-400 mt-32 pb-20">
      <div className="w-[75vw] mx-auto pt-10 text-center space-y-6">
        
        {/* Built With */}
        <div>
          <p className="text-sm text-gray-300 mb-2">Built with</p>
          <div className="flex justify-center gap-4 text-sm">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Next.js
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TypeScript
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Tailwind CSS
            </a>
          </div>
        </div>

        {/* Credits */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>
            Icons powered by{" "}
            <a
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              React Icons
            </a>
          </p>
          <p>
            Images sourced from{" "}
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              Unsplash
            </a>
          </p>
          <p>
            Hero image by{" "}
            <a
              href="https://unsplash.com/@timoun"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              Tim Oun
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-800 text-xs text-gray-500">
          © 2025 Rishab Singh. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

