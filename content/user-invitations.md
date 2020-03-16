---
title: User invitations
path: /user-invitations
---

Invitations are used to onboard 3 kinds of users; Partner Admins, Team Admins, Customers. Below are the steps to follow to create an invitation each of those user types via Django Admin under the 'Invitations' section (/admin/invitation/invitation/).

**Notes**:
- Invitations can be used only once, if there's an issue then create a new one.
- Invitations are not automatically sent via email. You can either copy the generated web app link and send manually or use Django to send it. See [Sending an invite](#sending-an-invite).

### 1. Partner Admin
---

1. Make sure a Partner exists for the user you are about to invite.
1. Select 'Partner Admin' from the target dropdown.
1. Add the users email address.
1. Select the Partner from the Partner dropdown.
1. Leave the Team field blank.
1. Save invitation.

### 2. Team Admin
---

1. Make sure a Team exists for the user you are about to invite.
1. Select 'Team Admin' from the target dropdown.
1. Add the users email address.
1. Select the Team from the Partner dropdown.
1. Leave the Partner field blank.
1. Save invitation.

### 3. Customer
---

1. Make sure a Team exists for the user you are about to invite.
1. Select 'Customer' from the target dropdown.
1. Add the users email address.
1. Select the Team from the Partner dropdown.
1. Leave the Partner field blank.
1. Save invitation.

---

## Sending an invite

Invitations are not automatically sent via email. To send via email you need to select the invite using the checkbox next to it one the listing page and then select 'Send invitation email to selected invitations'.
