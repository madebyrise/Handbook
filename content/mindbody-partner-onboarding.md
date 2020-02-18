---
title: Mindbody partner onboarding
path: /mbo-partner-onboarding
---

We rely on selected partners to provide us with Sessions via Mindbody.

To integrate with a new Mindbody partner we must folow the following steps for their sessions to be integrated into the Rise platform.

**Note**: If the partner has already been activated or integrated before then you can skip steps 3 & 4.

1. Get the partners Mindbody Site ID.
1. Create a new partner in the Core Django admin and set the 'Mindbody id' value to the Site ID.
1. From the partner list page select the partner and from the action dropdown select 'Get activation code for partner'. Mindbody will the be contacted and an activation code generated. The activation code and URL will be viewable if you goto edit a partner.
1. Send this activation URL or code to the Partner for them to activate our access to their Site on Mindbody
1. Once the activation is complete come back to the Django admin and again select the partner and this time use the 'Fetch info from Mindbody for selected partner' action. This will get all the required info about the Partner we need to start offering their sessions form the Rise platform.
1. The next time data is refreshed from Mindbody this partners sessions will be pulled into our site.

For more technical information on the Mindbody integration read the docs in the Core repository: [https://github.com/madebyrise/core/blob/develop/docs/mindbody_integration.md](https://github.com/madebyrise/core/blob/develop/docs/mindbody_integration.md)
