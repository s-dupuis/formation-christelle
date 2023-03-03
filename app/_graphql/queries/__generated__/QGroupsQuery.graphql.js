/**
 * @flow
 * @relayHash f1d9bd915fae84915f0fd439de7aaf79
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QGroupsQueryVariables = {||};
export type QGroupsQueryResponse = {|
  +groups: ?{|
    +ok: ?boolean,
    +groups: ?$ReadOnlyArray<?{|
      +label: ?string,
      +value: ?string,
    |}>,
  |}
|};
export type QGroupsQuery = {|
  variables: QGroupsQueryVariables,
  response: QGroupsQueryResponse,
|};
*/


/*
query QGroupsQuery {
  groups {
    ok
    groups {
      label
      value
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GroupsStatus",
    "kind": "LinkedField",
    "name": "groups",
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
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "groups",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
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
    "name": "QGroupsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QGroupsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "f1d9bd915fae84915f0fd439de7aaf79",
    "metadata": {},
    "name": "QGroupsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0b49cc99a7493c3aabc68da82b9082b8';

module.exports = node;
