import React, { useState } from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchBox from '../SearchBox';

// Dummy data for the Recent Orders table. Each order object
// now includes a nested 'items' array to represent the ordered products.
// This structure is essential for the collapsible row functionality.
const createOrderData = (orderId, paymentId, name, phone, address, pincode, totalAmount, email, userId, items) => {
  return {
    orderId,
    paymentId,
    name,
    phone,
    address,
    pincode,
    totalAmount,
    email,
    userId,
    items,
  };
};

const createItemData = (productId, title, imageUrl, quantity, price) => {
  const subTotal = quantity * price;
  return { productId, title, imageUrl, quantity, price, subTotal };
};

const allOrders = [
  createOrderData(
    'ORD-2023001',
    'PAY-987654',
    'John Doe',
    '123-456-7890',
    '123 Main St',
    '123456',
    125.99,
    'john.doe@example.com',
    'USER-001',
    [
      createItemData(1, 'Laptop abhieeeeeee eeeeee eeeeeee eeeeeeeee eeeeeeeeeee', 'https://placehold.co/50x50/B68700/FFF?text=Laptop', 1, 1000.00),
      createItemData(2, 'Mousepad with a super long name that will force the text to wrap', 'https://placehold.co/50x50/333/FFF?text=Mousepad', 2, 12.50),
    ],
  ),
  createOrderData(
    'ORD-2023002',
    'PAY-112233',
    'Jane Smith',
    '987-654-3210',
    '456 Oak Ave',
    '654321',
    49.50,
    'jane.smith@example.com',
    'USER-002',
    [
      createItemData(3, 'Wireless Keyboard', 'https://placehold.co/50x50/6C40B5/FFF?text=Keyboard', 1, 49.50),
    ],
  ),
  createOrderData(
    'ORD-2023003',
    'PAY-445566',
    'Peter Jones',
    '555-123-4567',
    '789 Pine Ln',
    '789123',
    75.00,
    'peter.jones@example.com',
    'USER-003',
    [
      createItemData(4, 'Desk Lamp', 'https://placehold.co/50x50/455A64/FFF?text=Lamp', 1, 30.00),
      createItemData(5, 'Notebook', 'https://placehold.co/50x50/9C27B0/FFF?text=Notebook', 3, 15.00),
    ],
  ),
  createOrderData(
    'ORD-2023004',
    'PAY-778899',
    'Anna Williams',
    '111-222-3333',
    '101 Birch Rd',
    '321654',
    240.75,
    'anna.williams@example.com',
    'USER-004',
    [
      createItemData(6, 'Smartwatch', 'https://placehold.co/50x50/3F51B5/FFF?text=Watch', 1, 240.75),
    ],
  ),
  createOrderData(
    'ORD-2023005',
    'PAY-001122',
    'David Brown',
    '444-555-6666',
    '202 Cedar Pl',
    '987654',
    18.00,
    'david.brown@example.com',
    'USER-005',
    [
      createItemData(7, 'Socks', 'https://placehold.co/50x50/9E9E9E/FFF?text=Socks', 2, 9.00),
    ],
  ),
];

