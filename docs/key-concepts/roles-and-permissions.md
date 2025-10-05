---
sidebar_position: 4
---
import FeatureFlag from '@site/src/components/FeatureFlag';

# Roles and permissions

<FeatureFlag flag="enable_multi_tenants">
Understand the **roles and their hierarchy** within Metadata Capture to **identify contacts and access support** within and outside your organisation.

Metadata Capture provides **pre-defined roles** that determine the actions you can perform with datasets. Each stage in the <u>dataset workflow</u> requires specific user roles with defined responsibilities.  The following diagram illustrates these roles and their relationships:

:::info Organisational roles vs technical roles

This guide explains the **organisational roles** within Metadata Capture that determine what actions users can perform with datasets. If you are deploying the application and want to configure these roles, see the <u>system admin guide</u>.

:::

<br/>

    ```mermaid
    ---
    title: Organisational roles in Metadata Capture
    ---
    graph TD
        CM[Catalogue Manager<br/>#40;System-wide#41;]
        
        subgraph ORG[" **Organisation** "]
            IC[Inventory Coordinator]
            ME[Metadata Editor]
            MR[Metadata Reviewer]
            MA[Metadata Approver]
        end

    CM -->|Assigns| IC
    CM -.->|Can assign any role| ME
    CM -.->|Can assign any role| MR
    CM -.->|Can assign any role| MA

    IC -->|Assigns within org| ME
    IC -->|Assigns within org| MR
    IC -->|Assigns within org| MA

    style CM fill:#6EC0A7,color:#FFFFFF,stroke:#4A8A73
    style IC fill:#4EAEDC,color:#FFFFFF,stroke:#4A8A73
    style ME fill:#4EAEDC,color:#FFFFFF,stroke:#3581B8
    style MR fill:#4EAEDC,color:#FFFFFF,stroke:#3581B8
    style MA fill:#4EAEDC,color:#FFFFFF,stroke:#3581B8
    style ORG fill:#FFF9E6,color:#B8941A,stroke:#F5C945,stroke-width:0.3px
```

Here's a quick reference of each role and their responsibilities:

| Role | Scope | Responsibilities |
|------|-------|-----------------|
| **Catalogue Manager** | System-wide | • Publish datasets<br/>• Unpublish datasets<br/>• Deprecate datasets<br/>• Manage authentic source label proposals<br/>• Publish authentic source labels<br/>• Provide support to other roles<br/>• Manage controlled vocabularies |
| **Inventory Coordinator** | Organisation-level |  • Assign/Unassign Metadata Editors <br/> • Assign/Unassign Metadata Reviewers<br/>• Assign/Unassign Metadata Approvers<br/>• Manage organisation contact points |
| **Metadata Approver** | Organisation-level | • Grant/remove *Accord de Principe* for publication<br/>• Final review and approval for publication |
| **Metadata Reviewer** | Organisation-level | • Ensure dataset quality and accuracy<br/> • Review datasets for approval |
| **Metadata Editor** | Organisation-level | • Create datasets<br/>• Update datasets<br/>• Submit datasets for review |

## Catalogue Manager

The **Catalogue Manager** is a member of the Ministry for Digitalisation or an approved sub-contractor who serves as the system-wide administrator of the platform. They oversee the dataset governance across all organisations, and operate in three key areas:

- **User management:** Assigns Inventory Coordinators and supports all roles.
- **Publication control:** Publishes, unpublishes, and deprecates records; and manage authentic source labels.
- **Vocabulary management:** Maintains controlled vocabularies (keywords, legal basis, organisations).

## Inventory Coordinator

The **Inventory Coordinator** is a member of your organisation appointed by a Catalogue Manager. They ensure datasets are properly documented and reviewed through:

- **Role management:** Assigns Metadata Editors, Reviewers, and Approvers within your organisation.
- **Contact management:** Manages the contact points in your organisation for proper communication.

## Metadata Approver

The **Metadata Approver** has authority to legally bind your organisation to publication decisions. Appointed by the Inventory Coordinator, they focus on:

- **Publication authorization:** Grants or removes *Accord de Principe* for publication.
- **Final validation:** Approves metadata records for publication.

:::info Important

Although **Catalogue Managers** can view and interact with all records, **only Metadata Approvers** have the authority to approve records for their organisation. This approval signifies your organisation's consent to publish the metadata and, if given, their *Accord de Principe*.

:::

## Metadata Reviewer

The **Metadata Reviewer** is a member of your organisation who ensures the quality and accuracy of metadata records before they reach the approval stage. Appointed by the Inventory Coordinator, they focus on:

- **Quality control:** Review metadata records submitted by Metadata Editors for completeness and accuracy.
- **Validation:** Verify that dataset descriptions accurately represent the underlying data resources.

## Metadata Editor

The **Metadata Editor** is a member of your organisation who creates and maintains metadata records. Appointed by the Inventory Coordinator, they work on:

- **Dataset creation:** Create new metadata records for datasets held by their organisation.
- **Content maintenance:** Update existing metadata records to reflect changes in datasets.
- **Workflow initiation:** Submit completed metadata records for review to begin the publication process.

:::info Required Roles

To maintain a data inventory, all organisations must have **all organisation-level roles** described in this document to maintain a data inventory: Metadata Editor, Metadata Reviewer, and Metadata Approver.

:::
</FeatureFlag>

<FeatureFlag flag="enable_multi_tenants" inverse>
Understand the **roles and permissions system** within Metadata Capture to control who can access and modify your datasets.

Metadata Capture allows you to define custom roles and permissions through the configuration file to match your organisation's workflow needs. Each role can be assigned specific permissions that control what actions users can perform with datasets.

## Custom Role Configuration

You can create roles tailored to your organisation by defining them in the configuration file. Each role includes a set of permissions that determine what users can do within the system.

**Example roles you might define:**

- **Data Creator:** Can create and edit their own datasets
- **Quality Reviewer:** Can review and validate datasets for accuracy
- **Publication Manager:** Can approve datasets for publication
- **Administrator:** Has full system access and can manage other users

**Example permissions include:**

- Creating and editing datasets
- Reviewing submitted datasets
- Approving datasets for publication
- Managing user roles
- Editing organisation information

This flexible system allows you to implement the exact workflow and approval process that works best for your organisation, whether you need a simple single-approval process or a more complex multi-stage review workflow.

:::tip Configuration

Contact your system administrator to set up roles and permissions that match your organisation's data governance requirements.

:::
</FeatureFlag>
