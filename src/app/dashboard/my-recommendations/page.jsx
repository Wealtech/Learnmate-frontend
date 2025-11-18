'use client'

import React, { useState } from 'react';
import { Search, Download, Star, FileText, Video, File } from 'lucide-react';

const CourseMaterialsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [favorites, setFavorites] = useState([]);

  const materials = [
    {
      id: 1,
      title: 'Python Programming Fundamentals',
      tag: 'Sec 451',
      subtitle: 'Introduction to Python Programming',
      description: 'Comprehensive guide covering Python fundamentals, data structures, and object-oriented programming concepts with practical examples.',
      type: 'PDF',
      pages: 245,
      downloads: 2340,
      rating: 4.8,
      action: 'Read'
    },
    {
      id: 2,
      title: 'Python Programming Fundamentals',
      tag: 'Sec 451',
      subtitle: 'Introduction to Python Programming',
      description: 'Comprehensive guide covering Python fundamentals, data structures, and object-oriented programming concepts with practical examples.',
      type: 'Video',
      duration: '2h 30m',
      downloads: 2340,
      rating: 4.8,
      action: 'Watch'
    },
    {
      id: 3,
      title: 'Python Programming Fundamentals',
      tag: 'Sec 451',
      subtitle: 'Introduction to Python Programming',
      description: 'Comprehensive guide covering Python fundamentals, data structures, and object-oriented programming concepts with practical examples.',
      type: 'Article',
      pages: 245,
      downloads: 2340,
      rating: 4.8,
      action: 'Read'
    },
    {
      id: 4,
      title: 'Python Programming Fundamentals',
      tag: 'Sec 451',
      subtitle: 'Introduction to Python Programming',
      description: 'Comprehensive guide covering Python fundamentals, data structures, and object-oriented programming concepts with practical examples.',
      type: 'PDF',
      pages: 245,
      downloads: 2340,
      rating: 4.6,
      action: 'Read'
    },
    {
      id: 5,
      title: 'Python Programming Fundamentals',
      tag: 'Sec 451',
      subtitle: 'Introduction to Python Programming',
      description: 'Comprehensive guide covering Python fundamentals, data structures, and object-oriented programming concepts with practical examples.',
      type: 'PDF',
      pages: 245,
      downloads: 2340,
      rating: 4.8,
      action: 'Read'
    },
    {
      id: 6,
      title: 'Python Programming Fundamentals',
      tag: 'Sec 451',
      subtitle: 'Introduction to Python Programming',
      description: 'Comprehensive guide covering Python fundamentals, data structures, and object-oriented programming concepts with practical examples.',
      type: 'Video',
      duration: '2h 30m',
      downloads: 2340,
      rating: 4.8,
      action: 'Watch'
    }
  ];

  const filters = ['All', 'PDF', 'Video', 'Article'];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'PDF':
        return <FileText className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      case 'Article':
        return <File className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'PDF':
        return 'bg-green-100 text-green-700';
      case 'Video':
        return 'bg-green-100 text-green-700';
      case 'Article':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredMaterials = activeFilter === 'All' 
    ? materials 
    : materials.filter(m => m.type === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, materials, or topics..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg ${getTypeColor(material.type)} flex items-center justify-center flex-shrink-0`}>
                  {getTypeIcon(material.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">
                        {material.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-medium rounded">
                          {material.tag}
                        </span>
                        <span className="text-sm text-gray-500">{material.subtitle}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFavorite(material.id)}
                      className="text-gray-400 hover:text-yellow-500 transition-colors flex-shrink-0"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          favorites.includes(material.id)
                            ? 'fill-yellow-500 text-yellow-500'
                            : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {material.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="font-medium">{material.type}</span>
                <span>
                  {material.pages ? `${material.pages} pages` : material.duration}
                </span>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{material.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{material.rating}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 py-2.5 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="flex-1 py-2.5 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  {material.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseMaterialsPage;