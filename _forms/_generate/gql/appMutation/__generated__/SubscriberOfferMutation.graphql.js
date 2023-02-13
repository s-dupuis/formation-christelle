/**
 * @flow
 * @relayHash 4ab4369001d61810ee465c956aa6f92c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubscriberOfferInput = {|
  offerId: string,
  subscriberId?: ?string,
|};
export type SubscriberOfferMutationVariables = {|
  input: SubscriberOfferInput
|};
export type SubscriberOfferMutationResponse = {|
  +SubscriberOffer: ?{|
    +ok: boolean,
    +error: ?string,
  |}
|};
export type SubscriberOfferMutation = {|
  variables: SubscriberOfferMutationVariables,
  response: SubscriberOfferMutationResponse,
|};
*/


/*
mutation SubscriberOfferMutation(
  $input: SubscriberOfferInput!
) {
  SubscriberOffer(input: $input) {
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
    "concreteType": "SubscriberOfferMutationResponse",
    "kind": "LinkedField",
    "name": "SubscriberOffer",
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
    "name": "SubscriberOfferMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubscriberOfferMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "4ab4369001d61810ee465c956aa6f92c",
    "metadata": {},
    "name": "SubscriberOfferMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3946f2f1f015ffb62ee88beda93f327e';

module.exports = node;
