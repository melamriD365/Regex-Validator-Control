## Regex Validator Control:
This is a React / Fluent UI Component that use platform libraries. It validates text input using Regex Expression and return a boolean output.
The boolean output is named "isValid" and its value is equal to true if the regex expression is satified otherwise it is equal to false.

## Steps:
1. Download the managed solution from the latest [release](https://github.com/melamriD365/Regex-Validator-Control/releases)
2. Install the managed solution in your environment.
3. Apply the Regex-Validator-Control to a column of type SingleLine.Text, SingleLine.Phone or SingleLine.Email.

## Use Case:
The configuration below allows to check if a column of type SingleLine.Phone satisfies a given regular expression:
* Regex Expression: ^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$
   * The value "(541) 754-1234" of the input returns "Regex validation result" equal to true
   * The value "754-1234" of the input returns "Regex validation result" equal to false
* Validate for existing data ? : No
   * This props support two values (Yes and No)
   * If its equal to Yes, then the regular expression will be verified for the default value.



