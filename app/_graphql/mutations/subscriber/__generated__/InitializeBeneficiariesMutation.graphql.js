/**
 * @flow
 * @relayHash 5baa4ba64ed43633b66364516fb8d735
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CivilityEnum = "M" | "MME" | "%future added value";
export type BeneficiariesInput = {|
  beneficiaries?: ?$ReadOnlyArray<?ContractBeneficiaryInput>,
  externalId?: ?string,
  subscriber?: ?ContractSubscriberInput,
|};
export type ContractBeneficiaryInput = {|
  beneficiaryType?: ?string,
  birthDate?: ?string,
  civility?: ?CivilityEnum,
  externalId?: ?string,
  firstName?: ?string,
  fullName?: ?string,
  id?: ?string,
  lastName?: ?string,
  nic?: ?string,
|};
export type ContractSubscriberInput = {|
  address?: ?string,
  birthDate?: ?string,
  birthName?: ?string,
  city?: ?string,
  civility?: ?CivilityEnum,
  email?: ?string,
  externalId?: ?string,
  firstName?: ?string,
  fullName?: ?string,
  id?: ?string,
  isBeneficiary?: ?boolean,
  lastName?: ?string,
  nic?: ?string,
  phone?: ?string,
  zipCode?: ?string,
|};
export type InitializeBeneficiariesMutationVariables = {|
  beneficiaries: BeneficiariesInput
|};
export type InitializeBeneficiariesMutationResponse = {|
  +initializeBeneficiaries: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type InitializeBeneficiariesMutation = {|
  variables: InitializeBeneficiariesMutationVariables,
  response: InitializeBeneficiariesMutationResponse,
|};
*/


/*
mutation InitializeBeneficiariesMutation(
  $beneficiaries: BeneficiariesInput!
) {
  initializeBeneficiaries(beneficiaries: $beneficiaries) {
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
    "name": "beneficiaries"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "beneficiaries",
        "variableName": "beneficiaries"
      }
    ],
    "concreteType": "DefaultMutationResponse",
    "kind": "LinkedField",
    "name": "initializeBeneficiaries",
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
    "name": "InitializeBeneficiariesMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InitializeBeneficiariesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "5baa4ba64ed43633b66364516fb8d735",
    "metadata": {},
    "name": "InitializeBeneficiariesMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3e13218f44d3fbc9ae21e94ebc93f670';

module.exports = node;
