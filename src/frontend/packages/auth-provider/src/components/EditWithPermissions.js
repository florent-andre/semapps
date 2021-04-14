import React from 'react';
import { Edit as RaEdit, usePermissionsOptimized } from 'react-admin';
import EditActions from './EditActions';
import EditToolbarWithPermissions from './EditToolbarWithPermissions';
import { rightsToDelete } from '../rights';

const EditWithPermissions = props => {
  const { permissions } = usePermissionsOptimized(props.id);
  return (
    <RaEdit actions={<EditActions />} {...props} permissions={permissions}>
      {React.cloneElement(props.children, {
        toolbar: <EditToolbarWithPermissions hasDelete={permissions && permissions.some(p => rightsToDelete.includes(p['acl:mode']))} />
      })}
    </RaEdit>
  );
};

export default EditWithPermissions;
