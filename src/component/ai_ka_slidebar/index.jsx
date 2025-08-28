const products = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      category: 'Electronics',
      subCategory: 'Smartphones',
      price: '$999',
      sales: '1,234',
      stock: '45',
      rating: '4.8'
    },
    {
      id: 2,
      name: 'Nike Air Max',
      category: 'Fashion',
      subCategory: 'Shoes',
      price: '$129',
      sales: '856',
      stock: '23',
      rating: '4.5'
    },
    {
      id: 3,
      name: 'MacBook Pro',
      category: 'Electronics',
      subCategory: 'Laptops',
      price: '$1,999',
      sales: '432',
      stock: '12',
      rating: '4.9'
    },
    {
      id: 4,
      name: 'Coffee Maker',
      category: 'Home',
      subCategory: 'Kitchen',
      price: '$89',
      sales: '678',
      stock: '67',
      rating: '4.3'
    },
    {
      id: 5,
      name: 'Gaming Chair',
      category: 'Furniture',
      subCategory: 'Office',
      price: '$249',
      sales: '234',
      stock: '18',
      rating: '4.6'
    },
    {
      id: 6,
      name: 'Wireless Headphones',
      category: 'Electronics',
      subCategory: 'Audio',
      price: '$199',
      sales: '567',
      stock: '34',
      rating: '4.7'
    },
    {
      id: 7,
      name: 'Smart Watch',
      category: 'Electronics',
      subCategory: 'Wearables',
      price: '$299',
      sales: '890',
      stock: '28',
      rating: '4.4'
    },
    {
      id: 8,
      name: 'Desk Lamp',
      category: 'Home',
      subCategory: 'Lighting',
      price: '$45',
      sales: '123',
      stock: '56',
      rating: '4.2'
    },
    {
      id: 9,
      name: 'Running Shoes',
      category: 'Fashion',
      subCategory: 'Shoes',
      price: '$89',
      sales: '445',
      stock: '67',
      rating: '4.1'
    },
    {
      id: 10,
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      subCategory: 'Audio',
      price: '$79',
      sales: '334',
      stock: '43',
      rating: '4.3'
    },
    {
      id: 11,
      name: 'Office Chair',
      category: 'Furniture',
      subCategory: 'Office',
      price: '$179',
      sales: '221',
      stock: '15',
      rating: '4.5'
    },
    {
      id: 12,
      name: 'Kitchen Blender',
      category: 'Home',
      subCategory: 'Kitchen',
      price: '$65',
      sales: '398',
      stock: '52',
      rating: '4.0'
    }
  ];

  <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 w-12">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      checked={products.length > 0 && selectedProducts.length === products.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">Product</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">Category</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">Sub Category</th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">Price</th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">Sales</th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">Stock</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">Rating</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              