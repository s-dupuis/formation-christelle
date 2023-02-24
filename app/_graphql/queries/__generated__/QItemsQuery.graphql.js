/**
 * @flow
 * @relayHash 2d69c440499ad124387d7220a4c7772f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoryEnum = "A" | "B" | "C" | "D" | "%future added value";
export type QItemsQueryVariables = {||};
export type QItemsQueryResponse = {|
  +items: ?{|
    +ok: ?boolean,
    +items: ?$ReadOnlyArray<?{|
      +id: ?string,
      +name: ?string,
      +category: ?CategoryEnum,
      +group: ?string,
    |}>,
  |}
|};
export type QItemsQuery = {|
  variables: QItemsQueryVariables,
  response: QItemsQueryResponse,
|};
*/


/*
query QItemsQuery {
  items {
    ok
    items {
      id
      name
      category
      group
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ItemsStatus",
    "kind": "LinkedField",
    "name": "items",
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
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "group",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QItemsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QItemsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "2d69c440499ad124387d7220a4c7772f",
    "metadata": {},
    "name": "QItemsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '40e4aa81aef6f94765052a153d17be6b';

module.exports = node;
