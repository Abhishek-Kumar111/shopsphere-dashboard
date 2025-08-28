import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import TableHead from '@mui/material/TableHead';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchBox from '../SearchBox';
import { Button } from '@mui/material';

// Dummy data for the table, now including a static image URL for each product
function createData(id, productName, category, subCategory, price, sales, stock, rating, imageUrl) {
  return { id, productName, category, subCategory, price, sales, stock, rating, imageUrl };
}

const allRows = [
  createData(1, 'Laptop', 'Electronics', 'Laptops', 1200, 150, 50, 4.5, 'https://placehold.co/50x50/B68700/FFF?text=Laptop'),
  createData(2, 'T-Shirt', 'Apparel', 'Men\'s Clothing', 25, 300, 200, 4.2, 'https://placehold.co/50x50/333/FFF?text=Shirt'),
  createData(3, 'Coffee Maker', 'Home Appliances', 'Kitchen Appliances', 75, 90, 80, 4.8, 'https://placehold.co/50x50/6C40B5/FFF?text=Coffee'),
  createData(4, 'Headphones', 'Electronics', 'Audio', 150, 200, 120, 4.6, 'https://placehold.co/50x50/00796B/FFF?text=Headphones'),
  createData(5, 'Jeans', 'Apparel', 'Women\'s Clothing', 60, 180, 150, 4.3, 'https://placehold.co/50x50/5D4037/FFF?text=Jeans'),
  createData(6, 'Toaster', 'Home Appliances', 'Kitchen Appliances', 40, 100, 90, 4.1, 'https://placehold.co/50x50/455A64/FFF?text=Toaster'),
  createData(7, 'Smartphone', 'Electronics', 'Mobile Phones', 800, 120, 75, 4.7, 'https://placehold.co/50x50/FBC02D/FFF?text=Phone'),
  createData(8, 'Dress', 'Apparel', 'Women\'s Clothing', 50, 180, 180, 4.4, 'https://placehold.co/50x50/E91E63/FFF?text=Dress'),
  createData(9, 'Blender', 'Home Appliances', 'Kitchen Appliances', 90, 60, 60, 4.9, 'https://placehold.co/50x50/FF5722/FFF?text=Blender'),
  createData(10, 'Smartwatch', 'Electronics', 'Wearables', 250, 100, 100, 4.5, 'https://placehold.co/50x50/3F51B5/FFF?text=Watch'),
  createData(11, 'Sneakers', 'Apparel', 'Footwear', 85, 220, 110, 4.6, 'https://placehold.co/50x50/8D6E63/FFF?text=Sneakers'),
  createData(12, 'Desk Lamp', 'Home Appliances', 'Lighting', 30, 75, 95, 4.3, 'https://placehold.co/50x50/9C27B0/FFF?text=Lamp'),
  createData(13, 'Portable Speaker', 'Electronics', 'Audio', 95, 140, 65, 4.7, 'https://placehold.co/50x50/FFEB3B/FFF?text=Speaker'),
  createData(14, 'Hoodie', 'Apparel', 'Men\'s Clothing', 45, 250, 130, 4.5, 'https://placehold.co/50x50/795548/FFF?text=Hoodie'),
  createData(15, 'Food Processor', 'Home Appliances', 'Kitchen Appliances', 110, 55, 40, 4.8, 'https://placehold.co/50x50/00BCD4/FFF?text=Food+Proc'),
  createData(16, 'Digital Camera', 'Electronics', 'Cameras', 450, 30, 25, 4.9, 'https://placehold.co/50x50/B71C1C/FFF?text=Camera'),
  createData(17, 'Scarf', 'Apparel', 'Accessories', 15, 100, 190, 4.0, 'https://placehold.co/50x50/FF9800/FFF?text=Scarf'),
  createData(18, 'Microwave Oven', 'Home Appliances', 'Kitchen Appliances', 120, 80, 55, 4.6, 'https://placehold.co/50x50/4CAF50/FFF?text=Microwave'),
  createData(19, 'Tablet', 'Electronics', 'Tablets', 600, 70, 45, 4.8, 'https://placehold.co/50x50/2196F3/FFF?text=Tablet'),
  createData(20, 'Socks', 'Apparel', 'Footwear', 10, 500, 300, 3.9, 'https://placehold.co/50x50/9E9E9E/FFF?text=Socks'),
];

// Helper functions to get unique categories and subcategories for the filters
const uniqueCategories = [...new Set(allRows.map(row => row.category))];
const uniqueSubCategories = [...new Set(allRows.map(row => row.subCategory))];


const ProductTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  // Filter the rows based on the selected category and subcategory
  const filteredRows = allRows.filter(row => {
    const categoryMatch = selectedCategory === 'All' || row.category === selectedCategory;
    const subCategoryMatch = selectedSubCategory === 'All' || row.subCategory === selectedSubCategory;
    return categoryMatch && subCategoryMatch;
  });



  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Row selection logic
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredRows.map((n) => n.id);
      setSelectedRows(newSelecteds);
      return;
    }
    setSelectedRows([]);
  };

  const handleRowClick = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1),
      );
    }
    setSelectedRows(newSelected);
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  return (
    <Box className="p-4 !bg-gray-100 min-h-screen font-sans">
      <div className="header flex items-center !justify-between mb-4 mt-6 w-full">
        <h1 className='!text-2xl !font-bold !text-gray-800 '>Recent Orders</h1>
        <div className="add product">
          <Button className="!bg-blue-500 hover:!bg-blue-600 !text-white">
            
            Add Product
          </Button>
        </div>
      </div>
      <Paper className="p-4 rounded-xl shadow-lg">



        {/* Filter Section */}
        <Box className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-6">
          <FormControl className="w-40 sm:w-1/3 min-w-[150px]">
            <InputLabel id="category-filter-label " >Category</InputLabel>
            <Select
              size="small"
              labelId="category-filter-label"
              id="category-filter"
              value={selectedCategory}
              label="Category"
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md bg-white"

            >
              <MenuItem value="All">
                <em>All Categories</em>
              </MenuItem>
              {uniqueCategories.map((category) => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>


          <FormControl className="w-full sm:w-1/3 !min-w-[100px]">
            <InputLabel id="subcategory-filter-label">Subcategory</InputLabel>
            <Select
              size="small"
              labelId="subcategory-filter-label"
              id="subcategory-filter"
              value={selectedSubCategory}
              label="Subcategory"
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              className="rounded-lg bg-white"
            >
              <MenuItem value="All">
                <em>All Subcategories</em>
              </MenuItem>
              {uniqueSubCategories.map((subCategory) => (
                <MenuItem key={subCategory} value={subCategory}>{subCategory}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className='flex items-center justify-end '>
            <SearchBox />
          </div>
        </Box>

        {/* Scrollable Table Section */}
        <Paper className="w-full rounded-xl shadow-md overflow-hidden">
          {/* We've moved the scrollbar to the TableContainer */}
          <TableContainer className="max-h-[600px]">
            <Table
              stickyHeader
              className="min-w-[900px] bg-white"
              aria-label="sticky table"
            >
              {/* Table Header with Checkbox */}
              <TableHead>
                <TableRow className="bg-gray-50">
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      indeterminate={selectedRows.length > 0 && selectedRows.length < filteredRows.length}
                      checked={filteredRows.length > 0 && selectedRows.length === filteredRows.length}
                      onChange={handleSelectAllClick}
                      inputProps={{
                        'aria-label': 'select all products',
                      }}
                    />
                  </TableCell>
                  <TableCell className="font-semibold text-gray-700">Product</TableCell>
                  <TableCell align="right" className="font-semibold text-gray-700">Category</TableCell>
                  <TableCell align="right" className="font-semibold text-gray-700">Sub Category</TableCell>
                  <TableCell align="right" className="font-semibold text-gray-700">Price</TableCell>
                  <TableCell align="right" className="font-semibold text-gray-700">Sales</TableCell>
                  <TableCell align="right" className="font-semibold text-gray-700">Stock</TableCell>
                  <TableCell align="right" className="font-semibold text-gray-700">Rating</TableCell>
                  <TableCell align="right" className="font-semibold text-gray-700">Actions</TableCell>
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {
                  filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const isItemSelected = isSelected(row.id);
                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleRowClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                          className="!bg-gray-100 transition-colors hover:!bg-gray-200"
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': `enhanced-table-checkbox-${row.id}`,
                              }}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Box className="flex items-center gap-2">
                              <img
                                src={row.imageUrl}
                                alt={row.productName}
                                className="w-10 h-10 rounded-md object-cover border border-gray-200"
                                onError={(e) => { e.target.src = 'https://placehold.co/50x50/E2E8F0/94A3B8?text=N/A'; }}
                              />
                              <Typography variant="body2" className="text-gray-800 font-medium">{row.productName}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="right" className="text-gray-600">{row.category}</TableCell>
                          <TableCell align="right" className="text-gray-600">{row.subCategory}</TableCell>
                          <TableCell align="right" className="text-green-600 font-semibold">${row.price}</TableCell>
                          <TableCell align="right" className="text-gray-600">{row.sales}</TableCell>
                          <TableCell align="right" className="text-gray-600">{row.stock}</TableCell>
                          <TableCell align="right">
                            <Rating name="read-only" value={row.rating} precision={0.5} readOnly />
                          </TableCell>
                          <TableCell align="right" className='!flex !justify-end !gap-1 !text-base !p-3'>
                            <IconButton aria-label="update">
                              <EditIcon className="text-blue-500 hover:text-blue-700" />
                            </IconButton>
                            <IconButton aria-label="see">
                              <VisibilityIcon className="text-gray-500 hover:text-gray-700" />
                            </IconButton>
                            <IconButton aria-label="delete">
                              <DeleteIcon className="text-red-500 hover:text-red-700" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Pagination Section */}
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredRows.length} // Count now reflects the filtered rows
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Paper>
    </Box>
  );
}
export default ProductTable;