---
sidebar_position: 2
---
import FeatureFlag from '@site/src/components/FeatureFlag';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Validate a dataset

<FeatureFlag flag="enable_multi_tenants">
Review and **validate datasets** that have been submitted by Metadata Editors. 
</FeatureFlag>
<FeatureFlag flag="enable_multi_tenants" inverse>
Review and **validate datasets** that have been submitted.
</FeatureFlag>

In this guide

> [Before you begin](#before-you-begin)  
> [Validate a dataset](#validate-a-dataset-1)

## Before you begin

<FeatureFlag flag="enable_multi_tenants">
- Ensure you have the **Metadata Reviewer** role (or [check your permissions](../get-started/check-your-permissions.md)).
</FeatureFlag>
<FeatureFlag flag="enable_multi_tenants" inverse>
- Ensure you have the necessary permissions (or [check your permissions](../get-started/check-your-permissions.md)).
</FeatureFlag>
- Understand the [dataset workflow](../../key-concepts/the-dataset-workflow.md).

## Validate a dataset

<FeatureFlag flag="enable_multi_tenants">
Ensure that the datasets submitted by Metadata Editors describe the underlying data accurately and completely.
</FeatureFlag>

1. Go to the **Completed** tab in the datasets panel.

2. Select **View** on the dataset you want to validate.

3. Review the dataset details found in the different tabs: **Dataset**, **Distributions**, **Data Dictionary**, **Relations**, and **Comments**.

4. Select **Validate Dataset**. The comment field appears. 

5. (Optional) Enter your comments to provide context to other collaborators.

6. Select **Validate Dataset** to confirm validation. After the dataset is validated, it appears in the **Validated** tab and is ready for [approval](./approve-a-dataset.md).


    <img src={useBaseUrl('/manage-datasets/validate-dataset.png')} width="750" alt="A screenshot of the validate dataset button" />

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
