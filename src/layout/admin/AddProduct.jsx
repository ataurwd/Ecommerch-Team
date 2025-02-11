import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricing, setPricing] = useState("");
  const [tags, setTags] = useState([]); // Array for multiple tags
  const [images, setImages] = useState([]); // Local image state
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]); // URLs of uploaded images
  const [isUploading, setIsUploading] = useState(false); // State to track if upload is in progress
  const navigate = useNavigate()

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    // Update local image state
    setImages((prev) => [...prev, ...files]);

    // Upload images and get the URLs
    const imageUrls = await uploadImagesToImageBB(files);

    // Update state with uploaded image URLs
    setUploadedImageUrls((prev) => [...prev, ...imageUrls]);
  };

  // Upload images to ImageBB
  const uploadImagesToImageBB = async (files) => {
    const imageUrls = [];
    try {
      setIsUploading(true);
      for (const file of files) {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=85530c008a57879138bf71cc5b0602df`,
          formData
        );

        if (response.data.success) {
          imageUrls.push(response.data.data.url); // Push the image URL
        }
      }
      setIsUploading(false);
      return imageUrls; // Return the array of image URLs
    } catch (error) {
      setIsUploading(false);
      console.error("Image upload failed", error);
      return []; // Return an empty array in case of error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      title,
      description,
      pricing,
      tags, // Send multiple tags as an array
      images: uploadedImageUrls, // Send uploaded image URLs
    };

    try {
      const response = await axios.post("http://localhost:5000/product", formData);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Product Added Successfully!",
          text: "Your product has been added.",
          icon: "success",
        });
        // reset form
        form.reset();
        setTags([]); // Reset selected tags
        setUploadedImageUrls([]); // Reset image previews
        navigate('/admin-dashboard/admin-dashboard/manage-products')
      }
    } catch (error) {
      console.error("Error submitting product", error);
    }
  };

  const handleTagChange = (e) => {
    const value = e.target.value;
    setTags((prevTags) =>
      prevTags.includes(value)
        ? prevTags.filter((tag) => tag !== value) // Remove if already selected
        : [...prevTags, value] // Add if not selected
    );
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-lg mt-5">
      <h2 className="text-2xl font-semibold mb-4">Product Submission</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="images">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            className="mt-1 cursor-pointer block w-full text-sm text-gray-700 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-indigo-500 file:text-white hover:file:bg-indigo-600"
            multiple
            onChange={handleImageUpload}
          />
        </div>

        {/* Display Image Previews */}
        {uploadedImageUrls.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700">Uploaded Images:</h3>
            <div className="flex flex-wrap gap-2">
              {uploadedImageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`uploaded-image-${index}`}
                  className="w-24 h-24 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        )}

        {/* Pricing */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="pricing">
            Pricing
          </label>
          <input
            type="number"
            id="pricing"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            required
          />
        </div>

        {/* Tags Checkboxes */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category1"
                value="Maya"
                checked={tags.includes("Maya")}
                onChange={handleTagChange}
                className="form-checkbox"
              />
              <label htmlFor="category1" className="ml-2">Maya</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category2"
                value="3D"
                checked={tags.includes("3D")}
                onChange={handleTagChange}
                className="form-checkbox"
              />
              <label htmlFor="category2" className="ml-2">3D</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category3"
                value="Animation"
                checked={tags.includes("Animation")}
                onChange={handleTagChange}
                className="form-checkbox"
              />
              <label htmlFor="category3" className="ml-2">Animation</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category4"
                value="Mock Up"
                checked={tags.includes("Mock Up")}
                onChange={handleTagChange}
                className="form-checkbox"
              />
              <label htmlFor="category3" className="ml-2">Mock Up</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isUploading}
          className="w-full bg-indigo-500 text-white py-2 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {isUploading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
