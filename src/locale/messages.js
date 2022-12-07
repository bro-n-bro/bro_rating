export default {
    // English
    en: {
        message: {
            'page_title': 'Bro rating',

            // Home
            'home_title': "Bro rating",
            'home_desc': "Validator's rating created by Bro_n_Bro.<br> Bro rating is aimed at community needs with regard to an appropriate funds decentralization in different Cosmos networks.",

            // Compare
            'compare_title': 'Comparison result',
            'compare_hide_options': 'Hide identical options',
            'compare_yes': 'Yes',
            'compare_no': 'No',

            'compare_title_col_greed': 'Greed',
            'compare_title_col_cost': 'Cost optimization',
            'compare_title_col_power': 'Voting power rank',
            'compare_title_col_decentralization': 'Decentralization',
            'compare_title_col_ownership': 'Ownership',
            'compare_title_col_confidence': 'Confidence',
            'compare_title_col_voted': 'Props voted',
            'compare_title_col_participation': 'Participation',
            'compare_title_col_blurring': 'Tokens blurring',
            'compare_title_col_reliability': 'Reliability',
            'compare_title_col_active_set': 'In active set',
            'compare_title_col_total': 'Total',
            'compare_title_col_score': 'Bro score',

            'compare_error_modal_title': 'You are able to pin only {limit} validators',
            // 'compare_error_modal_desc': 'Amet, luctus cras dolor sed mattis sed faucibus. Elit.',

            // Notice
            'notice_default': '',
            'notice_col_greed': "The percentage of validator's commision.",
            'notice_col_score': 'The score of the validator by bro score.',
            'notice_col_power': 'The rank of validator according to voting power.',
            'notice_col_moniker': 'The moniker of the validator.',
            'notice_col_cost': 'The cost optimization criteria of the validator. It depends on the validator’s commission ({greed}%) and decreases when the commission increases. It’s equal to zero if the commission of the validator is zero to avoid the advertising effect.',
            'notice_col_decentralization': 'This criterion helps decentralize the network. The decentralization level depends on the validator’s voting power rank ({validator_rank}). It logarithmically increases with increasing rank number.',
            'notice_col_confidence': 'The confidence of the validator depends on the share of tokens ({ownership}) which validator delegates to itself. It increases from 0 to 20% rapidly and then decreases back to zero, to avoid super-newby validators and CEXes.',
            'notice_col_participation': 'This criterion shows how many points the validator received for his voting on last props.',
            'notice_col_reliability': 'We can define reliability without any precommits calculations. To understand the reliability we can divide staked tokens ({staked} {token}) into delegator shares ({delegator_shares} {token}). The result should be equal to 1 if everything is ok and there is no token loss by slashing. Otherwise, the criterion points decrease with the result decrease.',
            'notice_col_ownership': 'The ratio of the number of tokens delegated to yourself to the total number of delegations.',
            'notice_active_set': 'If "Yes" is shown, it means that the validator is in the active set, if "No" is shown - the validator is outside the active set.',
            'notice_col_total': 'The sum of the criteria points.',
            'notice_col_voted': 'This criterion is about the number of votes ({voted}) for the last 5 ended proposals.',
            'notice_col_blurring': 'This criterion shows how many tokens were lost by the validator on the slashing in fractions.',

            // Rtaing
            'rating_block_title': 'Validators',
            'last_updated': 'Last updated',

            'title_col_score': 'Bro score',
            'title_col_power': 'Voting power',
            'title_col_moniker': 'Moniker',
            'title_col_cost': 'Cost optimization',
            'title_col_decentralization': 'Decentralization',
            'title_col_confidence': 'Confidence',
            'title_col_participation': 'Participation',
            'title_col_reliability': 'Reliability',
            'title_col_total': 'Total',

            'filter_title': 'Change visibility of columns',

            // Placeholders
            'search_placeholder': 'Validator name',
            'choose_network_placeholder': 'Choose network',

            // Buttons
            'compare_btn': 'Compare',
            'see_results_btn': 'See results',
            'delegate_btn': 'Delegate',
            'back_btn': 'Back to Validators list'
        }
    }
}