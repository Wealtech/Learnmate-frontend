'use client'

import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

const CoursesSelectionPage = () => {
  const [selectedCourses, setSelectedCourses] = useState([
    { id: 1, name: 'Data Structures & Algorithm', code: 'COS 451' },
    { id: 2, name: 'Machine Learning', code: 'COS 460' },
    { id: 3, name: 'Operating Systems', code: 'COS 450' }
  ]);

  const availableCourses = [
    { id: 1, name: 'Data Structures & Algorithm', code: 'COS 451' },
    { id: 2, name: 'Web Development', code: 'COS 401' },
    { id: 3, name: 'Machine Learning', code: 'COS 460' },
    { id: 4, name: 'Database Systems', code: 'COS 440' },
    { id: 5, name: 'Operating Systems', code: 'COS 450' },
    { id: 6, name: 'Human-Computer Interaction', code: 'COS 420' },
    { id: 7, name: 'User Experience Design', code: 'COS 430' },
    { id: 8, name: 'Web Development Principles', code: 'COS 440' },
    { id: 9, name: 'Machine Learning BasiCOS', code: 'COS 450' }
  ];

  const toggleCourse = (course) => {
    const isSelected = selectedCourses.find(c => c.id === course.id);
    
    if (isSelected) {
      setSelectedCourses(selectedCourses.filter(c => c.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const removeCourse = (courseId) => {
    setSelectedCourses(selectedCourses.filter(c => c.id !== courseId));
  };

  const isCourseSelected = (courseId) => {
    return selectedCourses.some(c => c.id === courseId);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Available Courses</h2>
            <p className="text-sm text-gray-500">Select the courses you're currently enrolled in</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Computer Science</h3>
              
              <div className="space-y-3">
                {availableCourses.map((course) => (
                  <label
                    key={course.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={isCourseSelected(course.id)}
                      onChange={() => toggleCourse(course)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                      {course.name}
                    </span>
                    <span className="ml-auto px-2.5 py-0.5 bg-teal-100 text-teal-700 text-xs font-medium rounded">
                      {course.code}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Selected Courses</h2>
            <p className="text-sm text-gray-500">{selectedCourses.length} Courses Selected</p>
          </div>

          <div className="space-y-3 mb-6">
            {selectedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg p-4 flex items-start justify-between hover:shadow-sm transition-shadow"
              >
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{course.name}</h4>
                  <p className="text-sm text-gray-500">{course.code}</p>
                </div>
                <button
                  onClick={() => removeCourse(course.id)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Remove course"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mb-6">
            Save & Continue
          </button>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <span className="font-medium">Tip:</span> Select all your current courses to get the most relevant material recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSelectionPage;