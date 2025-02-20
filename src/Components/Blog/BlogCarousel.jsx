
import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, User, Music, Headphones, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Music Production Tips for Beginners",
      excerpt: "Learn the essential tips and tricks to start your music production journey with professional-grade results...",
      author: "John Doe",
      date: "2024-02-15",
      image: "/assets/girl.jpg",
      category: "Production"
    },
    {
      id: 2,
      title: "The Evolution of Electronic Music",
      excerpt: "Explore the fascinating journey of electronic music through the decades from analog synths to digital production...",
      author: "Jane Smith",
      date: "2024-02-14",
      image: "/assets/girl1.jpg",
      category: "History"
    },
    {
      id: 3,
      title: "Best Music Festivals of 2024",
      excerpt: "Discover the most anticipated music festivals happening this year with lineup highlights and ticket info...",
      author: "Mike Johnson",
      date: "2024-02-13",
      image: "/assets/girl2.jpg",
      category: "Events"
    },
    {
      id: 4,
      title: "How to Mix Vocals Like a Pro",
      excerpt: "Professional techniques for getting crystal clear vocals that sit perfectly in your mix...",
      author: "Sarah Williams",
      date: "2024-02-12",
      image: "/assets/girl3.jpg",
      category: "Production"
    },
    {
      id: 5,
      title: "The Rise of Lo-Fi Hip Hop",
      excerpt: "How lo-fi hip hop became the soundtrack to study sessions and chill vibes worldwide...",
      author: "Alex Chen",
      date: "2024-02-11",
      image: "/assets/girl4.jpg",
      category: "Trends"
    },
    {
      id: 6,
      title: "Interview: Behind the Scenes with Grammy Winner",
      excerpt: "Exclusive interview revealing the creative process and studio secrets of this year's Grammy winner...",
      author: "Taylor Reed",
      date: "2024-02-10",
      image: "/assets/girl5.jpg",
      category: "Artists"
    }
  ];

  const getPostsPerPage = () => {
    return 3; 
  };

  const postsPerPage = getPostsPerPage();
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const timer = setInterval(nextPage, 8000);
    return () => clearInterval(timer);
  }, []);

  // For displaying current visible posts
  const visiblePosts = blogPosts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  return (
    <div className="w-full bg-gradient-to-r from-purple-900/80 to-indigo-900/80 rounded-xl p-6 backdrop-blur-md shadow-xl border border-white/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Headphones className="text-purple-400" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Music Blog</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-500 w-12' 
                    : 'bg-white/20'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={prevPage}
              className="bg-black/60 hover:bg-purple-800/80 p-2 rounded-full text-white/90 transition-colors duration-300 backdrop-blur-sm"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextPage}
              className="bg-black/60 hover:bg-purple-800/80 p-2 rounded-full text-white/90 transition-colors duration-300 backdrop-blur-sm"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
        {visiblePosts.map((post) => (
          <div 
            key={post.id}
            className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/15 transition-all duration-300 transform  hover:shadow-lg group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-20 bg-purple-600/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                <Music size={12} />
                {post.category}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-bold text-lg md:text-xl mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-white/70 text-xs">
                <div className="flex items-center gap-2">
                  <div className="bg-purple-800/50 p-1.5 rounded-full">
                    <User size={14} className="text-purple-300" />
                  </div>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-800/50 p-1.5 rounded-full">
                    <Clock size={14} className="text-purple-300" />
                  </div>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <button className="w-full text-center text-purple-300 hover:text-white text-sm font-medium flex items-center justify-center gap-1 transition-colors duration-300">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Pagination Indicator */}
      <div className="mt-6 flex justify-center md:hidden">
        <div className="flex gap-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-purple-400' 
                  : 'bg-white/20'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-8 w-full flex justify-center">
        <button className="text-sm font-medium text-white bg-purple-800/40 hover:bg-purple-700/60 px-6 py-3 rounded-full transition-colors duration-300 backdrop-blur-sm border border-purple-500/30 flex items-center gap-2">
          Explore All Articles
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
