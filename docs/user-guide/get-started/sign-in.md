---
sidebar_position: 3
sidebar_label: "Sign in"
---
import FeatureFlag from '@site/src/components/FeatureFlag';
import useBaseUrl from '@docusaurus/useBaseUrl';

<FeatureFlag flag="enable_multi_tenants">

# Sign in

Sign in to Metadata Capture with your organisation credentials—no need to create a separate account. 

Metadata Capture uses your organisation’s **Identity and Access Management (IAM)** system to facilitate your access and permissions within the platform. For questions regarding your organisation account, please contact your Inventory Coordinator or IT support team.

To sign in to Metadata Capture:
 
1. Obtain the link to Metadata Capture from your Inventory Coordinator.

3. Open Metadata Capture in your web browser.

3. Select your sign-in method and sign in with your organisation credentials.

   <img src={useBaseUrl('/get-started/sign-in.png')} alt="A screenshot of the sign-in page with options to connect using LuxTrust, LNDS, or Email " />

4. After you sign in, the Metadata Capture home page loads and you can [explore the dashboard](dashboard-overview..md).

:::info Unauthorised Access?

If you're signing in for the first time or if there are no roles assigned to your account, you may get an "**Unauthorized Access**" error. Contact your Inventory Coordinator and request that they assign the necessary roles to your account, and then try again.
:::
</FeatureFlag>

<FeatureFlag flag="enable_multi_tenants" inverse>
# Sign in

Sign in to Metadata Capture with your organisation credentials—no need to create a separate account.

Metadata Capture uses your organisation's **Identity and Access Management (IAM)** system to facilitate your access and permissions within the platform. For questions regarding your organisation account, please contact your IT support team.

To sign in to Metadata Capture:

1. Obtain the link to Metadata Capture from your IT support team.

3. Open Metadata Capture in your web browser.

3. Select your sign-in method and sign in with your organisation credentials.

4. After you sign in, the Metadata Capture home page loads and you can [explore the dashboard](dashboard-overview..md).

</FeatureFlag>
