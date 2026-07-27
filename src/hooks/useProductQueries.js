import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { localDataService } from '../services/localDataService';

// Fetch products list with filtering, searching, and sorting
export const useProductsQuery = (filters = {}) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => localDataService.getProducts(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes cache stale time
    keepPreviousData: true
  });
};

// Fetch single product by slug or ID
export const useProductDetailQuery = (idOrSlug) => {
  return useQuery({
    queryKey: ['product', idOrSlug],
    queryFn: () => localDataService.getProductById(idOrSlug),
    enabled: Boolean(idOrSlug),
    staleTime: 1000 * 60 * 10
  });
};

// Fetch categories list
export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => localDataService.getCategories(),
    staleTime: 1000 * 60 * 60 // 1 hour
  });
};

// Fetch featured products for landing sections
export const useFeaturedProductsQuery = () => {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: () => localDataService.getFeaturedProducts(),
    staleTime: 1000 * 60 * 15
  });
};

// Coupon validation mutation
export const useCouponMutation = () => {
  return useMutation({
    mutationFn: (code) => localDataService.validateCoupon(code)
  });
};

// Place order mutation
export const usePlaceOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderData) => localDataService.placeOrder(orderData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    }
  });
};
