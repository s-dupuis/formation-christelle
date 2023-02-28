/**
 * @flow
 * @relayHash 7e90d487aebe5cbcd5ce75a8cae789aa
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
export type CreateItemMutationVariables = {|
  item: ItemInput
|};
export type CreateItemMutationResponse = {|
  +createItem: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type CreateItemMutation = {|
  variables: CreateItemMutationVariables,
  response: CreateItemMutationResponse,
|};
*/


/*
mutation CreateItemMutation(
  $item: ItemInput!
) {
  createItem(item: $item) {
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
    "name": "item"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "item",
        "variableName": "item"
      }
    ],
    "concreteType": "DefaultMutationResponse",
    "kind": "LinkedField",
    "name": "createItem",
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
    "name": "CreateItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "7e90d487aebe5cbcd5ce75a8cae789aa",
    "metadata": {},
    "name": "CreateItemMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c1f94936d691545f351fa1afec1911b8';

module.exports = node;
