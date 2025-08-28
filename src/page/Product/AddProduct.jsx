import React, { useState } from "react";
import {
  FaProductHunt,
  FaDollarSign,
  FaTags,
  FaLayerGroup,
  FaRulerCombined,
  FaWeight,

  FaUpload,
  FaTimes,
  FaPlus
} from "react-icons/fa";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    category: "",
    subcategory: "",
    size: "",
    weight: "",
    description: "",
    tags: []
  });

  const [images, setImages] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  const categories = [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports & Outdoors",
    "Books",
    "Toys & Games",
    "Health & Beauty",
    "Automotive"
  ];

  const subcategories = {
    Electronics: ["Smartphones", "Laptops", "Headphones", "Cameras"],
    Clothing: ["Men's Wear", "Women's Wear", "Kids Wear", "Accessories"],
    "Home & Garden": ["Furniture", "Kitchen", "Decor", "Garden Tools"],
    "Sports & Outdoors": ["Fitness", "Outdoor Gear", "Sports Equipment"],
    Books: ["Fiction", "Non-Fiction", "Educational", "Comics"],
    "Toys & Games": ["Action Figures", "Board Games", "Educational Toys"],
    "Health & Beauty": ["Skincare", "Makeup", "Health Supplements"],
    Automotive: ["Car Parts", "Tools", "Accessories"]
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: Date.now() + Math.random()
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag("");
    }
  };

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Images:", images);
    // Here you would typically send the data to your backend
    alert("Product data logged to console!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white text-center">
              Add New Product
            </h1>
            <p className="text-blue-100 text-center mt-2">
              Fill in the details below to add a new product to your inventory
            </p>
          </div>

          <div className="p-8">
            <div onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Product Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Product Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaProductHunt className="text-blue-500" />
                    </div>
                    <input
                      type="text"
                      value={formData.productName}
                      onChange={(e) => handleInputChange('productName', e.target.value)}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter product name"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Price *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaDollarSign className="text-green-500" />
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Category *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaTags className="text-purple-500" />
                    </div>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subcategory */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Subcategory
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLayerGroup className="text-indigo-500" />
                    </div>
                    <select
                      value={formData.subcategory}
                      onChange={(e) => handleInputChange('subcategory', e.target.value)}
                      disabled={!formData.category}
                      className={`w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        !formData.category ? 'bg-gray-100 cursor-not-allowed' : ''
                      }`}
                    >
                      <option value="">Select Subcategory</option>
                      {formData.category && subcategories[formData.category]?.map((sub) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Size */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Size
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaRulerCombined className="text-orange-500" />
                    </div>
                    <input
                      type="text"
                      value={formData.size}
                      onChange={(e) => handleInputChange('size', e.target.value)}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., XL, 10cm x 5cm"
                    />
                  </div>
                </div>

                {/* Weight */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Weight
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaWeight className="text-red-500" />
                    </div>
                    <input
                      type="text"
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., 2.5 kg, 500g"
                    />
                  </div>
                </div>
              </div>

              {/* Tags Section */}
              <div className="mt-6 space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Tags
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={handleTagKeyPress}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter a tag and press Enter"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    disabled={!currentTag.trim()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
                  >
                    <FaPlus size={12} />
                    Add
                  </button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 text-blue-600 hover:text-red-600 transition-colors"
                        >
                          <FaTimes size={10} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-6 space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Description
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FaWeight className="text-teal-500" />
                  </div>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Describe your product in detail..."
                  />
                </div>
              </div>

              {/* Image Upload Section */}
              <div className="mt-6 space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Product Images
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                  <FaUpload className="text-4xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Upload Product Images
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Drag and drop images here or click to browse
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-200">
                      <FaUpload />
                      Choose Images
                    </div>
                  </label>
                  
                  {images.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-left text-sm font-semibold text-gray-700 mb-3">
                        Preview ({images.length} images)
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image) => (
                          <div key={image.id} className="relative group">
                            <img
                              src={image.preview}
                              alt="Product preview"
                              className="w-full h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
                              loading="lazy"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(image.id)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
                            >
                              <FaTimes size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;