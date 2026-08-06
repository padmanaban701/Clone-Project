import { useNavigate } from 'react-router-dom';
import { useFilter } from '../../hooks/useFilter';

export const CategoryNavBar = () => {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useFilter();

  const flipkartCategories = [
    {
      id: 'grocery',
      name: 'Kilos / Grocery',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 'mobiles',
      name: 'Mobiles',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 'electronics',
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 'home',
      name: 'Home & Furniture',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 'appliances',
      name: 'Appliances',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 'travel',
      name: 'Flight Bookings',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 'beauty',
      name: 'Beauty, Toys & More',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 'two-wheelers',
      name: 'Two Wheelers',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=120&q=80'
    }
  ];

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    navigate(`/shop?category=${catId}`);
  };

  return (
    <nav className="bg-white border-b border-slate-200 shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flipkart Category Image Tiles Row */}
        <div className="flex items-center justify-between overflow-x-auto scrollbar-none py-3 space-x-4 sm:space-x-8">
          {flipkartCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                className="relative group shrink-0"
              >
                <button
                  onClick={() => handleCategoryClick(cat.id)}
                  className="flex flex-col items-center gap-1.5 focus:outline-none transition-transform group-hover:scale-105"
                >
                  {/* Category Image Thumbnail */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 transition-all p-0.5 ${
                      isSelected
                        ? 'border-[#2874f0] shadow-md ring-2 ring-blue-100'
                        : 'border-slate-100 group-hover:border-[#2874f0]/60 shadow-xs'
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Label */}
                  <div className="flex items-center gap-0.5">
                    <span
                      className={`text-xs font-bold text-center whitespace-nowrap tracking-tight transition-colors ${
                        isSelected
                          ? 'text-[#2874f0]'
                          : 'text-slate-800 group-hover:text-[#2874f0]'
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </nav>
  );
};

