---
sidebar_position: 3
---
import FeatureFlag from '@site/src/components/FeatureFlag';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Approve a dataset

<FeatureFlag flag="enable_multi_tenants">
Approve datasets that have been validated by Metadata Reviewers.
</FeatureFlag>
<FeatureFlag flag="enable_multi_tenants" inverse>
Approve datasets that have been validated.
</FeatureFlag> 

In this guide

> [Before you begin](#before-you-begin)  
> [Approve a dataset](#approve-a-dataset-1)

## Before you begin

<FeatureFlag flag="enable_multi_tenants">
- Ensure you have the **Metadata Approver** role (or [check your permissions](../get-started/check-your-permissions.md)).
</FeatureFlag>
<FeatureFlag flag="enable_multi_tenants" inverse>
- Ensure you have the necessary permissions (or [check your permissions](../get-started/check-your-permissions.md)).
</FeatureFlag>
- Understand the [dataset workflow](../../key-concepts/the-dataset-workflow.md).

## Approve a dataset

<FeatureFlag flag="enable_multi_tenants">
Ensure that the datasets meet the **Accord de Principe** and are ready for publication. 
</FeatureFlag>

1. Go to the  **Validated** tab in the datasets panel.

2. Select **View** on the dataset you want to validate.

3. Review the dataset details found in the different tabs: **Dataset**, **Distributions**, **Data Dictionary**, **Relations**, and **Comments**.

4. Select **Approve Dataset**. The comment field appears.

5. (Optional) Enter your comments to provide context to other collaborators.

6. Select **Approve Dataset** to confirm approval. After the dataset is approved, it appears in the **Approved** tab and is ready for [publication](./publish-a-dataset.md).

   <img src={useBaseUrl('/manage-datasets/approve-dataset.png')} width="750" alt="A screenshot of the approve dataset button" />

   <br/> 
   <br/>

   :::info Need changes?

<FeatureFlag flag="enable_multi_tenants">
    If you require changes to the dataset, select **Revert to Draft** and provide comments. The dataset moves back to the **Draft** tab so the Metadata Editor for further editing.
    </FeatureFlag>
    <FeatureFlag flag="enable_multi_tenants" inverse>
    If you require changes to the dataset, select **Revert to Draft** and provide comments. The dataset moves back to the **Draft** tab for further editing.
    </FeatureFlag> 

    :::
