---
sidebar_position: 4
sidebar_label: "Check your permissions"
---
import FeatureFlag from '@site/src/components/FeatureFlag';
import useBaseUrl from '@docusaurus/useBaseUrl';

<FeatureFlag flag="enable_multi_tenants">

# Check your permissions

Your ability to perform actions and view datasets depend on the **roles** and **organisations** assigned to you by your Inventory Coordinator. If you have limited access, or if you're using Metadata Capture for the first time, check your permissions or contact your Inventory Coordinator.

Check your permissions and roles:

1. Select the profile icon (<svg xmlns="http://www.w3.org/2000/svg" style={{display:"inline",verticalAlign:"middle",width:"1em",height:"1em"}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/></svg>). Your current organisations and roles appear below your name.

2. Select the role you want to view. The **Role Directory** opens with the list of roles and permissions.

   :::info Using the Role Directory

    While the Role Directory lists all available roles in your organisation, **only the permissions assigned to your role** apply to you. To request additional roles or organisations, contact your Inventory Coordinator.

   :::

   <img src={useBaseUrl('/get-started/role-directory.png')} alt="Role Directory showing permissions for different roles"  />


</FeatureFlag>

<FeatureFlag flag="enable_multi_tenants" inverse>

# Check your permissions

Your ability to perform actions and view datasets depend on the **role** assigned to you. If you have limited access, or if you're using Metadata Capture for the first time, check your permissions or contact your IT Support.

Check your permissions and roles:

1. Select the profile icon (<svg xmlns="http://www.w3.org/2000/svg" style={{display:"inline",verticalAlign:"middle",width:"1em",height:"1em"}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/></svg>). Your current role appear below your name.

2. Select the role you want to view. The **Role Directory** opens with the list of roles and permissions.

   <img src={useBaseUrl('/get-started/role-directory.png')} alt="Role Directory showing permissions for different roles"  />

</FeatureFlag>
