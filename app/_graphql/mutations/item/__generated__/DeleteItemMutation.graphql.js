/**
 * @flow
 * @relayHash ac8b76d272d47ca4ba5db75fc574c2c7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteItemMutationVariables = {|
  itemId: string
|};
export type DeleteItemMutationResponse = {|
  +deleteItem: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type DeleteItemMutation = {|
  variables: DeleteItemMutationVariables,
  response: DeleteItemMutationResponse,
|};
*/


/*
mutation DeleteItemMutation(
  $itemId: String!
) {
  deleteItem(itemId: $itemId) {
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
    "name": "itemId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "itemId",
        "variableName": "itemId"
      }
    ],
    "concreteType": "DefaultMutationResponse",
    "kind": "LinkedField",
    "name": "deleteItem",
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
    "name": "DeleteItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "ac8b76d272d47ca4ba5db75fc574c2c7",
    "metadata": {},
    "name": "DeleteItemMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91880d1f6c6005baf18bc855a840487a';

module.exports = node;
