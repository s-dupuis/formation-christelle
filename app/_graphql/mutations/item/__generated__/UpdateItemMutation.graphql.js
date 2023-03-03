/**
 * @flow
 * @relayHash f3e41ae644e10e4316792e86fa873094
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoryEnum = "A" | "B" | "C" | "D" | "%future added value";
export type ItemInput = {|
  category?: ?CategoryEnum,
  group?: ?string,
  name?: ?string,
|};
export type UpdateItemMutationVariables = {|
  itemId: string,
  data: ItemInput,
|};
export type UpdateItemMutationResponse = {|
  +updateItem: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type UpdateItemMutation = {|
  variables: UpdateItemMutationVariables,
  response: UpdateItemMutationResponse,
|};
*/


/*
mutation UpdateItemMutation(
  $itemId: String!
  $data: ItemInput!
) {
  updateItem(itemId: $itemId, data: $data) {
    ok
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "data"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "itemId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      },
      {
        "kind": "Variable",
        "name": "itemId",
        "variableName": "itemId"
      }
    ],
    "concreteType": "DefaultMutationResponse",
    "kind": "LinkedField",
    "name": "updateItem",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateItemMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateItemMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": "f3e41ae644e10e4316792e86fa873094",
    "metadata": {},
    "name": "UpdateItemMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3cc5752a6ec85d05884f6ee56e4b8281';

module.exports = node;
