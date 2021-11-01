# PINS-Applications-Prototypes

## Changes to components
Components have been edited to fit PINS required functionality. Components that have been edited are listed below. They can be found in:
`node_modules/govuk-frontend/govuk/components/[COMPONENT]`

The govuk-frontend folder has not been included in the Gitignore file to allow changes to be uploaded.

### Components
#### Header
This was created from a copy of the Gov.UK header. Created so as not to overwrite the Gov Header in case it needs to be used in the future. It is referenced in the layout.html page within the views folder.
#### Footer
This was created from a copy of the Gov.UK footer. Created so as not to overwrite the Gov Header in case it needs to be used in the future. It is referenced in the layout.html page within the views folder. For MVP the links should go to the existing NSIP website.
#### Contents side bar
Created to allow easy reuse on pages.
#### Step-by-step side bar
The IP and DCO process guides both have side bar on the individual steps' pages. The side bar was created to allow one change is then rolled out to each of the pages, rather than having to go into each individual page and manually change whenever a content change happens.