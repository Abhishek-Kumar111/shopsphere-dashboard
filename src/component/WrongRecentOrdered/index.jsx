import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';

import Table from '@mui/material/Table';

const RecentOrdersTable = () => {
  const [expandedOrders, setExpandedOrders] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Sample orders data
  const orders = [
    {
      id: 1,
      orderId: 'ORD-2024-001',
      paymentId: 'PAY-789123',
      name: 'John Doe',
      phone: '+91 9876543210',
      address: '123 Main St, Downtown',
      pincode: '110001',
      totalAmount: '$299.97',
      email: 'john.doe@email.com',
      userId: 'USER-456',
      status: 'Delivered',
      date: '2024-01-15',
      items: [
        {
          productId: 'PROD-001',
          title: 'iPhone 14 Pro',
          image: 'https://via.placeholder.com/50',
          quantity: 1,
          price: '$999.00',
          subTotal: '$999.00'
        },
        {
          productId: 'PROD-002',
          title: 'AirPods Pro',
          image: 'https://via.placeholder.com/50',
          quantity: 2,
          price: '$249.00',
          subTotal: '$498.00'
        }
      ]
    },
    {
      id: 2,
      orderId: 'ORD-2024-002',
      paymentId: 'PAY-456789',
      name: 'Jane Smith',
      phone: '+91 8765432109',
      address: '456 Oak Avenue, Uptown',
      pincode: '110002',
      totalAmount: '$149.99',
      email: 'jane.smith@email.com',
      userId: 'USER-789',
      status: 'Shipped',
      date: '2024-01-14',
      items: [
        {
          productId: 'PROD-003',
          title: 'Nike Air Max',
          image: 'https://via.placeholder.com/50',
          quantity: 1,
          price: '$129.99',
          subTotal: '$129.99'
        }
      ]
    },
    {
      id: 3,
      orderId: 'ORD-2024-003',
      paymentId: 'PAY-321654',
      name: 'Mike Johnson',
      phone: '+91 7654321098',
      address: '789 Pine Street, Midtown',
      pincode: '110003',
      totalAmount: '$89.50',
      email: 'mike.johnson@email.com',
      userId: 'USER-321',
      status: 'Processing',
      date: '2024-01-13',
      items: [
        {
          productId: 'PROD-004',
          title: 'Coffee Maker',
          image: 'https://via.placeholder.com/50',
          quantity: 1,
          price: '$89.50',
          subTotal: '$89.50'
        }
      ]
    },
    

    
  ];

  const toggleExpand = (orderId) => {
    setExpandedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-full mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Recent Orders</h1>
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table stickyHeader  className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 w-12"></th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[120px]">Order ID</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[120px]">Payment ID</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[150px]">Name</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[140px]">Phone No.</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[200px]">Address</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[100px]">Pincode</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[120px]">Total Amount</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[200px]">Email</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[100px]">User ID</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[120px]">Order Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 min-w-[120px]">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <React.Fragment key={order.id}>
                    {/* Main Order Row */}
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                      <td className="py-4 px-4">
                        <button
                          onClick={() => toggleExpand(order.id)}
                          className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors duration-200"
                        >
                          {expandedOrders.includes(order.id) ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronUp className="w-5 h-5" />
                          )}
                        </button>
                      </td>
                      <td className="py-4 px-4 font-medium text-blue-600">{order.orderId}</td>
                      <td className="py-4 px-4 text-gray-700">{order.paymentId}</td>
                      <td className="py-4 px-4 font-medium text-gray-900">{order.name}</td>
                      <td className="py-4 px-4 text-gray-700">{order.phone}</td>
                      <td className="py-4 px-4 text-gray-700">{order.address}</td>
                      <td className="py-4 px-4 text-gray-700">{order.pincode}</td>
                      <td className="py-4 px-4 font-semibold text-green-600">{order.totalAmount}</td>
                      <td className="py-4 px-4 text-gray-700">{order.email}</td>
                      <td className="py-4 px-4 text-gray-700">{order.userId}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700">{order.date}</td>
                    </tr>

                    {/* Expanded Order Items Row */}
                    {expandedOrders.includes(order.id) && (
                      <tr className="bg-gray-50">
                        <td colSpan="12" className="p-0">
                          <div className="px-4 py-4">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Order Items</h4>
                            <div className="overflow-x-auto">
                              <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-gray-100">
                                  <tr>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Product ID</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Product Title</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Image</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Quantity</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Sub Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {order.items.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-100">
                                      <td className="py-3 px-4 text-gray-700">{item.productId}</td>
                                      <td className="py-3 px-4 font-medium text-gray-900">{item.title}</td>
                                      <td className="py-3 px-4">
                                        <img 
                                          src={item.image} 
                                          alt={item.title}
                                          className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                                        />
                                      </td>
                                      <td className="py-3 px-4 text-gray-700">{item.quantity}</td>
                                      <td className="py-3 px-4 font-medium text-gray-900">{item.price}</td>
                                      <td className="py-3 px-4 font-semibold text-green-600">{item.subTotal}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrdersTable;