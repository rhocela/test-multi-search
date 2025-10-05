---
sidebar_position: 1
---
import FeatureFlag from '@site/src/components/FeatureFlag';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Add a dataset

Add and submit datasets for review—**individually or in bulk**. Use the dataset wizard for single entries, or save time by uploading multiple datasets in a single Excel file.

In this guide

> <u>Before you begin</u>  
> <u>Add a dataset</u>  
> <u>Upload datasets</u>  
> <u>Submit datasets for review</u>

## Before you begin

<FeatureFlag flag="enable_multi_tenants">
- Ensure you have the **Metadata Editor** role (or <u>check your permissions</u>).
</FeatureFlag>
<FeatureFlag flag="enable_multi_tenants" inverse>
- Ensure you have the necessary permissions (or <u>check your permissions</u>).
</FeatureFlag>
- Review the <u>DCAT-AP-LU vocabulary</u> to understand the fields you need to fill out.
- Review the <u>dataset workflow</u> to understand the approval process of your datasets.


## Add a dataset

Add a single dataset using the dataset wizard.

1. Select **Add dataset** on the main menu. 

   <img src={useBaseUrl('/manage-datasets/add-dataset.png')} alt="Screenshot of the add dataset button"  />

2. Fill out the dataset form. For guidance on filling out the form, see the definition of properties in the <u>DCAT-AP-LU Vocabulary</u>.

<FeatureFlag flag="enable_multi_tenants">
    :::note Note on dropdown lists

    All dropdown lists except for **keywords** are predefined in the system. To suggest an additional option to the list, contact your **Inventory Coordinator**. To add a **keyword** see: Add a keyword.

    :::
</FeatureFlag>

3. Select **Preview & Save** and review the dataset details.

4. Select **Save as Draft**. After the dataset is saved, the **Edit Dataset** page opens. At this stage, the dataset is saved to the **Draft** tab.

5. On the **Edit Dataset** page, add additional details such as Distributions, Data Dictionary and Dataset Relations. To add these details later, select **Cancel** and reopen your draft from the **Draft** tab.

6. After you complete the dataset details, you can <u>submit the dataset for review</u>.

## Upload datasets

Save time by adding **multiple datasets** from a single **Excel file**. Instead of submitting entries individually, enter all dataset details—including complex and nested properties like distributions and keywords—into your file, and then upload everything in one step.

To add datasets in bulk:

1. Select the upload icon <svg xmlns="http://www.w3.org/2000/svg" style={{display:"inline",verticalAlign:"middle",width:"1em",height:"1em"}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16V4m0 0l-4 4m4-4l4 4"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2"/></svg> on the main menu. 

   <img src={useBaseUrl('/manage-datasets/upload-datasets.png')} alt="Screenshot of the upload dataset button"  />

2. If it's your first time uploading datasets, select **Download Sample Excel Template**. The template is in `.xlsm` format, and you can open it in Excel.

3. Fill out the fields in the template, and then save the file.

    :::tip Upload keywords

    Instead of adding keywords individually, you can upload new keywords by including them in the Excel file. 

    :::

4. Select **Upload Excel file** and upload your file.

5. Select **Create Dataset**. After the datasets are created, the dashboard opens and the new datasets appear in the **Draft** tab.

## Submit datasets for review

Submit your datasets for review after you complete and review the details.

1. Go to the **Draft** tab in the datasets panel.

2. Select **View** on the dataset you want to submit. 

4. Review the dataset details and select **Submit Dataset**. The comment field appears. 

<FeatureFlag flag="enable_multi_tenants">
5. (Optional) Enter your comments to provide context to reviewers or other collaborators.
</FeatureFlag>
<FeatureFlag flag="enable_multi_tenants" inverse>
5. (Optional) Enter your comments to provide context to other collaborators.
</FeatureFlag>

6. Select **Submit Dataset** to confirm submission. After the dataset is submitted, it appears in the **Completed** tab and is ready for review <u>validation</u>.
