import React, { useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return <div style={{ display: 'flex' }}>{children}</div>;
};

interface TabsTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        backgroundColor: isActive ? '#007bff' : '#fff',
        color: isActive ? '#fff' : '#000',
        border: '1px solid #ccc',
        cursor: 'pointer'
      }}>
      {children}
    </button>
  );
};

interface TabsContentProps {
  children: React.ReactNode;
  isActive: boolean;
}

export const TabsContent: React.FC<TabsContentProps> = ({ children, isActive }) => {
  return isActive ? <div>{children}</div> : null;
};
