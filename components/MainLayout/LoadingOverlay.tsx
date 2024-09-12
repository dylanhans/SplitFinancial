"use client"
import { useLoading } from '@/app/context/LoadingContext';
import React from 'react';

const LoadingOverlay: React.FC = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
  <div className="loading-container">
    <div className="loading-circle"></div>
    <img src="/icons/headerlogo.png" alt="Loading..." className="loading-image" />
  </div>
</div>
  );
};

export default LoadingOverlay;