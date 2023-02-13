/**
 * @flow
 * @relayHash 2ebcab6cbe0d5a4339a63653c2c63edb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSignatureInput = {|
  subscriberId?: ?string
|};
export type CreateSignatureMutationVariables = {|
  input: CreateSignatureInput
|};
export type CreateSignatureMutationResponse = {|
  +CreateSignature: ?{|
    +ok: boolean,
    +error: ?string,
    +signerId: ?string,
  |}
|};
export type CreateSignatureMutation = {|
  variables: CreateSignatureMutationVariables,
  response: CreateSignatureMutationResponse,
|};
*/


/*
mutation CreateSignatureMutation(
  $input: CreateSignatureInput!
) {
  CreateSignature(input: $input) {
    ok
    error
    signerId
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
    "concreteType": "CreateSignatureMutationResponse",
    "kind": "LinkedField",
    "name": "CreateSignature",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "signerId",
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
    "name": "CreateSignatureMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateSignatureMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "2ebcab6cbe0d5a4339a63653c2c63edb",
    "metadata": {},
    "name": "CreateSignatureMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c30645641a38ae73f4a3e234dae304b8';

module.exports = node;
