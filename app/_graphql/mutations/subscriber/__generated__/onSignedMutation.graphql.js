/**
 * @flow
 * @relayHash cc247ac56eccaa08f425f7d9c0a6c3b1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type onSignedMutationVariables = {|
  subscriberId: string
|};
export type onSignedMutationResponse = {|
  +onSigned: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type onSignedMutation = {|
  variables: onSignedMutationVariables,
  response: onSignedMutationResponse,
|};
*/


/*
mutation onSignedMutation(
  $subscriberId: String!
) {
  onSigned(subscriberId: $subscriberId) {
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
    "name": "subscriberId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "subscriberId",
        "variableName": "subscriberId"
      }
    ],
    "concreteType": "DefaultMutationResponse",
    "kind": "LinkedField",
    "name": "onSigned",
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
    "name": "onSignedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "onSignedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "cc247ac56eccaa08f425f7d9c0a6c3b1",
    "metadata": {},
    "name": "onSignedMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '39ebeeb8a30a63016d1975937d0626b9';

module.exports = node;
