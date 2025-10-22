// src/Pages/HomeElements/Newsletter.jsx
export default function Newsletter() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">📬 Join Our Newsletter</h2>
        <p className="text-gray-300 mb-8">
          Stay updated with the latest games, news, and exclusive offers. 
          Subscribe now and never miss an update!
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                       hover:from-purple-700 hover:to-pink-700 rounded-md 
                       font-semibold transition transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>

        {/* Privacy Note */}
        <p className="text-xs text-gray-400 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}