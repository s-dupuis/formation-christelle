/**
 * @flow
 * @relayHash 15de75f526c32ba4027cc09a9d0eabfb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubscriberBankInformationInput = {|
  file: FileInput,
  iban: string,
  subscriberId?: ?string,
|};
export type FileInput = {|
  fileName: string,
  uploadId: string,
|};
export type SubscriberBankInformationMutationVariables = {|
  input: SubscriberBankInformationInput
|};
export type SubscriberBankInformationMutationResponse = {|
  +SubscriberBankInformation: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type SubscriberBankInformationMutation = {|
  variables: SubscriberBankInformationMutationVariables,
  response: SubscriberBankInformationMutationResponse,
|};
*/


/*
mutation SubscriberBankInformationMutation(
  $input: SubscriberBankInformationInput!
) {
  SubscriberBankInformation(input: $input) {
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
    "concreteType": "SubscriberBankInformationMutationResponse",
    "kind": "LinkedField",
    "name": "SubscriberBankInformation",
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
    "name": "SubscriberBankInformationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubscriberBankInformationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "15de75f526c32ba4027cc09a9d0eabfb",
    "metadata": {},
    "name": "SubscriberBankInformationMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '646d1e99593e52f9eb15a2a74cab87b0';

module.exports = node;
