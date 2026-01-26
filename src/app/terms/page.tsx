export default function TermsPage() {
  return (
    <main className="pt-20 py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0A2E50] mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            This Terms of Service page is currently being prepared. These terms govern your use 
            of Knetix services and website.
          </p>
          <p>
            For any questions regarding our terms, please contact us at{' '}
            <a href="mailto:info@knetix.io" className="text-[#00C4B4] hover:underline">
              info@knetix.io
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}

