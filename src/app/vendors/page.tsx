import Link from 'next/link';

const VendorDiscovery = () => {
  const vendors = [
    { name: 'Sunshine Catering', category: 'Caterer', location: 'New York' },
    { name: 'Blooming Florists', category: 'Florist', location: 'San Francisco' },
    { name: 'Happy Lens Photography', category: 'Photographer', location: 'Chicago' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6">Find Vendors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">{vendor.name}</h3>
            <p>{vendor.category}</p>
            <p>{vendor.location}</p>
            <Link href={`/vendor/${index}`}>
              <a className="mt-2 block text-blue-500">View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDiscovery;
