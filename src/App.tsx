import React from 'react';
import AdminPanel from './components/AdminPanel';
import withAuthorization from './authrization/Authorization';
import type { CurrentUser } from './types';

const AdminPanelWithAuth = withAuthorization(AdminPanel, ['admin']);

const currentUserExample: CurrentUser = {
  roles: ['admin'],  
};

const App: React.FC = () => {
  return (
    <div>
      <AdminPanelWithAuth currentUser={currentUserExample} />
    </div>
  );
};

export default App;