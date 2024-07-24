import React, { useState } from 'react';
import { Search, Code } from 'lucide-react';

const codeSnippets = [
  { id: 1, title: 'OpenAI API Call', category: 'OpenAI', code: 'const response = await openai.createCompletion({ ... });', thumbnail: '/api/placeholder/300/200' },
  { id: 2, title: 'Captivate Animation', category: 'E-learning', code: 'var animation = cpInfoCurrentSlide.createObjLayer(...)', thumbnail: '/api/placeholder/300/200' },
  { id: 3, title: 'Claude Conversation', category: 'Claude', code: 'const response = await anthropic.complete({ ... });', thumbnail: '/api/placeholder/300/200' },
  // Add more snippets as needed
];

const categories = ['All', 'OpenAI', 'Claude', 'E-learning', 'Dashboard'];

const CodeSnippetCard = ({ title, category, code, thumbnail }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
    <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{category}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        View Code
      </button>
    </div>
  </div>
);

const CodeSnippetGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSnippets = codeSnippets.filter(snippet =>
    (snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     snippet.code.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || snippet.category === selectedCategory)
  );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Code Snippet Gallery</h1>
      <div className="flex justify-between items-center mb-8">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search snippets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSnippets.map((snippet) => (
          <CodeSnippetCard key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
};

export default CodeSnippetGallery;