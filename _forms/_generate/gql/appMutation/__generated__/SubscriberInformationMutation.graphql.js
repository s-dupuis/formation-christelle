/**
 * @flow
 * @relayHash 19e4b976e56afd9d83b429bde502cef5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CivilityEnum = "M" | "MME" | "%future added value";
export type SubscriberInformationInput = {|
  address: string,
  birthDate: string,
  birthName?: ?string,
  city: string,
  civility: CivilityEnum,
  effectDate: string,
  email: string,
  externalId: string,
  firstName: string,
  isBeneficiary?: ?string,
  lastName: string,
  nic?: ?string,
  phone: string,
  subscriberId?: ?string,
  zipCode: string,
|};
export type SubscriberInformationMutationVariables = {|
  input: SubscriberInformationInput
|};
export type SubscriberInformationMutationResponse = {|
  +SubscriberInformation: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type SubscriberInformationMutation = {|
  variables: SubscriberInformationMutationVariables,
  response: SubscriberInformationMutationResponse,
|};
*/


/*
mutation SubscriberInformationMutation(
  $input: SubscriberInformationInput!
) {
  SubscriberInformation(input: $input) {
    ok
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SubscriberInformationMutationResponse",
    "kind": "LinkedField",
    "name": "SubscriberInformation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SubscriberInformationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubscriberInformationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "19e4b976e56afd9d83b429bde502cef5",
    "metadata": {},
    "name": "SubscriberInformationMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce92e00d77e5ab0dd483d7b34393ec21';

module.exports = node;