const RecentOrdersTable = () => {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // State to manage which row is currently open (expanded)
  const [openRowId, setOpenRowId] = useState(null);

  // Function to handle the expanding/collapsing of a row
  const handleToggleRow = (orderId) => {
    setOpenRowId(openRowId === orderId ? null : orderId);
  };

  // Pagination handler functions
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box className="p-4 !bg-gray-100 min-h-screen font-sans">
      <div className="header flex items-center justify-between mb-4 mt-6 w-full">
        <h1 className='!text-2xl !font-bold !text-gray-800 w-[50%]'>Recent Orders</h1>
        <div className="w-[50%]">
          <SearchBox />
        </div>
      </div>

      <Paper className="p-4 rounded-xl shadow-lg">
        <TableContainer component={Paper} className="max-h-[600px] overflow-auto">
          <Table stickyHeader aria-label="recent orders table">
            {/* Main Table Header */}
            <TableHead>
              <TableRow className="!bg-red-500">
                {/* Empty cell for the expand/collapse icon */}
                <TableCell />
                <TableCell className="font-semibold text-gray-700 whitespace-nowrap">Order Id</TableCell>
                <TableCell align="right" className="font-semibold text-gray-700 whitespace-nowrap">Payment Id</TableCell>
                <TableCell align="right" className="font-semibold text-gray-700 whitespace-nowrap">Name</TableCell>
                <TableCell align="right" className="font-semibold text-gray-700 whitespace-nowrap">Phone</TableCell>
                <TableCell align="right" className="font-semibold text-gray-700 whitespace-nowrap">Address</TableCell>
                <TableCell align="right" className="font-semibold text-gray-700 whitespace-nowrap">Pincode</TableCell>
                <TableCell align="right" className="font-semibold text-gray-700 whitespace-nowrap">Total Amount</TableCell>
                <TableCell align="right" className="font-semibold text-gray-700 whitespace-nowrap">Email</TableCell>
                <TableCell align="right" className="font-semibold text-gray-700 whitespace-nowrap">User Id</TableCell>
              </TableRow>
            </TableHead>
            {/* Main Table Body */}
            <TableBody>
              {allOrders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <React.Fragment key={row.orderId}>
                    {/* Main Row */}
                    <TableRow className="!bg-gray-500 transition-colors hover:!bg-gray-600">
                      {/* Expand/Collapse IconButton */}
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleToggleRow(row.orderId)}
                        >
                          {openRowId === row.orderId ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                      </TableCell>
                      <TableCell component="th" scope="row" className="whitespace-nowrap">
                        <Typography variant="body2" className="text-gray-800 font-medium">{row.orderId}</Typography>
                      </TableCell>
                      <TableCell align="right" className="text-gray-600 whitespace-nowrap">{row.paymentId}</TableCell>
                      <TableCell align="right" className="text-gray-600 whitespace-nowrap">{row.name}</TableCell>
                      <TableCell align="right" className="text-gray-600 whitespace-nowrap">{row.phone}</TableCell>
                      <TableCell align="right" className="text-gray-600 whitespace-nowrap">{row.address}</TableCell>
                      <TableCell align="right" className="text-gray-600 whitespace-nowrap">{row.pincode}</TableCell>
                      <TableCell align="right" className="text-green-600 font-semibold whitespace-nowrap">${row.totalAmount.toFixed(2)}</TableCell>
                      <TableCell align="right" className="text-gray-600 whitespace-nowrap">{row.email}</TableCell>
                      <TableCell align="right" className="text-gray-600 whitespace-nowrap">{row.userId}</TableCell>
                    </TableRow>

                    {/* Collapsible Row for Ordered Items */}
                    <TableRow>
                      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
                        <Collapse in={openRowId === row.orderId} timeout="auto" unmountOnExit>
                          <Box className="my-2 ml-4">
                            <Typography variant="h6" className="text-gray-800 !text-sm !font-semibold mb-2">
                              Ordered Items
                            </Typography>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow className="bg-gray-100">
                                  <TableCell className="!text-xs !font-semibold text-gray-600 !p-2 whitespace-nowrap">Product Id</TableCell>
                                  <TableCell className="!text-xs !font-semibold text-gray-600 !p-2">Product</TableCell>
                                  <TableCell align="right" className="!text-xs !font-semibold text-gray-600 !p-2 whitespace-nowrap">Quantity</TableCell>
                                  <TableCell align="right" className="!text-xs !font-semibold text-gray-600 !p-2 whitespace-nowrap">Price ($)</TableCell>
                                  <TableCell align="right" className="!text-xs !font-semibold text-gray-600 !p-2 whitespace-nowrap">Sub Total ($)</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {row.items.map((item) => (
                                  <TableRow key={item.productId} className='!bg-gray-100 transition-colors hover:!bg-gray-200'>
                                    <TableCell component="th" scope="row" className="!text-xs text-gray-600 !p-2 whitespace-nowrap">
                                      {item.productId}
                                    </TableCell>
                                    <TableCell className="!p-2">
                                      <Box className="flex items-center gap-2">
                                        <img
                                          src={item.imageUrl}
                                          alt={item.title}
                                          className="w-8 h-8 rounded-md object-cover border border-gray-200"
                                        />
                                        <Typography variant="body2" className="text-gray-800 font-medium !text-xs max-w-[150px]">{item.title}</Typography>
                                      </Box>
                                    </TableCell>
                                    <TableCell align="right" className="!text-xs text-gray-600 !p-2 whitespace-nowrap">{item.quantity}</TableCell>
                                    <TableCell align="right" className="!text-xs text-gray-600 !p-2 whitespace-nowrap">{item.price.toFixed(2)}</TableCell>
                                    <TableCell align="right" className="!text-xs text-green-600 !font-semibold !p-2 whitespace-nowrap">{item.subTotal.toFixed(2)}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Pagination Section */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={allOrders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="mt-4"
        />
      </Paper>
    </Box>
  );
};

export default RecentOrdersTable;
