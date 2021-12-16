/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here
  "representation": 0,

  // myself default values
  "type-of-interested-party": "Myself",
  "full-name": "Joe Bloggs",
  "over-18": "Yes",
  "myselfContactPref": "Email, Telephone, Letter",
  "email": "joe.bloggs@email.com",
  "telephone-number": "01234567890",
  "myself-selectAnAddress": "13 Anker Lane\nBristol",
  "address-line-1": "13 Anker Lane",
  "address-line-2": "Bristol",
  "address-line-3": "",
  "address-postcode": "BS1 6PN",
  "address-country": "UK",
  "myself-postcode": "BS1 6PN",
  "myself-comment": "A placeholder comment about air quality",

  // organisation default values
  "myself-comment-array": [],
  "organisation-comment-array": [],
  "behalf-comment-array": []
}
