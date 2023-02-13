import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../../.';

const mutation = graphql`
  mutation SubscriberSurveyAnswersMutation($subscriberId: String!, $question1: String!, $question2: String!) {
    subscriberSurveyAnswers(subscriberId: $subscriberId, question1: $question1, question2: $question2) {
      ok
      error
    }
  }
`;

export default (
  variables,
  done
) => {
  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ subscriberSurveyAnswers }) => {
        const { ok, error } = subscriberSurveyAnswers;
        done(ok, error);
      },
      onError: error => {
        console.error(error);
        done(false, error);
      }
    }
  );
};
