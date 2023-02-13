/**
 * @flow
 * @relayHash 80add1d1e0b2c3df4c73d8a3556470a0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignOutMutationVariables = {||};
export type SignOutMutationResponse = {|
  +signOut: ?{|
    +ok: boolean,
    +error: ?string,
    +userSession: ?{|
      +id: ?string,
      +username: ?string,
    |},
  |}
|};
export type SignOutMutation = {|
  variables: SignOutMutationVariables,
  response: SignOutMutationResponse,
|};
*/


/*
mutation SignOutMutation {
  signOut {
    ok
    error
    userSession {
      id
      username
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "SignOutMutationResponse",
    "kind": "LinkedField",
    "name": "signOut",
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
        "concreteType": "UserSession",
        "kind": "LinkedField",
        "name": "userSession",
        "plural": false,
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
            "name": "username",
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
    "name": "SignOutMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SignOutMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "80add1d1e0b2c3df4c73d8a3556470a0",
    "metadata": {},
    "name": "SignOutMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0d8e93f905937a6b64fa6a50fc6f8107';

module.exports = node;
