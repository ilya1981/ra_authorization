import React from 'react';
import AccessDenied from '../components/AccessDenied';
import type { CurrentUser } from '../types';



interface AuthorizationProps {
  currentUser?: CurrentUser | null;
}

function Authorization<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: string[]
) {

  const Authorization: React.FC<P & AuthorizationProps> = (props) => {
    const { currentUser, ...restProps } = props;

    if (!currentUser?.roles) {
      return <AccessDenied />;
    }

    const hasAccess = currentUser.roles.some((role) => allowedRoles.includes(role));

    if (!hasAccess) {
      return <AccessDenied />;
    }

  
    return <WrappedComponent {...(restProps as P)} />;
  };

 
  const wrappedName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  Authorization.displayName = `Authorization(${wrappedName})`;

  return Authorization;
}

export default Authorization;
