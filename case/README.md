## Unzip and turn to json server.
This case is waits to `unzip` that `csv` turn to `people.json` located by under of db folder and use `json` as a db with `nodejs`.

## Create react app
Then make requests from react app located under app to that server for CRD(create,read, delete) operations of `people.json`.

## Create your ui
We are expecting to use `fluent ui` for creating this ui.
You should group people by jobs then show under of that group and user can be able to edit, remove and add new user.

## Ui explanation
We are expecting to see jobs with groups `GroupedList` component for show grouped by job. Under of groups gonna render `DetailsList`  component. Every row of `DetailsList` is reperesent 1 person. Row should include all properties from json, remove button and image, image should came from random image api and render with `Persona` component.


## Resources
- https://developer.microsoft.com/en-us/fluentui#/controls/web/detailslist
- https://developer.microsoft.com/en-us/fluentui#/controls/web/groupedlist
- https://developer.microsoft.com/en-us/fluentui#/controls/web/persona
- https://picsum.photos
- https://www.npmjs.com/package/decompress
- https://www.npmjs.com/package/json-server
