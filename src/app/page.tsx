import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-white">Plan Your Perfect Event with AI</h1>
        <p className="text-lg mb-6 text-gray-200">
          EventZen helps you organize the event of your dreams with personalized recommendations.
        </p>
        <Link href="/create-event" className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold">
          Get Started
        </Link>
      </div>

      {/* How It Works Section */}
      <section className="py-20 text-center bg-background text-foreground">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex justify-center space-x-10">
          <div className="w-1/3">
            <h3 className="text-2xl font-bold">Discover Vendors</h3>
            <p>Find the best local vendors that fit your budget and style.</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-2xl font-bold">Track Your Budget</h3>
            <p>Keep track of your event expenses in real time.</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-2xl font-bold">Customize Timelines</h3>
            <p>Create detailed event timelines and stay organized.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-center text-3xl font-bold mb-8">What Our Users Say</h2>
        <p className="text-center">"EventZen made my wedding planning so much easier!" – Sarah J.</p>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center bg-background text-foreground">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
        <Link href="/create-event" className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
          Start Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
