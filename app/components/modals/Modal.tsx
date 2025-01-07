// app/components/Modal/Modal.tsx
"use client"
import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-brandColor-500 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p>This is a modal.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
