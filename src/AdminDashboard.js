import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const categories = ['OpenAI', 'Claude', 'E-learning', 'Dashboard'];

const AdminDashboard = () => {
  const [newSnippet, setNewSnippet] = useState({ title: '', category: '', code: '', thumbnail: '' });

  const handleAddSnippet = (e) => {
    e.preventDefault();
    // Here you would typically send the new snippet to your backend
    console.log('New snippet:', newSnippet);
    // Reset the form
    setNewSnippet({ title: '', category: '', code: '', thumbnail: '' });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <form onSubmit={handleAddSnippet} className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={newSnippet.title}
            onChange={(e) => setNewSnippet({ ...newSnippet, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={newSnippet.category}
            onChange={(e) => setNewSnippet({ ...newSnippet, category: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
            Code
          </label>
          <textarea
            id="code"
            value={newSnippet.code}
            onChange={(e) => setNewSnippet({ ...newSnippet, code: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="thumbnail">
            Thumbnail URL
          </label>
          <input
            type="text"
            id="thumbnail"
            value={newSnippet.thumbnail}
            onChange={(e) => setNewSnippet({ ...newSnippet, thumbnail: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <Plus className="mr-2" /> Add Snippet
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;