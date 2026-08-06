/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState('featured');
  const [minRating, setMinRating] = useState(0);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange([0, 200000]);
    setSortBy('featured');
    setMinRating(0);
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'all' ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 200000 ||
    minRating > 0;

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
        sortBy,
        setSortBy,
        minRating,
        setMinRating,
        resetFilters,
        hasActiveFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
