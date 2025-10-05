---
sidebar_position: 1
sidebar_label:  "What is Metadata Capture?"
---
import FeatureFlag from '@site/src/components/FeatureFlag';

# What is Metadata Capture?

**Metadata Capture** is a web application that enables organisations to capture, manage, and publish the **metadata** that describes their actual data. By cataloguing this metadata as **datasets**, Metadata Capture makes your information discoverable, understandable, and ready for sharing or reuse, while ensuring compliance with the Data Catalogue Vocabulary Application Profile - Luxembourg (<u>DCAT-AP-LU</u>).

<FeatureFlag flag="enable_multi_tenants">

Metadata Capture was created as part of the **Data Government Act (DGA)** initiative, which requires public organisations to make their data available for reuse across the public ecosystem. The platform supports this effort by enabling organisations to identify and prepare their data for cataloguing and sharing through rich metadata.

</FeatureFlag>

## How it works

The primary users of Metadata Capture are employees of organisations responsible for cataloguing and sharing information about their data. As an organisation, your first step to sharing data is to identify the types of data you hold. Metadata Capture allows you to:

- **Describe your data:** Capture and document the metadata of your actual data in a structured way, catalogued as datasets.
- **Centralise collaboration:** Work with colleagues in different roles to create, approve, and publish datasets.
- **Share metadata:** Publish datasets within and across organisations for discovery and data requests.

:::info Data access

**Metadata Capture** does *not* access or store your underlying data. Instead, it enables organisations (or <u>data holders</u>) to describe their available data, so that <u>data consumers</u> can find and request the data they need. In this way, Metadata Capture acts as a bridge between data holders and data consumers, ensuring that information is shared in line with data governance and compliance.

:::

## Accessing Metadata Capture

As an organisation, you can use Metadata Capture in two ways:

- **Access through Ministry for Digitalisation:** Use the link provided by Ministry for Digitalisation.
- **Self-hosting:** Deploy your own instance of Metadata Capture in your private environment.

## Key features of Metadata Capture

Metadata Capture offers a range of features to streamline the management of datasets (metadata records):

- **Metadata lifecycle management:** Manage datasets throughout their lifecycle, from creation to publication and deprecation.
- **Single sign-on (SSO):** Integrate with your organisation's Identity and Access Management (IAM) system for seamless authentication and role-based access control.
- **Granular access controls:** Assign roles with specific permissions to control access to datasets and actions users can perform.
- **Activity logging:** Track changes and actions taken on datasets for accountability and transparency.
- **Data dictionary:** Maintain detailed vocabulary for common elements used across datasets.
- **Organisation management:** Add and manage multiple organisations, allowing users to switch between them.
- **Search and filter:** Easily find datasets within and across organisations based on various criteria.
