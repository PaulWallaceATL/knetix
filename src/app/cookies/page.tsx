export default function CookiesPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0A2E50] mb-8">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            This Cookie Policy page is currently being prepared. Knetix uses cookies to enhance 
            your browsing experience and provide personalized services.
          </p>
          <p>
            For any questions about our use of cookies, please contact us at{' '}
            <a href="mailto:info@knetix.com" className="text-[#00C4B4] hover:underline">
              info@knetix.com
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}

