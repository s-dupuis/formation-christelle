/**
 * @flow
 * @relayHash 62403ee8731936dc0e1cb00fa0029355
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BeneficiaryEnum = "A" | "C" | "E" | "K" | "L" | "S" | "T" | "U" | "%future added value";
export type CivilityEnum = "M" | "MME" | "%future added value";
export type SubscriberBeneficiaryInformationInput = {|
  beneficiaryType: BeneficiaryEnum,
  birthDate: string,
  civility: CivilityEnum,
  externalId: string,
  firstName: string,
  lastName: string,
  nic?: ?string,
  subscriberId?: ?string,
|};
export type SubscriberBeneficiaryInformationMutationVariables = {|
  input: SubscriberBeneficiaryInformationInput
|};
export type SubscriberBeneficiaryInformationMutationResponse = {|
  +SubscriberBeneficiaryInformation: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type SubscriberBeneficiaryInformationMutation = {|
  variables: SubscriberBeneficiaryInformationMutationVariables,
  response: SubscriberBeneficiaryInformationMutationResponse,
|};
*/


/*
mutation SubscriberBeneficiaryInformationMutation(
  $input: SubscriberBeneficiaryInformationInput!
) {
  SubscriberBeneficiaryInformation(input: $input) {
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
    "concreteType": "SubscriberBeneficiaryInformationMutationResponse",
    "kind": "LinkedField",
    "name": "SubscriberBeneficiaryInformation",
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
    "name": "SubscriberBeneficiaryInformationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubscriberBeneficiaryInformationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "62403ee8731936dc0e1cb00fa0029355",
    "metadata": {},
    "name": "SubscriberBeneficiaryInformationMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '940c049efe243cce048d7b1cfd5b9c5e';

module.exports = node;
