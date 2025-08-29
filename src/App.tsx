import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ProspectList } from './components/ProspectList';
import { Analytics } from './components/Analytics';
import { Campaigns } from './components/Campaigns';

type View = 'dashboard' | 'prospects' | 'analytics' | 'campaigns';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'prospects':
        return <ProspectList />;
      case 'analytics':
        return <Analytics />;
      case 'campaigns':
        return <Campaigns />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;