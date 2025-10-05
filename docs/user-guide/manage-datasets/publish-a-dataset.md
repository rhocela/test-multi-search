---
sidebar_position: 4
---
import FeatureFlag from '@site/src/components/FeatureFlag';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Publish a dataset

<FeatureFlag flag="enable_multi_tenants">
Publish datasets that have been approved by Metadata Approvers, either for your organisation or for all organisations.
</FeatureFlag>
<FeatureFlag flag="enable_multi_tenants" inverse>
Publish datasets that have been approved.
</FeatureFlag>

In this guide

> [Before you begin](#before-you-begin)  
> [Publish a dataset](#publish-a-dataset-1)

## Before you begin

<FeatureFlag flag="enable_multi_tenants">
- Ensure you have the **Catalogue Manager** role (or [check your permissions](../get-started/check-your-permissions.md)).
</FeatureFlag>
<FeatureFlag flag="enable_multi_tenants" inverse>
- Ensure you have the necessary permissions (or [check your permissions](../get-started/check-your-permissions.md)).
</FeatureFlag>
- Understand the [dataset workflow](../../key-concepts/the-dataset-workflow.md).

## Publish a dataset

When you publish a dataset, you can set its access rights so that it's only visible within your own organisation, or accessible to all organisations.

- Go to the **Approved** tab in the datasets panel.

- Select **View** on the dataset you want to publish.

- Review the dataset details found in the different tabs: **Dataset**, **Distributions**, **Data Dictionary**, **Relations**, and **Comments**.

<FeatureFlag flag="enable_multi_tenants">

- To publish the dataset to all organisations, select **Publish Dataset**. To publish it only within your organisation, select **Mark as Internal**. The comment field appears.

</FeatureFlag>

- (Optional) Enter your comments to provide context to other collaborators.

- Select **Publish Dataset** or **Mark as Internal** to confirm publication. After the dataset is published, it appears in the **Published** tab or the **Internal Only** tab.

   <img src={useBaseUrl('/manage-datasets/publish-dataset.png')} width="750" alt="A screenshot of the publish dataset and mark as internal buttons" />

