export default function About() {
    return (
      <main className="min-h-screen bg-slate-100 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About Recipe Drip</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Recipe Drip is your go-to platform for discovering, sharing, and creating delicious recipes
              for every occasion. Join us as we bring culinary inspiration to your fingertips.
            </p>
          </div>
        </section>
  
        {/* Our Mission Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-center mb-8">Our Mission</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-center">
              At Recipe Drip, we aim to connect food enthusiasts around the world. Our mission is to create a
              vibrant community where everyone, from amateur cooks to professional chefs, can find inspiration
              and share their culinary creations.
            </p>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-12 bg-brandColor-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-center mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6  shadow-md text-center">
                <h3 className="text-lg font-medium mb-2">Discover Recipes</h3>
                <p className="text-gray-600">
                  Explore a vast collection of recipes curated by our community.
                </p>
              </div>
  
              {/* Feature 2 */}
              <div className="bg-white p-6  shadow-md text-center">
                <h3 className="text-lg font-medium mb-2">Create Your Own</h3>
                <p className="text-gray-600">
                  Share your recipes and inspire others with your culinary expertise.
                </p>
              </div>
  
              {/* Feature 3 */}
              <div className="bg-white p-6  shadow-md text-center">
                <h3 className="text-lg font-medium mb-2">Connect & Share</h3>
                <p className="text-gray-600">
                  Join a global community of food lovers and connect over your shared passion for cooking.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="py-12 bg-gradient-to-r from-blue-500 to-green-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Recipe Drip Community</h2>
            <p className="mb-6">
              Become a part of a growing community of food enthusiasts who love to share, explore, and create.
            </p>
            <button className="px-6 py-3 bg-white text-blue-500 font-medium  shadow-md hover:bg-slate-100">
              Get Started
            </button>
          </div>
        </section>
      </main>
    );
  }
  